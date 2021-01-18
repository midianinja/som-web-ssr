import React, { useContext } from 'react';
import Apresentation from '../../organisms/home-apresentation/homeApresentation';
import IDALoginButton from '../../atoms/ida-login-button/idaLoginButton';
import HowItsWork from '../../organisms/home-how-it-works/homeHowItWorks';
import Instructions from '../../organisms/home-instructions/homeInstructions';
import OpenSource from '../../organisms/home-open-source/homeOpenSource';
import Newsletter from '../../organisms/home-news-letter/homeNewsLetter';
import Store from '../../../store/Store';
import { blockBodyScroll } from '../../../utils/scroll.utils';
import {
  Page, LoginButtonContainer, loginButtonStyle,
  PurpleWrapper,FiguresContainer, FiguresContent,
  RedEllipse, TermsWrapper, Terms, YellowPolygon,
  GreenRectangle, BlueRectangle, RedPolygon,
} from './home.style';

const showLogin = (dispatch) => {
  blockBodyScroll();
  dispatch({ type: 'SHOW_LOGIN_MODAL' });
};

const showRegister = (dispatch) => {
  blockBodyScroll();
  dispatch({ type: 'SHOW_REGISTER_MODAL' });
};

const Home = ({ history }) => {
  const { state, dispatch } = useContext(Store);
  console.log('🚀 ~ file: home.jsx ~ line 29 ~ Home ~ state', state);
  return (
    <Page>
      <LoginButtonContainer>
        <IDALoginButton
          onClick={() => state.idaSDK.signinWithPopup()}
        />
      </LoginButtonContainer>
      <Apresentation
        onClick={() => {
          state.idaSDK.signinWithPopup()
        }}
      />
      <FiguresContainer>
        <RedEllipse src="/icons/red-ellipse.svg" />
        <YellowPolygon src="/icons/yellow-polygon.svg" />
        <GreenRectangle src="/icons/green-rectangle.svg" />
        <BlueRectangle src="/icons/blue-rectangle.svg" />
        <RedPolygon src="/icons/red-polygon.svg" />
        <FiguresContent>
          <HowItsWork />
          <Instructions />
        </FiguresContent>
      </FiguresContainer>
      <PurpleWrapper>
        <iframe
          title="Midia"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bTUoq_zt2uM"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        />
      </PurpleWrapper>
      <OpenSource />
      <Newsletter />
      <TermsWrapper>
        <Terms
          onClick={() => {
            window.open(
              'https://s3-sa-east-1.amazonaws.com/festivalninja.org/img/termos-de-use-e-politicas-de-privacidade-som.pdf',
              '_blank',
            );
          }}
        >
          Termos de uso e políticas de privacidade
        </Terms>
      </TermsWrapper>
    </Page>
  );
};

export default Home;
