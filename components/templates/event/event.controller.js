import { client } from '../../../libs/apollo.lib';
import { getOneEventQuery } from './event.queries';
import {
  subscribeEvent,
  subscribeProductorOnEvent,
  unsubscribeEvent,
  unsubscribeProductorOnEvent
} from './event.repository';
import { allowBodyScroll } from '../../../utils/scroll.utils';

export const loadingStatus = {
  LOADDED: 0,
  LOADING: 1,
  ERROR: 2,
  TO_LOAD: 3
};

export const initialLoading = {
  event: loadingStatus.TO_LOAD
};

export const initialEvent = {
  cover: '',
  about: '',
  name: '-',
  event_date: Date.now(),
  location: {},
  subscribers: [],
  has_local_transportation: true,
  has_accommodation: true,
  has_food: true,
  productor: {
    name: '',
    photo: '',
    about: '',
    following: [],
    followers: [],
    location: {}
  }
};

export const fetchEventData = async (id, setEvent, loading, setLoading, setDialog, router) => {
  setLoading({ ...loading, event: loadingStatus.LOADING });
  let eventData;

  try {
    eventData = await client().query({
      query: getOneEventQuery,
      variables: { id }
    });
  } catch (err) {
    setLoading({ ...loading, event: loadingStatus.ERROR });
    throw err;
  }

  if (!eventData.data.oneEvent) {
    setDialog({
      title: 'Evento não encontrado',
      icon: '/icons/guita-error.svg',
      description: 'Logo teremos mais oportunidades, fique ligado para se inscrever.',
      disagreeText: 'Ir para home',
      disagreeAction: () => router.push('/')
    });

    return;
  }

  setEvent(eventData.data.oneEvent || { ...initialEvent });
  setLoading({ ...loading, event: loadingStatus.LOADDED });
};

export const associatedEvents = async (id, setAssociatedEvents) => {
  setAssociatedEvents([]);
};

export const subscribeAction = async (
  auth,
  user,
  event,
  dispatch,
  setDialog,
  setEvent,
  router,
  loggedAs,
  idaSDK
) => {
  if (!auth) {
    dispatch({ type: 'SHOW_LOGIN_MODAL' });
    return;
  }
  if (!user) {
    if (idaSDK) idaSDK.signinWithPopup();
    return;
  }

  if (!user.artist && !user.productor) {
    setDialog({
      title: 'Página incompleta',
      icon: '/icons/guita-error.svg',
      description: 'Para se INSCREVER em OPORTUNIDADES conclua seu perfil de artista ou produtor.',
      agreeText: 'Cadastrar',
      disagreeText: 'Voltar',
      confirmAction: () => {
        allowBodyScroll();
        router.push('/register-artist');
      },
      disagreeAction: () => {
        allowBodyScroll();
        setDialog({});
      }
    });

    return;
  }

  let resp;

  if (loggedAs === 'artist') {
    resp = await subscribeEvent(event.id, user.artist.id);
  } else {
    resp = await subscribeProductorOnEvent(event.id, user.productor.id);
  }

  if (!resp) return;

  setDialog({
    title: 'Pronto!',
    icon: '/icons/yeah.svg',
    description: `Inscrição confirmada para a oportunidade ${event.name}. Você receberá todas as informações no e-mail e telefone cadastrados.`,
    disagreeText: 'Explore mais oportunidades',
    disagreeAction: () => {
      allowBodyScroll();
      router.push('/opportunities');
      setDialog({});
    }
  });

  setEvent(loggedAs === 'artist' ? resp.data.subscribeEvent : resp.data.subscribeProductorOnEvent);
};

export const unsubscribeAction = async (user, event, setEvent, loggedAs) => {
  let resp;

  if (loggedAs === 'artist') {
    resp = await unsubscribeEvent(event.id, user.artist.id);
  } else {
    console.log(user.productor.id);
    resp = await unsubscribeProductorOnEvent(event.id, user.productor.id);
  }

  setEvent(
    loggedAs === 'artist' ? resp.data.unsubscribeEvent : resp.data.unsubscribeProductorOnEvent
  );
};
