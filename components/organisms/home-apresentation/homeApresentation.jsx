import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Store from '../../../store/Store';
import PropTypes from 'prop-types';
import DefaultHeader from '../default-header/defaultHeader';
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
      <DefaultHeader />
    </HomeWrapper>
  );
};

HomeApresentation.propTypes = {
  signinClick: PropTypes.func.isRequired,
  openNavigation: PropTypes.func.isRequired
};

export default HomeApresentation;
