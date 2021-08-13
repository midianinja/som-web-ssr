import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Image, Title } from './artistCard.style';

const ArtistCard = ({ onClick, followAction, unfollow, artists, followersAmount }) => (
  <Container>
    <Image onClick={onClick} image={artists.avatar_image?.mimified}></Image>
    <Title>{artists.name} </Title>
  </Container>
);

ArtistCard.propTypes = {
  customStyle: PropTypes.string.isRequired,
  artists: PropTypes.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ArtistCard;
