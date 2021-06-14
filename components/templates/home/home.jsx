import React, { useContext, useState, useEffect } from 'react';
import Store from '../../../store/Store';
import SplashScreen from '../../modals/splash-screen/splashScreen';
import Apresentation from '../../organisms/home-apresentation/homeApresentation';
import NewsLetter from '../../organisms/home-news-letter/homeNewsLetter';
import About from './components/about/about';
import HowItWorks from './components/how-it-works/howItWorks';
import { init } from './home.controller';
import { Page } from './home.style';
import DashBoard from './components/dashboard/dashboard';

/**
 * This contains the Home Page
 * @returns {React.Component} productor form
 */
const Home = () => {
  const { state, dispatch } = useContext(Store);
  const [communityUsers, setCommunityUsers] = useState([]);
  const [communityUsersLoading, setCommunityUsersLoading] = useState([]);
  const [highlightedOportunities, setHighlightedOportunities] = useState([]);
  const [highlightedOportunitiesLoading, setHighlightedOportunitiesLoading] = useState([]);
  const [productorOportunities, setProductorOportunities] = useState([]);
  const [productorOportunitiesLoading, setProductorOportunitiesLoading] = useState([]);
  const [artistOportunities, setArtistOportunities] = useState([]);
  const [artistOportunitiesLoading, setArtistOportunitiesLoading] = useState([]);
  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState([]);
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    init({
      setCommunityUsers,
      setCommunityUsersLoading,
      setHighlightedOportunities,
      setHighlightedOportunitiesLoading,
      setNews,
      setNewsLoading,
      setProductorOportunitiesLoading,
      setArtistOportunitiesLoading,
      setProductorOportunities,
      setArtistOportunities
    });
  }, []);

  console.log('communityUsersLoading', communityUsersLoading);
  console.log('highlightedOportunities', highlightedOportunities);
  console.log('highlightedOportunitiesLoading', highlightedOportunitiesLoading);
  console.log('news', news);
  console.log('newsLoading', newsLoading);
  console.log('productorOportunities', productorOportunities);
  console.log('productorOportunitiesLoading', productorOportunitiesLoading);
  console.log('artistOportunities', artistOportunities);
  console.log('artistOportunitiesLoading', artistOportunitiesLoading);

  return (
    <Page>
      <SplashScreen opened={splashScreen} openSOM={() => setSplashScreen(false)} />
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
      <DashBoard />
      <About communityUsers={communityUsers} />
      <HowItWorks />
      <NewsLetter />
    </Page>
  );
};

export default Home;
