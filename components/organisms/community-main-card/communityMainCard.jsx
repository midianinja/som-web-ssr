import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import { Card, Cover, Title, Description } from './commuinityMainCard.style';

const CommunityMainCard = ({ onSubscribe }) => (
  <Card>
    <Cover />
    <Title>Movimente a cena e ajude a construir circuitos musicais!</Title>
    <Description>
      Participe de uma rede de trocas e conexões com artistas e produtores de todo o Brasil. Pense
      sua carreira coletivamente!
    </Description>
    <PrimaryButton
      customStyle={`
        @media (min-width: 1024px) {
          z-index: 10;
          max-width: 272px;
        }
      `}
      onClick={onSubscribe}>
      Quero me inscrever!
    </PrimaryButton>
  </Card>
);

CommunityMainCard.propTypes = {
  onSubscribe: PropTypes.func.isRequired
};

export default CommunityMainCard;
