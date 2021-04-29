import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IDASignupButton from '../../atoms/ida-signup-button/idaSignupButton';
import IDASigninButton from '../../atoms/ida-login-button/idaLoginButton';
import LinkButton from '../../atoms/link-button/LinkButton';
import OportunitiesMap from '../../molecules/opotunities-map/oportunities-map';
import OverlayM from '../../molecules/overlay-m/overlay-m';
import {
  HomeWrapper, Wrapper, Content, Logo,
  Title, CTAWrapper, TextWrapper, SmallLogo,
  Header, WrittenLogo, Description, MapWrapper,
  OverlayMWrapper,
} from './homeApresentation.style';

/**
 * function that loading image before render
 * @void
 * @param {string} src image source to be loading
 */
const load = (src, callback) => {
  const img = new Image();

  img.onload = () => {
    callback(src);
  };

  img.src = src;
};

/**
 * This contains the Home apresentation section
 * @returns {React.Component} productor form
 */
const HomeApresentation = ({ signupClick, signinClick }) => {
  const [bgSrc, setBgSrc] = useState('/images/colorful-logo.svg');

  useEffect(() => {
    const bg = '/images/colorful-logo.svg';
    load(bg, setBgSrc);
  }, []);

  return (
    <HomeWrapper id="apresentation">
      <Header>
        <SmallLogo src="/images/logo.svg" alt="" />
        <IDASigninButton onClick={signinClick} />
      </Header>
      <Wrapper>
        <Content>
          <TextWrapper>
            <Logo src={bgSrc} alt="Som, Sistema Operacional da Música" />
            <Title>
              Sonha viver de música?
            </Title>
            <Description>
              Participe de nossa comunidade musical e aproveite oportunidades exclusivas.
            </Description>
          </TextWrapper>
          <CTAWrapper>
            <IDASignupButton onClick={signupClick} />
            <LinkButton color="white" onClick={signinClick}>Já tenho cadastro</LinkButton>
          </CTAWrapper>
        </Content>
      </Wrapper>
      <MapWrapper>
        <OportunitiesMap />
      </MapWrapper>
      <OverlayMWrapper>
        <OverlayM />
      </OverlayMWrapper>
      <WrittenLogo src="/icons/logo-written.svg" alt="" />
    </HomeWrapper>
  );
};

HomeApresentation.propTypes = {
  signinClick: PropTypes.func.isRequired,
  signupClick: PropTypes.func.isRequired,
};

export default HomeApresentation;
