import React from 'react';
import PropTypes from 'prop-types';
import { Burger, Line } from './burgerButton.style';

const BurgerButton = ({ onClick, dark }) => (
  <Burger
    onClick={onClick}
  >
    <Line dark={dark} />
    <Line dark={dark} />
    <Line dark={dark} />
  </Burger>
);

BurgerButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  dark: PropTypes.bool,
};

BurgerButton.defaultProps = {
  dark: false,
};

export default BurgerButton;
