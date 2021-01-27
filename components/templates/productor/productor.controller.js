import { client } from '../../../libs/apollo.lib';
import { allMusicalStyleOptionsQuery } from '../../../queries/musicalGenres.query';
import {
  createProductor,
  updateProductor,
  createLocation,
  updateLocation
} from './productor.repository';
import { basicInformationIsValid } from './productor.validate';
import { allCountriesQuery, allStateQuery } from './productor.queries';
import { getBase64, uploadImageToStorage } from '../../../utils/file.utils';

/**
 * this function remove tag of song of productor songs list
 * @param {object} props song properties
 * @param {string} props.id song reference
 * @param {array} props.tags songs list of productor
 * @param {cuntion} props.setTag this function set on form state the new songs list
 */
export const deleteTag = ({ id, tags, setTag }) => {
  const myTags = tags.filter((tag) => tag.id !== id);
  setTag(myTags);
};

/**
 * this function change on form state the productor country
 * @param {object} props properties
 * @param {object} props.data country informations
 * @param {function} props.setStates set states options on form state based
 * on selected country by the productor
 * @param {function} props.setCountry set selected country on form state based
 * @param {function} props.cb callback function
 */
export const handleCountrySelect = async ({ data, setStates, setCountry, cb }) => {
  const countries = await client().query({
    query: allStateQuery,
    variables: {
      state: {
        country: data.id
      }
    }
  });

  const states = countries.data.allStates.map((c) => ({
    label: c.name,
    short_name: c.short_name,
    id: c.id
  }));

  if (cb) cb({ states });
  setStates(states);
  setCountry(data);
};

/**
 * this function change on form state the productor state
 * @param {object} props properties
 * @param {object} props.data state informations
 * @param {function} props.setState set on form state the productor state
 */
export const handleStateSelect = async ({ data, setState }) => {
  setState(data);
};

/**
 * request locations on S.O.M api
 * @param {object} props properties
 * @param {function} props.setCountries set on form state the country options
 * @param {function} props.setState set on form state the productor state
 * @param {object} props.productor productor informations
 * @param {function} props.setCountry set country on form state
 * @param {function} props.setState set on form state the productor state
 */
export const fetchLocations = async ({
  setCountries,
  setStates,
  productor,
  setCountry,
  setState
}) => {
  const countries = await client().query({
    query: allCountriesQuery,
    variables: {}
  });

  const myCountries = countries.data.allCountries.map((c) => ({
    label: c.name,
    short_name: c.short_name,
    id: c.id
  }));

  if (productor.location && productor.location.country) {
    const data = myCountries.find((country) => productor.location.country === country.short_name);

    let cb = null;

    if (productor.location.state) {
      cb = ({ states }) => {
        const stateData = states.find((state) => productor.location.state === state.short_name);

        handleStateSelect({ data: stateData, setState });
      };
    }

    handleCountrySelect({
      data,
      setStates,
      setCountry,
      cb
    });
  }

  setCountries(myCountries);
};

export const handleACMusicalStyle = ({
  value,
  musicalStylesOptions,
  setMusicalStylePredict,
  setMusicalStyle
}) => {
  let match = '';
  const regex = new RegExp(`^${value.toUpperCase()}`);
  musicalStylesOptions.forEach((style) => {
    const isMatch = regex.test(
      style.name
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
    );
    if (isMatch && !match && value) {
      match = style.name.toLowerCase();
    }
  });
  setMusicalStylePredict(match);
  setMusicalStyle(value.toLowerCase());
};

export const mapMusicalStyles = (styles) => {
  const colors = ['purple', 'green', 'orange', 'magenta', 'yellow'];

  if (!styles) return [];
  return styles.map(({ id, name }) => ({
    id,
    text: name,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
};

export const handleMusicalStyleSelect = ({
  value,
  musicalStylesOptions,
  musicalStyles,
  setMusicalStyle,
  setMusicalStylePredict,
  setMusicalStyles
}) => {
  setMusicalStyle(value);
  const colors = ['purple', 'green', 'orange', 'magenta', 'yellow'];
  const style = musicalStylesOptions.filter((o) => o.name.toLowerCase() === value)[0];
  const newMusicalStyles = musicalStyles
    .filter((o) => o.text.toLowerCase() !== value)
    .concat([
      {
        id: style.id,
        text: style.name,
        color: colors[Math.floor(Math.random() * 5)]
      }
    ]);

  let cont = 0;

  const stylesWithColor = newMusicalStyles.map((s) => {
    const stl = {
      ...s,
      color: colors[cont]
    };

    if (cont >= 4) cont = -1;

    cont += 1;
    return stl;
  });

  setMusicalStyle('');
  setMusicalStylePredict('');
  setMusicalStyles(stylesWithColor);
};

export const fetchMusicalStyleOptions = (setMusicalStylesOptions) => {
  client()
    .query({
      query: allMusicalStyleOptionsQuery,
      variables: {}
    })
    .then((resp) => setMusicalStylesOptions(resp.data.allMusicalStyleOptions));
};

export const nextCallback = ({ visibles, setVisibles, router, id }) => {
  const next = Object.entries(visibles).find((item) => !item[1]);
  const newVisibles = { ...visibles };

  if (next) {
    newVisibles[next[0]] = true;
    setVisibles(newVisibles);
  } else {
    setVisibles(newVisibles);
    router.push(`/productor/${id}`);
  }
};

const mapProductorToApi = (values, userId, locationId) => ({
  user: userId,
  photo: values.avatar.url,
  name: values.name,
  description: values.about,
  cpf: values.cpf,
  cnpj: values.cnpj,
  location: locationId,
  musical_styles: values.musicalStyles.map(({ id }) => id),
  status: basicInformationIsValid(values) ? 'INCOMPLETE' : 'ACTIVE',
  main_phone: values.mainPhone,
  secondary_phone: values.secondaryPhone,
  whatsapp: values.whatsapp,
  telegram: values.telegram,
  contact_email: values.contactEmail,
  facebook: values.facebook,
  instagram: values.instagram,
  twitter: values.twitter,
  youtube: values.youtube
});

const saveLocation = (id, values) => {
  const { city, state, country } = values;
  const location = {
    city,
    state: state.short_name,
    country: country.short_name
  };

  if (id) {
    return updateLocation(id, location);
  }

  return createLocation(location);
};

export const handleCreateProductor = async ({
  values,
  userId,
  setLoading,
  visibles,
  setId,
  setVisibles,
  dispatch,
  user,
  router
}) => {
  const productor = { ...values };
  let newImage = null;

  if (productor.avatar && productor.avatar.file) {
    setLoading({ show: true, text: 'Tratando imagen' });
    const base64 = await getBase64(productor.avatar.file);
    setLoading({ show: true, text: 'Subindo imagem' });
    newImage = await uploadImageToStorage({
      file: base64,
      id: userId
    });

    productor.avatar = newImage.data.data.urls.mimified;
  }

  let promise;
  const data = mapProductorToApi(productor, userId);
  setLoading({ show: true, text: 'Atualizando Produtor' });

  try {
    promise = await createProductor(data);
  } catch (err) {
    setLoading({ show: false });
    throw err;
  }

  setId(promise.data.createProductor.id);
  dispatch({
    type: 'SET_USER',
    user: { ...JSON.parse(JSON.stringify(user)), productor: promise.data.createProductor }
  });
  nextCallback({ visibles, setVisibles, router });
  setLoading({ show: false });
};

export const handleEditProductor = async (
  values,
  productorId,
  userId,
  setLoading,
  visibles,
  setVisibles,
  setLocationId,
  dispatch,
  user,
  router
) => {
  const productor = { ...values };
  let newImage = null;

  if (productor.avatar && productor.avatar.file) {
    setLoading({ show: true, text: 'Tratando imagen' });

    const base64 = await getBase64(productor.avatar.file);

    setLoading({ show: true, text: 'Subindo imagem' });

    newImage = await uploadImageToStorage({
      file: base64,
      id: userId
    });

    productor.avatar = { url: newImage.data.data.urls.mimified };
  }

  let locationId = null;
  if (productor.city || productor.country.short_name) {
    setLoading({ show: true, text: 'Salvando informações' });
    let locationResult;
    locationResult = await saveLocation(values.locationId, values);

    if (values.locationId) {
      locationId = locationResult.data.updateLocation.id;
    } else {
      locationId = locationResult.data.createLocation.id;
    }
    setLocationId(locationId);
  }

  let promise;
  const data = mapProductorToApi(productor, userId, locationId);
  try {
    setLoading({ show: true, text: 'Atualizando Produtor' });
    promise = await updateProductor(productorId, data);
  } catch (err) {
    setLoading({ show: false });
    throw err;
  }

  dispatch({
    type: 'SET_USER',
    user: { ...user, productor: promise.data.updateProductor }
  });
  setLoading({ show: false });
  nextCallback({
    visibles,
    setVisibles,
    router,
    id: productorId
  });
};
