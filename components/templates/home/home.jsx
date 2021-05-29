import React, { useContext } from 'react';
import Store from '../../../store/Store';
import Apresentation from '../../organisms/home-apresentation/homeApresentation';
import { Page } from './home.style';

/**
 * This contains the Home Page
 * @returns {React.Component} productor form
 */
const Home = () => {
  const { state, dispatch } = useContext(Store);
  return (
    <Page>
      <Apresentation
        signinClick={() => {
          if (state.idaSDK) state.idaSDK.signinWithPopup();
        }}
        signupClick={() => {
          if (state.idaSDK) state.idaSDK.signupWithPopup();
        }}
        openNavigation={() => {
          dispatch({
            type: 'SHOW_NAVIGATION_MODAL'
          });
        }}
      />
    </Page>
  );
};

export default Home;
