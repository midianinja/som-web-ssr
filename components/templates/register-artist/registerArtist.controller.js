import { client } from '../../../libs/apollo.lib';
import { allMusicalStyleOptionsQuery } from '../../../queries/musicalGenres.query';
import {
  createArtist,
  createLocation,
  createSong,
  getViaCepLocation,
  updateArtist,
  updateLocation,
  updateSong
} from './registerArtist.repository';
import { basicInformationIsValid } from './registerArtist.validate';
import { allCountriesQuery, allStateQuery } from './registerArtist.queries';
import { getBase64, uploadImageToStorage } from '../../../utils/file.utils';
import axios from 'axios';
import { deleteSongMutation } from './registerArtist.mutations';

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
 * This function makeBlob returns a Blob from file received
 *
 * @param {File} file
 */
export const makeBlob = (file) => {
  return new Blob([file], { type: file.type });
};

/**
 * function addSong set at state the list of songs updated
 *
 * @param {File} file
 */
export const addSong = (newSong, list, setList) => {
  let updated = false;
  const filtered = list.map((s) => {
    if (s.url !== newSong.url) return s;
    updated = true;
    return newSong;
  });
  if (!updated) filtered.push(newSong);
  setList(filtered);
};

/**
 * function deleteSong set at state the list of songs updated
 *
 * @param {File} file
 */
export const deleteSong = async (newSong, list, setList) => {
  let filtered = null;
  if (newSong.id) {
    await client().mutate({
      mutation: deleteSongMutation,
      variables: {
        song_id: newSong.id
      }
    });
    filtered = list.filter((s) => s.id !== newSong.id);
  } else {
    filtered = list.filter((s) => s.url !== newSong.url);
  }
  setList(filtered);
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
  setCountry(data);

  if (!data?.id) return;

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
export const fetchLocations = async ({ setCountries }) => {
  const countries = await client().query({
    query: allCountriesQuery,
    variables: {}
  });

  const myCountries = countries.data.allCountries.map((c) => ({
    label: c.name,
    short_name: c.short_name,
    id: c.id
  }));
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
  console.log(value.name);
  const colors = ['purple', 'green', 'orange', 'magenta', 'yellow'];
  const style = musicalStylesOptions.filter(
    (o) => o.name.toLowerCase() === value.label.toLowerCase()
  )[0];

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

export const nextCallback = ({ visibles, setVisibles, router, username }) => {
  const next = Object.entries(visibles).find((item) => !item[1]);
  const newVisibles = { ...visibles };

  if (next) {
    newVisibles[next[0]] = true;
    setVisibles(newVisibles);
  } else {
    setVisibles(newVisibles);
    router.push(`/artist/${username}`);
  }
};

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const uploadDoc = async (file, updateFile, state, name) => {
  let doc;
  if (file.blob.type === 'application/pdf') {
    doc = await axios.post(`${process.env.STORAGE_API_URI}/document/upload`, {
      file: await toBase64(file.file),
      id: state.auth.ida,
      fileName: name
    });

    updateFile({
      ...file,
      url: doc.data.data.link
    });
  }

  if (
    file.blob.type === 'image/jpg' ||
    file.blob.type === 'image/png' ||
    file.blob.type === 'image/jpeg'
  ) {
    doc = await axios.post(`${process.env.STORAGE_API_URI}/image/upload`, {
      file: await toBase64(file.file),
      id: state.auth.ida,
      fileName: name
    });

    updateFile({
      ...file,
      url: doc.data.data.urls.original
    });
  }
};

const mapArtistToApi = (values, userId, locationId) => ({
  user: userId,
  name: values.name,
  about: values.about,
  username: values.username,
  musical_styles: values.musicalStyles.map(({ id }) => id),
  status: !basicInformationIsValid(values).valid ? 'INCOMPLETE' : 'ACTIVE',
  phone: values.mainPhone,
  email: values.contactEmail,
  location: locationId,
  facebook: values.facebook,
  instagram: values.instagram,
  twitter: values.twitter,
  youtube: values.youtube,
  members_number: values.integrants.split(',').length,
  integrants: values.integrants.split(',').map((str) => str.trim()),
  whatsapp: values.whatsapp,
  telegram: values.telegram
});

const saveLocation = (loc, values) => {
  const { city, state, country, zipcode, address, number } = values;
  const location = {
    city,
    state: state.short_name,
    country: country.short_name,
    zipcode,
    address,
    number
  };

  if (loc && loc.id) {
    return updateLocation(loc.id, location);
  }

  return createLocation(location);
};

const uploadAvatar = async ({ setLoading, userId, artist }) => {
  let newImage;
  try {
    setLoading({ show: true, text: 'Tratando imagen' });
    const base64 = await getBase64(artist.avatar.file);
    setLoading({ show: true, text: 'Subindo imagem' });
    newImage = await uploadImageToStorage({
      file: base64,
      id: userId
    });
  } catch (err) {
    console.error('err:', [err]);
    throw err;
  }

  return newImage.data.data.urls;
};

export const handleCreateArtist = async ({
  values,
  userId,
  setLoading,
  visibles,
  setId,
  setVisibles,
  dispatch,
  user,
  setErrors,
  router
}) => {
  const artist = { ...values };
  let uploadedAvatar;

  if (!artist.username) {
    setErrors({ username: 'Nome de usuário já em uso, ou inválido' });
    setLoading(false);
    return;
  }

  if (artist.avatar && artist.avatar.file) {
    uploadedAvatar = await uploadAvatar({ setLoading, userId, artist });
  }

  let promise;
  const data = mapArtistToApi(artist, userId);
  if (uploadedAvatar) data.avatar_image = uploadedAvatar;
  try {
    setLoading({ show: true, text: 'Atualizando Artista' });
    promise = await createArtist(data);
  } catch (err) {
    if (err.graphQLErrors && err.graphQLErrors[0].message == 'invalid/username') {
      setLoading({ show: false });
      return setErrors({ username: 'Nome de usuário já em uso, ou inválido' });
    }
    console.error([err]);
    setLoading({ show: false });
    throw err;
  }
  setId(promise.data.createArtist.id);
  dispatch({
    type: 'SET_USER',
    user: { ...JSON.parse(JSON.stringify(user)), artist: promise.data.createArtist }
  });
  nextCallback({ visibles, setVisibles, router });
  setLoading({ show: false });
};

export const handleEditArtist = async ({
  values,
  setLoading,
  visibles,
  setVisibles,
  dispatch,
  user,
  setErrors,
  router
}) => {
  const artist = { ...values };
  let uploadedAvatar;

  if (!artist.username) {
    setErrors({ username: 'Nome de usuário já em uso, ou inválido' });
    setLoading(false);
    return;
  }

  // verifica se precisa atualizar a imagem de avatar do artista
  if (artist.avatar && artist.avatar.file) {
    uploadedAvatar = await uploadAvatar({ setLoading, userId: user.id, artist });
  }

  let locationId = null;

  // verifica se precisa atualizar a localizacção do artista
  if (artist.city || artist.country.short_name) {
    setLoading({ show: true, text: 'Salvando informações' });
    let locationResult;
    try {
      locationResult = await saveLocation(user.artist.location, values);
    } catch (err) {
      console.log('🚀 ~ file: registerArtist.controller.js ~ line 384 ~ err', err);
    }

    if (user.artist.location && user.artist.location.id) {
      locationId = locationResult.data.updateLocation.id;
    } else {
      locationId = locationResult.data.createLocation.id;
    }
  }

  // mapeia artista para o recebimento na API
  const data = mapArtistToApi(artist, user.id, locationId);

  if (uploadedAvatar) data.avatar_image = uploadedAvatar;

  if (values.tecMap && values.tecMap.file) data.stage_map = values.tecMap.url;
  if (values.tecRelease && values.tecRelease.file) data.tec_release = values.tecRelease.url;
  if (values.tecRider && values.tecRider.file) data.tec_rider = values.tecRider.url;

  const newSongs = values.songs.filter((s) => s.file);
  let songs = [];

  if (newSongs.length) {
    setLoading({ show: true, text: 'Salvando Músicas' });
    const promises = newSongs.map(
      (s) =>
        // eslint-disable-next-line no-async-promise-executor
        new Promise(async (res) => {
          const mapped = {
            artist: values.id,
            url: s.url,
            title: s.name
          };

          const song = await createSong(mapped);
          res(song);
        })
    );

    const promiseResponse = await Promise.all(promises);
    songs = songs.concat(promiseResponse.map((response) => response.data.createSong.id));
  }

  const songsToUpdate = values.songs.filter((s) => s.id);

  if (songsToUpdate.length) {
    setLoading({ show: true, text: 'Atualizando Músicas' });
    const promises = songsToUpdate.map(
      (s) =>
        // eslint-disable-next-line no-async-promise-executor
        new Promise(async (res) => {
          console.log(s);
          const mapped = {
            id: s.id,
            artist: values.id,
            url: s.url,
            title: s.name
          };
          const song = await updateSong(mapped);
          res(song);
        })
    );

    const promiseResponse = await Promise.all(promises);
    songs = songs.concat(promiseResponse.map((response) => response.data.updateSong.id));
  }

  data.songs = songs;

  let promise;
  try {
    setLoading({ show: true, text: 'Atualizando Artista' });
    promise = await updateArtist(values.id, data);
  } catch (err) {
    if (err.graphQLErrors && err.graphQLErrors[0].message == 'invalid/username') {
      setLoading({ show: false });
      return setErrors({ username: 'Nome de usuário já em uso, ou inválido' });
    }

    setLoading({ show: false });
    throw err;
  }

  dispatch({
    type: 'SET_USER',
    user: { ...user, artist: promise.data.updateArtist }
  });
  setLoading({ show: false });
  nextCallback({
    visibles,
    setVisibles,
    router,
    username: values.username
  });
};

/**
 * this function remove tag of song of productor songs list
 * @param {object} props song properties
 * @param {string} props.id song reference
 * @param {array} props.tags songs list of productor
 * @param {cuntion} props.setTag this function set on form state the new songs list
 */
export const makeDocUploads = ({
  tecRider,
  setTecRider,
  state,
  tecMap,
  setTecMap,
  tecRelease,
  setRelease
}) => {
  if (tecRider && tecRider.blob && !tecRider.url) {
    uploadDoc(tecRider, setTecRider, state, `rider-tec.${tecRider.blob.type.split('/')[1]}`);
  }
  if (tecMap && tecMap.blob && !tecMap.url) {
    uploadDoc(tecMap, setTecMap, state, `stage-map.${tecMap.blob.type.split('/')[1]}`);
  }
  if (tecRelease && tecRelease.blob && !tecRelease.url) {
    uploadDoc(tecRelease, setRelease, state, `release.${tecRelease.blob.type.split('/')[1]}`);
  }
};

export const getAddressInformation = async (zipcode, setAddress, setNumber, setCity) => {
  let locationPromise;

  try {
    locationPromise = await getViaCepLocation(zipcode);
  } catch (err) {
    return;
  }

  if (!locationPromise.data.erro) {
    setAddress(locationPromise.data.logradouro);
    setCity(locationPromise.data.localidate);
  }
};
