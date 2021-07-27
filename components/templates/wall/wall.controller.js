import {
  client
} from '../../../libs/apollo.lib';
import {
  allMusicalStyleOptionsQuery
} from '../../../queries/musicalGenres.query';
import {
  allowBodyScroll
} from '../../../utils/scroll.utils';
import {
  getAllEventsQuery,
  allCountriesQuery,
  allCitiesQuery,
  allStateQuery
} from './wall.queries';
import {
  subscribeEvent,
  unsubscribeEvent
} from './wall.repository';

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

export const removeTagAction = ({
  data,
  YEARS_MODEL,
  MONTH_MODEL,
  musicalStylesOptions,
  musicStyles,
  years,
  months,
  setMusicStyles,
  setYears,
  setMonths,
  states,
  setStates,
  countries,
  setCountries,
}) => {
  const month = MONTH_MODEL.find((m) => m.id === data);
  const year = YEARS_MODEL.find((m) => m.id === data);
  const style = musicalStylesOptions.find((m) => m.id === data);
  // const city = cities.find((m) => m.id === data);
  // const state = states.find((m) => m.id === data);
  // const country = countries.find((m) => m.id === data);


  if (month) {
    const myMonths = months.filter((m) => m.id !== month.id);
    setMonths(myMonths);
  }

  if (year) {
    const myYears = years.filter((m) => m.id !== year.id);
    setYears(myYears);
  }

  if (style) {
    const myStyles = musicStyles.filter((m) => m.id !== style.id);
    setMusicStyles(myStyles);
  }
  // if (country) {
  //   const myCountries = countries.filter((m) => m.id !== country.id);
  //   setCountries(myCountries);
  // }
  // if (state) {
  //   const myStates = states.filter((m) => m.id !== state.id);
  //   setStates(myStates);
  // }
};

export const handleMusicalStyleSelect = ({
  data,
  musicalStylesOptions,
  musicStyles,
  setMusicStyles
}) => {
  const colors = ['purple', 'green', 'orange', 'magenta', 'yellow'];
  const style = musicalStylesOptions.find((o) => o.id === data.id);
  const newMusicalStyles = musicStyles
    .filter((o) => o.id !== data.id)
    .concat([{
      id: style.id,
      text: style.name,
      color: colors[Math.floor(Math.random() * 5)]
    }]);

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

  setMusicStyles(stylesWithColor);
};

export const fetchEventsData = async ({
  setEvents,
  loading,
  setLoading,
  setDialog,
  musicStyles,
  years,
  months
}) => {
  setLoading({
    ...loading,
    event: loadingStatus.LOADING
  });
  let eventData;

  try {
    eventData = await client().query({
      query: getAllEventsQuery,
      variables: {
        musical_styles: musicStyles.map((s) => s.id),
        years: years.map((y) => +y.id),
        months: months.map((m) => +m.id + 1),
        paginator: {
          limit: 100
        }
      }
    });
    if (!eventData.data.searchEvents.length) {
      setDialog({
        title: 'Nenhuma oportunidade encontrado',
        icon: '/icons/guita-error.svg',
        description: 'Logo teremos mais oportunidades, fique ligado para se inscrever.',
        disagreeText: 'Fechar',
        disagreeAction: () => setDialog({})
      });
      return;
    }

    setEvents(eventData.data.searchEvents);
    setLoading({
      ...loading,
      event: loadingStatus.LOADDED
    });
  } catch (err) {
    // tratar esse erro
    setLoading({
      ...loading,
      event: loadingStatus.ERROR
    });
    console.error([err]);
    throw err;
  }
};

export const subscribeAction = async (
  auth,
  user,
  event,
  dispatch,
  setDialog,
  setEvents,
  history,
  events
) => {
  if (!auth) {
    dispatch({
      type: 'SHOW_LOGIN_MODAL'
    });
    return;
  }

  if (!user.artist) {
    setDialog({
      title: 'Cadastro incompleto',
      icon: '/icons/guita-error.svg',
      description: 'Para se escrever em oportunidades, você precisa preencher os dados obrigatórios.',
      agreeText: 'Cadastrar',
      disagreeText: 'Voltar',
      confirmAction: () => {
        allowBodyScroll();
        history.push('/register-artist');
      },
      disagreeAction: () => {
        allowBodyScroll();
        setDialog(null);
      }
    });
    return;
  }

  const updatedEvent = await subscribeEvent(event.id, user.artist.id);

  setDialog({
    title: 'Pronto!',
    icon: '/icons/yeah.svg',
    description: `Você está inscrito no festival ${event.name}. Fique ligado no SOM para receber novas informações.`,
    disagreeText: 'Fechar',
    disagreeAction: () => {
      allowBodyScroll();
      setDialog({
        title: ''
      });
    }
  });

  const updatedEvents = events.map((evt) => {
    if (evt.id === event.id) return updatedEvent.data.subscribeEvent;
    return evt;
  });

  setEvents(updatedEvents);
};

export const unsubscribeAction = async (user, event, setEvents, events) => {
  const updatedEvent = await unsubscribeEvent(event.id, user.artist.id);
  const updatedEvents = events.map((evt) => {
    if (evt.id === event.id) return updatedEvent.data.unsubscribeEvent;
    return evt;
  });

  setEvents(updatedEvents);
};

export const fetchMusicalStyleOptions = (setMusicalStylesOptions) => {
  client()
    .query({
      query: allMusicalStyleOptionsQuery,
      variables: {}
    })
    .then((resp) => setMusicalStylesOptions(resp.data.allMusicalStyleOptions));
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
    id: c.id
  }));
  console.log('aqui fetch')
  setCountries(myCountries);

}

export const fetchStates = async ({
  setStates, country
}) => {
  const states = await client().query({
    query: allStateQuery,
    variables: {
      state: {
        country,

      }
    }
  });
  const myStates = states.data.allStates.map((s) => ({
    label: s.name,
    id: s.id
  }));
  setStates(myStates);

}

export const fetchCities = async ({
  setCities
}) => {

  const cities = await client().query({
    query: allCitiesQuery,
    variables: {}
  });
  const myCities = cities.data.allCities.map((c) => ({
    label: c.name,
    id: c.id
  }));
  setCities(myCities);

};