import React from 'react';
import PropTypes from 'prop-types';
import IDASigninButton from '../../atoms/ida-login-button/idaLoginButton';
import {
  HomeWrapper,
  Header,
  HeaderWrapper,
  SmallLogo,
  BurgerIcon
} from './homeApresentation.style';

/**
 * This contains the Home apresentation section
 * @returns {React.Component} productor form
 */
const HomeApresentation = ({ signinClick, openNavigation }) => (
  <HomeWrapper id="apresentation">
    <Header>
      <HeaderWrapper>
        <BurgerIcon
          onClick={openNavigation}
          width="30"
          height="21"
          viewBox="0 0 30 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="30" height="3" fill="white" />
          <rect y="8.46191" width="22" height="3" fill="white" />
          <rect y="17.6934" width="30" height="3" fill="white" />
        </BurgerIcon>
        <SmallLogo src="/images/logo.svg" alt="" />
        <IDASigninButton
          customStyle={`
            z-index: 11;
          `}
          onClick={signinClick}
        />
      </HeaderWrapper>
    </Header>
  </HomeWrapper>
);

HomeApresentation.propTypes = {
  signinClick: PropTypes.func.isRequired,
  openNavigation: PropTypes.func.isRequired
};

export default HomeApresentation;
