import React from 'react';
import PropTypes from 'prop-types';
import { IDASignupButtonWrapper, IDALogo } from './idaSignupButton.style';

/**
 * This render the button that open IDA Signup modal component
 */
const IDASignupButton = ({ onClick }) => (
  <IDASignupButtonWrapper
    type="button"
    onClick={onClick}
  >
    <IDALogo
      src="https://ida-design-system-assets.s3-us-west-2.amazonaws.com/icons/brand.svg"
      alt=""
    />
    Cadastre-se com a IDa
  </IDASignupButtonWrapper>
);

IDASignupButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

IDASignupButton.defaultProps = {};

export default IDASignupButton;
