import React from 'react';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import {
  Container,
  Header,
  Figure,
  TextWrapper,
  Title,
  Span,
  GitHubIcon,
  buttonStyle
} from './homeOpenSource.style';

/**
 * function that render Open Source React Component
 * @param {object} props component props
 * @returns contains HomeOpenSource Component
 */
const HomeOpenSource = () => (
  <Container>
    <Header>
      <Figure
        src="/icons/open-source.svg"
        alt="Diminuir as distâncias e democratizar as oportunidades"
      />
      <TextWrapper>
        <Span>Além de tudo isso</Span>
        <Title>O Som é Software Livre</Title>
      </TextWrapper>
    </Header>
    <PrimaryButton
      onClick={() => {
        window.open('https://github.com/midianinja/som-web', '_blank');
      }}
      customStyle={buttonStyle}
      color="darkGray">
      Colabore
      <GitHubIcon src="/icons/github.svg" />
    </PrimaryButton>
  </Container>
);

export default HomeOpenSource;
