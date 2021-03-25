import React from 'react';
import BurgerButton from '../../../../atoms/burger-button/burgerButton';
import { NavigationWrapper, Indicators, Ball } from './navigation.style';

const Navigation = () => (
  <NavigationWrapper>
    <BurgerButton />
    <Indicators>
      <Ball selected />
      <Ball />
      <Ball />
      <Ball />
      <Ball />
      <Ball />
    </Indicators>
  </NavigationWrapper>
);

export default Navigation;
    