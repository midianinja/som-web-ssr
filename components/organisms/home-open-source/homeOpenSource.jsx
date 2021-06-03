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
  buttonStyle,
  HeaderText
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
    </Header>
    <HeaderText>
      <TextWrapper>
        <Span>Além de tudo isso</Span>
        <Title>O Som é Software Livre</Title>
      </TextWrapper>
      <PrimaryButton
        onClick={() => {
          window.open('https://github.com/midianinja/som-web', '_blank');
        }}
        customStyle={buttonStyle}
        color="darkGray">
        Contribua no Github
          <GitHubIcon src="/icons/github.svg" />
      </PrimaryButton>
    </HeaderText>

  </Container>
);

export default HomeOpenSource;
