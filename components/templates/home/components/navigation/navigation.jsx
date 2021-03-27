import React, { useLayoutEffect, useState } from 'react';
import BurgerButton from '../../../../atoms/burger-button/burgerButton';
import { NavigationWrapper, Indicators, Ball } from './navigation.style';

const Navigation = () => {
  const [selected, setSelected] = useState('#apresentation');

  useLayoutEffect(() => {
    const listener = () => {
      const oportunitiesSection = document.querySelector('section#oportunities');
      const aboutSection = document.querySelector('section#about');
      const communitySection = document.querySelector('section#community');
      const twentySection = document.querySelector('section#twenty-2');
      const awardSection = document.querySelector('section#award');
      const howWorkSection = document.querySelector('section#how-work');
      
      const oportunitiesOffset =
        oportunitiesSection.getBoundingClientRect().top - oportunitiesSection.offsetParent.getBoundingClientRect().top;

      const aboutOffset =
        aboutSection.getBoundingClientRect().top - aboutSection.offsetParent.getBoundingClientRect().top;

      const communityOffset =
        communitySection.getBoundingClientRect().top - communitySection.offsetParent.getBoundingClientRect().top;

      const twentyOffset =
        twentySection.getBoundingClientRect().top - twentySection.offsetParent.getBoundingClientRect().top;

      const awardOffset =
        awardSection.getBoundingClientRect().top - awardSection.offsetParent.getBoundingClientRect().top;

      const howWorkOffset =
        howWorkSection.getBoundingClientRect().top - howWorkSection.offsetParent.getBoundingClientRect().top;

      if (
        window.scrollY <= oportunitiesOffset
        && selected !== '#apresentation'
      ) {
        setSelected('#apresentation');
      }

      if (
        window.scrollY >= oportunitiesOffset
        && window.scrollY < aboutOffset
        && selected !== '#oportunities'
      ) {
        setSelected('#oportunities');
      }

      if (
        window.scrollY >= aboutOffset
        && window.scrollY < communityOffset
        && selected !== '#about'
      ) {
        setSelected('#about');
      }

      if (
        window.scrollY >= communityOffset
        && window.scrollY < twentyOffset
        && selected !== '#community'
      ) {
        setSelected('#community');
      }

      if (
        window.scrollY >= communityOffset
        && window.scrollY < twentyOffset
        && selected !== '#community'
      ) {
        setSelected('#community');
      }

      if (
        window.scrollY >= twentyOffset
        && window.scrollY < awardOffset
        && selected !== '#twenty'
      ) {
        setSelected('#twenty');
      }

      if (
        window.scrollY >= awardOffset
        && window.scrollY < howWorkOffset
        && selected !== '#award'
      ) {
        setSelected('#award');
      }

      if (
        window.scrollY >= howWorkOffset
        && selected !== '#how-work'
      ) {
        setSelected('#how-work');
      }
    };

    document.addEventListener('scroll', listener, { capture: true });

    return () => {
      document.removeEventListener('scroll', listener, false);
    };
  });

  return (
    <NavigationWrapper>
      <BurgerButton />
      <Indicators>
        <Ball selected={selected === '#apresentation'} />
        <Ball selected={selected === '#oportunities'} />
        <Ball selected={selected === '#about'} />
        <Ball selected={selected === '#community'} />
        <Ball selected={selected === '#twenty'} />
        <Ball selected={selected === '#award'} />
        <Ball selected={selected === '#how-work'} />
      </Indicators>
    </NavigationWrapper>
  );
};

export default Navigation;
    