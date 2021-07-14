import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Store from '../../../store/Store';
import PropTypes from 'prop-types';
import IDASigninButton from '../../atoms/ida-login-button/idaLoginButton';
import {
  HomeWrapper,
  Header,
  HeaderWrapper,
  SmallLogo,
  BurgerWrapper,
  BurgerIcon,
  ButtonWrapper
} from './homeApresentation.style';

/**
 * This contains the Home apresentation section
 * @returns {React.Component} productor form
 */

const HomeApresentation = ({ signinClick, openNavigation }) => {
  const { state } = useContext(Store);
  const router = useRouter();

  return (
    <HomeWrapper id="apresentation">
      <Header>
        <HeaderWrapper>
          <BurgerWrapper>
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
          </BurgerWrapper>
          <SmallLogo src="/images/logo.svg" alt="" />
          <ButtonWrapper hide={state.auth && state.auth._id}>
            <IDASigninButton
              customStyle={`
                z-index: 11;
              `}
              onClick={signinClick}
            />
          </ButtonWrapper>
          <ButtonWrapper hide={!state.auth || !state.auth._id}>
            <IDASigninButton
              customStyle={`
                z-index: 11;
              `}
              onClick={() => router.push('/opportunities')}
            />
          </ButtonWrapper>
        </HeaderWrapper>
      </Header>
    </HomeWrapper>
  );
};

HomeApresentation.propTypes = {
  signinClick: PropTypes.func.isRequired,
  openNavigation: PropTypes.func.isRequired
};

export default HomeApresentation;
