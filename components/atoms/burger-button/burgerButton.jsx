import React from 'react';
import PropTypes from 'prop-types';
import { BurgerButton, Line } from './burgerButton.style';

const BurgerButton = ({ onClick, dark }) => (
  <BurgerButton
    onClick={onClick}
  >
    <Line dark={dark} />
    <Line dark={dark} />
    <Line dark={dark} />
  </BurgerButton>
);

BurgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  dark: PropTypes.bool,
};

BurgerButton.defaultProps = {
  dark: false,
};

export default BurgerButton;
