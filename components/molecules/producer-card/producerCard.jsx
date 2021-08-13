import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Title } from './producerCard.style';

const ProducersCard = ({ onClick, followAction, unfollow, producers, followersAmount }) => (
  <Container>
    <Image onClick={onClick} image={producers.photo}></Image>
    <Title>{producers.name} </Title>
  </Container>
);

ProducersCard.propTypes = {
  customStyle: PropTypes.string.isRequired,
  producers: PropTypes.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ProducersCard;
