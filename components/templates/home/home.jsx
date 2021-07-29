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
import GlobalLoading from '../../molecules/global-loading/global-loading';

/**
 * This contains the Home Page
 * @returns {React.Component} productor form
 */
const Home = () => {
  const { state, dispatch } = useContext(Store);
  const [lastConnection, setLastConnection] = useState(null);
  const [communityUsers, setCommunityUsers] = useState([]);
  const [communityUsersLoading, setCommunityUsersLoading] = useState([]);
  const [highlightedOportunities, setHighlightedOportunities] = useState([]);
  const [highlightedOportunitiesLoading, setHighlightedOportunitiesLoading] = useState([]);
  const [latestOpportunities, setLatestOpportunities] = useState([]);
  const [latestOpportunitiesLoading, setLatestOpportunitiesLoading] = useState([]);
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
      setArtistOportunities,
      setLatestOpportunities,
      setLatestOpportunitiesLoading
    });

    const storageLastConnection = localStorage.getItem('som@last-connection');
    setLastConnection(storageLastConnection);
  }, []);

  if (
    latestOpportunitiesLoading ||
    communityUsersLoading ||
    highlightedOportunitiesLoading ||
    artistOportunitiesLoading ||
    newsLoading
  ) {
    return <GlobalLoading />;
  }

  return (
    <Page>
      <SplashScreen
        opened={splashScreen && !lastConnection}
        openSOM={() => {
          setSplashScreen(false);
          window.localStorage.setItem('som@last-connection', Date.now());
        }}
      />
      <Apresentation
        signinClick={() => {
          if (state.idaSDK) state.idaSDK.signinWithPopup();
        }}
        openNavigation={() => {
          dispatch({
            type: 'SHOW_NAVIGATION_MODAL'
          });
        }}
      />
      <DashBoard
        highlightedOportunities={highlightedOportunities}
        news={news}
        latestOpportunities={latestOpportunities}
        artistOportunities={artistOportunities}
        productorOportunities={productorOportunities}
      />
      <About
        communityUsers={{ ...communityUsers }
          .reverse()
          .concat({ ...communityUsers }.reverse())
          .concat({ ...communityUsers }.reverse())
          .concat({ ...communityUsers }.reverse())
          .concat({ ...communityUsers }.reverse())
          .concat({ ...communityUsers }.reverse())
          .concat({ ...communityUsers }.reverse())}
      />
      <HowItWorks />
      <NewsLetter />
    </Page>
  );
};

export default Home;
