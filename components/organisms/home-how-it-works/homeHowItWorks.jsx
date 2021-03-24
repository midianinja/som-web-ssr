import React from 'react';
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
const HomeHowItsWork = () => (
  <Container>
    <Title>Como funciona o SOM?</Title>
    <Content>
      <HowItsWorkCard
        icon="/icons/home-ida.svg"
        title="Faça seu login"
        description="IDa é a sua identidade digital. Através dela você tem acesso à rede S.O.M. além de outras plataformas"
        number="1"
      />
      <HowItsWorkCard
        icon="/icons/home-subscribe-band.svg"
        title="Tenha personalidade"
        description="Quanto mais completo e atraente for o seu perfil, mais chances você tem de garantir as melhores oportunidades e fazer contatos."
        number="2"
      />
      <HowItsWorkCard
        icon="/icons/home-world.svg"
        title="Acelere sua carreira"
        description="Conecte-se à indústria e ao mercado da música e espalhe seus projetos para o mundo."
        number="3"
      />
    </Content>
  </Container>
);

export default HomeHowItsWork;
