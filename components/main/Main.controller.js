import { init } from '../../libs/ida.lib';
import { getUser } from './main.repository';

/**
 * this find user on S.O.M api by the ida and set in global state 
 * @param {string} ida this is the ativist identifier to search on S.O.M api
 * @param {function} dispatch this set new global state
 * @param {object} router this is the a manager app router
 */
export const fetchLoggedUser = async (ida, dispatch, router) => {
  let response;

  try {
    response = await getUser(ida);
  } catch (err) {
    throw err;
  }

  dispatch({
    type: 'SET_USER',
    user: response.data.oneUser,
  });

  let typeConnection = 'public';
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

  dispatch({
    type: 'SET_LOGIN_TYPE',
    data: typeConnection,
  });

  if (!response.data.oneUser) {
    router.push('/welcome');
  } else if (router.pathname === '/') {
    router.push('/wall');
  }
};

/**
 * initilize ida auth listener, stop de verify authentication
 * loading
 * @param {function} dispatch this set new global state
 */
export const initIDA = async (dispatch, router) => {
  let sdk; 
  try {
    sdk = await init({
      onAuthChange: (auth) => {
        if (auth) {
          fetchLoggedUser(auth.ida, dispatch, router);
        }

        console.log(auth);

        dispatch({
          type: 'SET_AUTH',
          auth,
        });

        dispatch({ type: 'STOP_AUTH_LOADING' });
        dispatch({ type: 'STOP_VERIFY_LOADING' });
      }
    });
  } catch (err) {
    console.log([err]);
    throw err;
  }

  dispatch({ type: 'SET_IDA_SDK', sdk });
};
