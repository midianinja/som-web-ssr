import React from 'react';
import PropTypes from 'prop-types';
import { IDALoginButtonWrapper, IDALogo } from './idaLoginButton.style';

/**
 * This render the button that open IDA Login modal component
 */
const IDALoginButton = ({ onClick, dark }) => (
  <IDALoginButtonWrapper
    type="button"
    dark={dark}
    onClick={onClick}
  >
    <IDALogo
      src={
        dark 
          ? 'https://ida-design-system-assets.s3-us-west-2.amazonaws.com/icons/brand.svg'
          : 'https://ida-design-system-assets.s3-us-west-2.amazonaws.com/icons/white-brand.svg'
      }
      alt=""
    />
    Entrar
  </IDALoginButtonWrapper>
);

IDALoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  dark: PropTypes.bool,
};

IDALoginButton.defaultProps = {
  dark: false,
};

export default IDALoginButton;
