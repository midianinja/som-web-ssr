import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import {
  Card, Cover, Title, Description,
} from './commuinityMainCard.style';

const CommunityMainCard = ({ onSubscribe }) => (
  <Card>
    <Cover />
    <Title>
      Movimente a cena e ajude a construir circuitos musicais!
    </Title>
    <Description>
      Explicação breve sobre como a ferramenta possibilita que o usuário movimente a cena e ajude a construir circuitos musicais
    </Description>
    <PrimaryButton
      customStyle={`
        @media (min-width: 1024px) {
          z-index: 10;
          max-width: 272px;
        }
      `}
      onClick={onSubscribe}
    >
      Quero me inscrever!
    </PrimaryButton>
  </Card>
);

CommunityMainCard.propTypes = {
  onSubscribe: PropTypes.func.isRequired,
};

export default CommunityMainCard;
