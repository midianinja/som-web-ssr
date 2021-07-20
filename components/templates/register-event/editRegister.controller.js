import moment from 'moment';
import {
    client
} from '../../../libs/apollo.lib';
import {
    updateEvent,
    updateLocation,
    createLocation
} from './registerEvent.repository';
import {
    validation
} from './registerEvent.validate';
import {
    allCountriesQuery,
    allStateQuery
} from './registerEvent.queries';
import {
    getBase64,
    uploadImageToStorage
} from '../../../utils/file.utils';

export const deleteTag = ({
    id,
    tags,
    setTag
}) => {
    const myTags = tags.filter((tag) => tag.id !== id);
    setTag(myTags);
};

export const handleCountrySelect = async ({
    data,
    setStates,
    setCountry,
    cb
}) => {
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

    if (cb) cb({
        states
    });
    setStates(states);
    setCountry(data);
};

export const handleStateSelect = async ({
    data,
    setState
}) => {
    setState(data);
};

export const fetchCountries = async ({
    setCountries
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

    setCountries(myCountries);
};

const mapEventToApi = (event, productor, location) => ({
    name: event.title,
    cover: event.cover,
    photo: event.avatar,
    oportunities: parseInt(event.openingsNumber, 10),
    event_date: new Date(moment(event.eventDate, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')),
    subscribe_closing_date: new Date(
        moment(event.closingSubscribeDate, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    ),
    end_event_date: event.endEventDate ?
        new Date(moment(event.endEventDate, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')) :
        null,
    about: event.description,
    productor,
    location,
    has_accommodation: event.hasAccomodation,
    has_food: event.hasFood,
    has_local_transportation: event.hasLocalTransportation,
    has_city_transportation: event.hasCityTransportation,
    has_money_paid: event.hasMoneyPaid,
    stream_url: event.streamUrl,
    is_to_productor: event.isToProductor,
    is_to_artist: event.isToArtist,
    is_online: event.eventTypes.find((type) => type === 'ONLINE'),
    is_physical: event.eventTypes.find((type) => type === 'PHYSICAL'),
    is_on_som: event.eventTypes.find((type) => type === 'SOM'),
    has_interstate_transportation: event.hasInterstateTransportation,
    has_international_transportation: event.hasInternationalTransportation
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


export const handleEditEvent = async (
    values,
    userId,
    setLoading,
    setErrors,
    setLocationId,
    dispatch,
    user,
    router
) => {
    setLoading(true);

    console.log(userId)


    const validate = validation(values);

    if (!validate.valid) {
        setErrors(validate.errors);
        setLoading(false);
        return;
    }

    const event = {
        ...values
    };

    console.log("valores: "+ event)

    let newAvatarImage = null;
    let newCoverImage = null;

  // verifica se precisa atualizar a localizacção do evento
  if (event.location) {
    setLoading({ show: true, text: 'Atualizando informações' });
    let locationResult;
    // try {
    //   locationResult = await saveLocation(event.location, values);
    // } catch (err) {
    //   console.log('🚀 ~ file: registerEvent.controller.js ~ line 384 ~ err', err);
    // }

    let locationId = null;

    if (event.location && event.location.id) {
      locationId = locationResult.data.updateLocation.id;
    } else {
      locationId = locationResult.data.createLocation.id;
    }
  }

    if (event.avatar && event.avatar.file) {
        try {
            const base64 = await getBase64(event.avatar.file);
            newAvatarImage = await uploadImageToStorage({
                file: base64,
                id: userId
            });
        } catch (err) {
            setLoading(false);
            throw err;
        }

        event.avatar = newAvatarImage.data.data.urls;
    }

    if (event.cover && event.cover.file) {
        try {
            const base64 = await getBase64(event.cover.file);
            newCoverImage = await uploadImageToStorage({
                file: base64,
                id: userId
            });
        } catch (err) {
            setLoading(false);
            throw err;
        }

        event.cover = newCoverImage.data.data.urls;
    }

    const data = mapEventToApi(event, user.productor.id, locationResult.data.updateLocation.id);
    try {
        setLoading({ show: true, text: 'Atualizando Evento' });
        await updateEvent(data);
    } catch (err) {
        setLoading(false);
        throw err;
    }
   
      setLoading({ show: false });
      nextCallback({
        visibles,
        setVisibles,
        router,
        id: values.id
      });

    router.push('/my-events');
};