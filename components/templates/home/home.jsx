import React, { useContext } from 'react';
import Store from '../../../store/Store';
import Navigation from './components/navigation/navigation';
import Apresentation from '../../organisms/home-apresentation/homeApresentation';
import HowItsWork from '../../organisms/home-how-it-works/homeHowItWorks';
import Instructions from '../../organisms/home-instructions/homeInstructions';
import OpenSource from '../../organisms/home-open-source/homeOpenSource';
import Newsletter from '../../organisms/home-news-letter/homeNewsLetter';
import About from './components/about/about';
import MovimentOnCommunity from './components/moviment-on-community/movimentOnCommunity';
import TwentyYearsOfDevelopment from './components/20-years-of-development/20YearsOfDevelopment';
import NINJAAward from './components/ninja-award/ninjaAward';
import OthersOportunities from './components/others-oportunities/othersOportunities';
import {
  Page,
} from './home.style';

/**
 * This contains the Home Page
 * @returns {React.Component} productor form
 */
const Home = () => {
  const { state } = useContext(Store);
  return (
    <Page>
      <Navigation />
      <Apresentation
        signinClick={() => {
          if (state.idaSDK) state.idaSDK.signinWithPopup();
        }}
        signupClick={() => {
          if (state.idaSDK) state.idaSDK.signupWithPopup();
        }}
      />
      <OthersOportunities />
      <About />
      <MovimentOnCommunity />
      <TwentyYearsOfDevelopment />
      <NINJAAward />
      <HowItsWork />
      <Instructions />
      <OpenSource />
      <Newsletter />
    </Page>
  );
};

export default Home;
