import React from 'react';
import PropTypes from 'prop-types';

const Store = React.createContext();

const initialState = {
  connectionType: 'public',
  idaSDK: null,
  auth: null,
  user: null,
  modalLogin: false,
  loading: {
    auth: false,
    verify: true,
  },
  modals: {
    login: false,
    register: false,
    navigation: false,
    forgetPassword: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'START_AUTH_LOADING':
      return { ...state, loading: { ...state.loading, auth: true } };
    case 'STOP_AUTH_LOADING':
      return { ...state, loading: { ...state.loading, auth: false } };
    case 'SET_IDA_SDK':
      return { ...state, idaSDK: action.sdk };
    case 'STOP_VERIFY_LOADING':
      return { ...state, loading: { ...state.loading, verify: false } };
    case 'SHOW_NAVIGATION_MODAL':
      return { ...state, modals: { ...initialState.modals, navigation: true } };
    case 'SHOW_LOGIN_MODAL':
      return { ...state, modals: { ...initialState.modals, login: true } };
    case 'SHOW_REGISTER_MODAL':
      return { ...state, modals: { ...initialState.modals, register: true } };
    case 'SHOW_FORGET_PASSWORD_MODAL':
      return { ...state, modals: { ...initialState.modals, forgetPassword: true } };
    case 'SET_AUTH':
      return { ...state, auth: { ...(state.auth || {}), ...action.auth } };
    case 'SET_USER':
      return {
        ...state,
        user: {
          ...(JSON.parse(JSON.stringify(state.user)) || {}),
          ...JSON.parse(JSON.stringify(action.user)),
        },
      };
    case 'RESET_AUTH':
      return { ...state, auth: null, user: null };
    case 'CLOSE_MODAL':
      return { ...state, modals: { ...initialState.modals } };
    case 'SET_MODAL_LOGIN':
      return { ...state, modalLogin: action.status };
    case 'SET_LOGIN_TYPE':
      return { ...state, connectionType: action.data };
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState });
  const value = { state, dispatch };
  const { children } = props;
  return <Store.Provider value={value}>{children}</Store.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node,
};

StoreProvider.defaultProps = {
  children: [],
};

export default Store;
