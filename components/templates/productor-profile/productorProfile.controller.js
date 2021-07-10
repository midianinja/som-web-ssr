import { client } from '../../../libs/apollo.lib';
import { oneProductorQuery } from './productorProfile.queries';

/**
 * this function request on S.O.M api infomation about the productor.
 * @param {stirng} id this is a productor reference
 * @param {function} setProductor this is a function that set on page state
 * informations about the user
 * @param {function} setProductionLoading this is a function that toggle tue loading state of page
 * when a productor is in loading
 * @param {function} setAlertModal this is a function manage error state of page
 */
export const fetchProductorData = async (id, setProductor, setProductorLoading, setAlertModal) => {
  setProductorLoading(true);

  let promise;
  try {
    promise = await client().query({
      query: oneProductorQuery,
      variables: { productor: { id } }
    });
  } catch (err) {
    setProductorLoading(false);
    throw err;
  }

  if (!promise.data.oneProductor) {
    setProductorLoading(false);
    setAlertModal({
      title: 'Ops!',
      icon: '',
      description: 'Produtor não encontrado',
      agreeText: 'OK',
      disagreeText: '',
      confirmAction: () => setAlertModal({}),
      disagreeAction: undefined,
      isOpen: true
    });

    return;
  }

  setProductor(promise.data.oneProductor);
  setProductorLoading(false);
};

/**
 * this function request on NINJA Instagram api photos of the productor.
 * @param {stirng} instaUri instagram url of productor
 * @param {function} setInstaPics this is a function that set on the page state
 * photos of productor instagram
 */
export const fetchProductorInstaImages = async (instaUri, setInstaPics) => {
  const instaname = instaUri.split('/').reverse()[0];
  const promise = await fetch(`${process.env.INSTAGRAM_API_URI}/photos/${instaname}`);
  const { data } = await promise.json();

  setInstaPics(data);
};
