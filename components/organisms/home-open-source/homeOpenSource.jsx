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
  CTA,
  CTAMobile
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
        <CTA>
          <PrimaryButton
            onClick={() => {
              window.open('https://github.com/midianinja/som', '_blank');
            }}
            customStyle={buttonStyle}
            color="darkGray">
            Contribua no Github
            <GitHubIcon src="/icons/github.svg" />
          </PrimaryButton>
        </CTA>
      </TextWrapper>
    </Header>
    <CTAMobile>
      <PrimaryButton
        onClick={() => {
          window.open('https://github.com/midianinja/som', '_blank');
        }}
        customStyle={buttonStyle}
        color="darkGray">
        Contribua no Github
        <GitHubIcon src="/icons/github.svg" />
      </PrimaryButton>
    </CTAMobile>
  </Container>
);

export default HomeOpenSource;
