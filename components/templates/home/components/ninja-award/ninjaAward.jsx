import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../../../atoms/primary-button/primaryButton';
import {
  Section, Video, Title, Description,
  Container,
} from './ninjaAward.style';

const NINJAAward = ({ onSubscribe }) => (
  <Section id="award">
    <Video />
    <Container>
      <Title>1o Prêmio NINJA Music de Música Online</Title>
      <Description>20 prêmios de R$1000,00</Description>
      <PrimaryButton
        customStyle={`
          width: 100%;

          @media (min-width: 1024px) {
            max-width: 340px;
          }
        `}
        onClick={onSubscribe}
        color="white"
      >
        Quero me inscrever!
      </PrimaryButton>
    </Container>
  </Section>
);

NINJAAward.propTypes = {
  onSubscribe: PropTypes.func.isRequired,
};

export default NINJAAward;
