import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../../../atoms/primary-button/primaryButton';
import {
  Section, Video, Title, Description,
  Container,
} from './ninjaAward.style';

const NINJAAward = ({ onSubscribe }) => (
  <Section>
    <Video />
    <Container>
      <Title>1o Prêmio NINJA Music de Música Online</Title>
      <Description>20 prêmios de R$1000,00</Description>
      <PrimaryButton
        customStyle="width: 100%;"
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