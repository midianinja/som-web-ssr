import React, { useState } from 'react';
import HowItsWorkCard from '../../molecules/how-it-works/howItWorks';
import {
  Container,
  Title,
  Content,
  ScrollIndicatorWrapper,
  ScrollIndicator
} from './homeHowItWorks.style';

/**
 * function that render How It Works React Component
 * @param {object} props component props
 * @returns contains HomeHowItsWork Component
 */
const HomeHowItsWork = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  return (
    <Container>
      <Title>Como funciona o SOM?</Title>
      <Content
        onScroll={(e) => {
          setScrollPosition(e.target.scrollLeft);
          setScrollWidth(e.target.scrollWidth - (document.documentElement.clientWidth - 30));
        }}>
        <HowItsWorkCard
          icon="/icons/home-ida.svg"
          title="Crie sua IDa"
          description="IDa é a sua identidade digital. Através dela você tem acesso à rede SOM além de outras plataformas."
          number="1"
        />
        <HowItsWorkCard
          icon="/icons/home-subscribe-band.svg"
          title="Inscreva sua banda"
          description="Encontre produtores e festivais e inscreva-se em oportunidades."
          number="2"
        />
        <HowItsWorkCard
          icon="/icons/home-world.svg"
          title="Circule o mundo"
          description="Faça uma turnê e espalhe o seu som!"
          number="3"
        />
      </Content>
      <ScrollIndicatorWrapper>
        <ScrollIndicator position={scrollPosition} scrollWidth={scrollWidth} />
      </ScrollIndicatorWrapper>
    </Container>
  );
};

export default HomeHowItsWork;
