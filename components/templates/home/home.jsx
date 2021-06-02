import React, { useContext, useState, useEffect } from 'react';
import Store from '../../../store/Store';
import Apresentation from '../../organisms/home-apresentation/homeApresentation';
import About from './components/about/about';
import HowItWorks from './components/how-it-works/howItWorks';
import { init } from './home.controller';
import { Page } from './home.style';

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
  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState([]);

  useEffect(() => {
    init({
      setCommunityUsers,
      setCommunityUsersLoading,
      setHighlightedOportunities,
      setHighlightedOportunitiesLoading,
      setNews,
      setNewsLoading
    });
  }, []);

  console.log('communityUsersLoading', communityUsersLoading);
  console.log('highlightedOportunities', highlightedOportunities);
  console.log('highlightedOportunitiesLoading', highlightedOportunitiesLoading);
  console.log('news', news);
  console.log('newsLoading', newsLoading);

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
      <About communityUsers={communityUsers} />
      <HowItWorks />
    </Page>
  );
};

export default Home;
