import moment from 'moment';
import { getBase64, uploadImageToStorage } from '../../../utils/file.utils';
import {
  createLocation,
  getEvent,
  updateEvent,
  updateLocation
} from './opportunity-form.repository';
import { validation } from './opportunity-form.validate';

export const loadOpportunity = async (id, setLoading, router, setOpportunity) => {
  setLoading(true);
  let opportunityResponse;

  try {
    opportunityResponse = await getEvent(id);
  } catch (err) {
    setLoading(false);
    router.push('/opportunity');
    return;
  }

  if (!opportunityResponse.data.oneEvent) {
    setLoading(false);
    router.push('/opportunity');
  }

  setOpportunity(opportunityResponse.data.oneEvent);
  setLoading(false);
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
  end_event_date: event.endEventDate
    ? new Date(moment(event.endEventDate, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss'))
    : null,
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
  is_online: !!event.eventTypes.find((type) => type === 'ONLINE'),
  is_physical: !!event.eventTypes.find((type) => type === 'PHYSICAL'),
  is_on_som: !!event.eventTypes.find((type) => type === 'SOM'),
  has_interstate_transportation: event.hasInterstateTransportation,
  has_international_transportation: event.hasInternationalTransportation
});

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
  const validate = validation(values);

  if (!validate.valid) {
    setErrors(validate.errors);
    setLoading(false);
    return;
  } else {
    setErrors({});
  }

  const event = { ...values };
  let newAvatarImage = null;
  let newCoverImage = null;

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
  } else {
    delete event.avatar.__typename;
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
  } else {
    delete event.cover.__typename;
  }

  let locationResult;
  const location = {
    city: values.city,
    address: values.address,
    district: values.district,
    number: values.number,
    complement: values.complement,
    zipcode: values.zipcode,
    state: values.state.short_name,
    country: values.country.short_name
  };

  let locationId = values.locationId;
  if (values.locationId) {
    locationResult = await updateLocation(locationId, location);
  } else {
    locationResult = await createLocation(location);
    locationId = locationResult.data.createLocation.id;
    setLocationId(locationResult.data.createLocation.id);
  }

  const data = mapEventToApi(event, user.productor.id, locationId);
  try {
    const response = await updateEvent(router.query.id, data);
    console.log(response, router.query.id);
  } catch (err) {
    setLoading(false);
    throw err;
  }

  router.push('/my-events');
  setLoading(false);
};
