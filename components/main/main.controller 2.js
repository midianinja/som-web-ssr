import { init } from '../../libs/ida.lib';
import { getUser, createUserSOM } from './main.repository';

/**
 * this find user on S.O.M api by the ida and set in global state
 * @param {string} ida this is the ativist identifier to search on S.O.M api
 * @param {function} dispatch this set new global state
 * @param {object} router this is the a manager app router
 */
export const fetchLoggedUser = async (ida, dispatch, router) => {
  let response = await getUser(ida);
  let user = response.data.oneUser;

  if (user && router.pathname === '/') {
    router.push('/oportunities');
  }

  // cria um novo usuário S.O.M caso não seja encontrado
  if (!user) {
    response = await createUserSOM(ida);
    user = response.data.createUser;

    if (router.pathname === '/') {
      router.push('/welcome');
    }
  }

  // seta o usuário S.O.M na context API
  dispatch({
    type: 'SET_USER',
    user,
  });

  let typeConnection = 'public';
  // crefica o tipo de login do usuário S.O.M
  if (response.data.oneUser && response.data.oneUser.productor) {
    typeConnection = 'productor';

    // verifica se pode ser artista e usa o cache
    if (response.data.oneUser.artist && window.localStorage.getItem('som@type')) {
      typeConnection = window.localStorage.getItem('som@type');
    }
  } else if (response.data.oneUser && response.data.oneUser.artist) {
    typeConnection = 'artist';

    // verifica se pode ser produtor e usa o cache
    if (response.data.oneUser.productor && window.localStorage.getItem('som@type')) {
      typeConnection = window.localStorage.getItem('som@type');
    }
  }

  // seta o tipo de login do usuário S.O.M na context API
  dispatch({
    type: 'SET_LOGIN_TYPE',
    data: typeConnection
  });

  dispatch({ type: 'STOP_AUTH_LOADING' });
  dispatch({ type: 'STOP_VERIFY_LOADING' });
};

/**
 * initilize ida auth listener, stop de verify authentication
 * loading
 * @param {function} dispatch this set new global state
 * @param {object} router this is the a manager app router
 */
export const initIDA = async (dispatch, router) => {
  let sdk;
  try {
    sdk = await init({
      onAuthChange: (auth) => {
        if (auth) {
          fetchLoggedUser(auth.ida, dispatch, router);
        } else {
          dispatch({ type: 'STOP_AUTH_LOADING' });
          dispatch({ type: 'STOP_VERIFY_LOADING' });
        }

        // setta o usuário IDa na context API
        dispatch({
          type: 'SET_AUTH',
          auth
        });
      }
    });
  } catch (err) {
    console.log([err]);
    throw err;
  }

  // setta o sdk do IDa na context API
  dispatch({ type: 'SET_IDA_SDK', sdk });
};
