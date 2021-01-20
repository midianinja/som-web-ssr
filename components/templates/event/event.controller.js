import { client } from '../../../libs/apollo.lib';
import { getOneEventQuery } from './event.queries';
import { subscribeEvent, unsubscribeEvent } from './event.repository';
import { allowBodyScroll } from '../../../utils/scroll.utils';

export const loadingStatus = {
  LOADDED: 0,
  LOADING: 1,
  ERROR: 2,
  TO_LOAD: 3,
};

export const initialLoading = {
  event: loadingStatus.TO_LOAD,
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
    location: {},
  },
};

export const fetchEventData = async (id, setEvent, loading, setLoading, setDialog, router) => {
  setLoading({ ...loading, event: loadingStatus.LOADING });
  let eventData;

  try {
    eventData = await client().query({
      query: getOneEventQuery,
      variables: { id },
    });
  } catch (err) {
    // tratar esse erro
    setLoading({ ...loading, event: loadingStatus.ERROR });
    console.error([err]);
    throw err;
  }

  if (!eventData.data.oneEvent) {
    setDialog({
      title: 'Evento não encontrado',
      icon: '/icons/guita-error.svg',
      description: 'Logo teremos mais eventos, fique ligado para se inscrever.',
      disagreeText: 'Ir para home',
      disagreeAction: () => router.push('/'),
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
  auth, user, event, dispatch, setDialog, setEvent,
  router,
) => {
  if (!auth) {
    dispatch({ type: 'SHOW_LOGIN_MODAL' });
    return;
  }

  if (!user.artist) {
    setDialog({
      title: 'Cadastro incompleto',
      icon: '/icons/guita-error.svg',
      description: 'Para se escrever em eventos, você precisa preencher os dados obrigatórios.',
      agreeText: 'Cadastrar',
      disagreeText: 'Voltar',
      confirmAction: () => {
        allowBodyScroll();
        router.push('/register-artist');
      },
      disagreeAction: () => {
        allowBodyScroll();
        setDialog({});
      },
    });
    return;
  }


  let resp;
  try {
    resp = await subscribeEvent(event.id, user.artist.id);
  } catch (err) {
    console.error([err]);
    throw err;
  }

  setDialog({
    title: 'Pronto!',
    icon: '/icons/yeah.svg',
    description: `Você está inscrito no festival ${event.name}. Fique ligado no SOM para receber novas informações.`,
    disagreeText: 'Ver mais eventos',
    disagreeAction: () => {
      allowBodyScroll();
      router.push('/events');
      setDialog({});
    },
  });

  setEvent(resp.data.subscribeEvent);
};

export const unsubscribeAction = async (user, event, setEvent) => {
  try {
    const myEvent = await unsubscribeEvent(event.id, user.artist.id);
    setEvent(myEvent.data.unsubscribeEvent);
  } catch (err) {
    throw err;
  }
};
