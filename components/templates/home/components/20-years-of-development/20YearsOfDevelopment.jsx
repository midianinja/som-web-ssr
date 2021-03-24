import React from 'react';
import SlimButton from '../../../../atoms/slim-button/slimButton';
import {
  Section, StarsWrapper, Star, Twenty,
  Title, Illustration, Content, ActionWrapper,
} from './20YearsOfDevelopment.style';

const TwentyYearsOfDevelopment = () => (
  <Section>
    <Illustration src="/icons/posters-illustration.svg" alt="" />
    <Content>
      <Title>20 anos desenvolvendo tecnologias sociais para a música</Title>
      <StarsWrapper>
        <Star src="/icons/yellow-star.svg" alt="" />
        <Star src="/icons/yellow-star.svg" alt="" />
        <Star src="/icons/yellow-star.svg" alt="" />
        <Star src="/icons/yellow-star.svg" alt="" />
        <Star src="/icons/yellow-star.svg" alt="" />
      </StarsWrapper>
      <ActionWrapper>
        <SlimButton color="white">Leia mais</SlimButton>
      </ActionWrapper>
    </Content>
    <Twenty src="/icons/20.svg" />
  </Section>
);

export default TwentyYearsOfDevelopment;
