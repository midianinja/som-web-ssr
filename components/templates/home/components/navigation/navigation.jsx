import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BurgerButton from '../../../../atoms/burger-button/burgerButton';
import { NavigationWrapper, Indicators, Ball } from './navigation.style';

const Navigation = ({ onClick }) => {
  const [selected, setSelected] = useState('#apresentation');

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

    // const twentyOffset =
    //   twentySection.getBoundingClientRect().top - twentySection.offsetParent.getBoundingClientRect().top;

    const awardOffset =
      awardSection.getBoundingClientRect().top - awardSection.offsetParent.getBoundingClientRect().top;

    const howWorkOffset =
      howWorkSection.getBoundingClientRect().top - howWorkSection.offsetParent.getBoundingClientRect().top;

    if (
      window.scrollY < awardOffset
      && selected !== '#apresentation'
    ) {
      setSelected('#apresentation');
    }

    if (
      window.scrollY >= awardOffset
      && window.scrollY < oportunitiesOffset
      && selected !== '#award'
    ) {
      setSelected('#award');
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
      && window.scrollY < howWorkOffset
      && selected !== '#community'
    ) {
      setSelected('#community');
    }

    if (
      window.scrollY >= howWorkOffset
      && selected !== '#how-work'
    ) {
      setSelected('#how-work');
    }
  }

  useLayoutEffect(() => {
    document.addEventListener('scroll', listener);

    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <NavigationWrapper>
      <BurgerButton onClick={onClick} />
      <Indicators>
        <Ball selected={selected === '#apresentation'} />
        <Ball selected={selected === '#award'} />
        <Ball selected={selected === '#oportunities'} />
        <Ball selected={selected === '#about'} />
        <Ball selected={selected === '#community'} />
        <Ball selected={selected === '#how-work'} />
      </Indicators>
    </NavigationWrapper>
  );
};

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Navigation;
    