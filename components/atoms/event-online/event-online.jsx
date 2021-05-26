import React from 'react';
import PropTypes from 'prop-types';
import { Container, IconWrapper, Icon, ALink } from './event-online.style';

/**
 * function that render EventOnline react component
 *
 * @param {object} props component props
 * @returns contains EventOnline Component
 */
const EventOnline = ({ src, placeMarkIcon }) => (
  <Container>
    <IconWrapper>
      <Icon src={placeMarkIcon} />
    </IconWrapper>
    <ALink href={src} target="_blank">
      Assistir
    </ALink>
  </Container>
);

EventOnline.propTypes = {
  src: PropTypes.string.isRequired,
  placeMarkIcon: PropTypes.string
};

EventOnline.defaultProps = {
  placeMarkIcon: '/icons/place_mark.svg'
};

export default EventOnline;
