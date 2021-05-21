import React from 'react';
import PropTypes from 'prop-types';
import { Container, Icon, LinkContainer, Link } from './subscribers.style';

const Subscribers = ({ subscribedArtists, subscribedProductors, iconSrc }) => (
  <Container>
    <Icon src={iconSrc} />
    <LinkContainer>
      <Link>{`${subscribedArtists} artistas inscritos`}</Link>
      <Link>{`${subscribedProductors} produtores inscritos`}</Link>
    </LinkContainer>
  </Container>
);

Subscribers.propTypes = {
  iconSrc: PropTypes.string,
  subscribedArtists: PropTypes.number,
  subscribedProductors: PropTypes.number
};

Subscribers.defaultProps = {
  iconSrc: '/icons/audio_track.svg',
  subscribedProductors: 0,
  subscribedArtists: 0
};

export default Subscribers;
