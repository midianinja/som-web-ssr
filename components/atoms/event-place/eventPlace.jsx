import React from 'react';
import PropTypes from 'prop-types';
import { Container, IconWrapper, Icon, Adress } from './eventPlace.style';

/**
 * function that render EventPlace react component
 *
 * @param {object} props component props
 * @returns contains EventPlace Component
 */
const EventPlace = ({ address, district, city, state, complement, placeMarkIcon, online }) => (
  <Container>
    <IconWrapper>
      <Icon src={placeMarkIcon} />
    </IconWrapper>
    <Adress>
      {!online
        ? `${address ? `${address} ${complement ? `(${complement})` : ''} / ` : ''} ${district},
              ${city}, ${state}`
        : 'Online'}
    </Adress>
  </Container>
);

EventPlace.propTypes = {
  address: PropTypes.string.isRequired,
  district: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  complement: PropTypes.string.isRequired
};

EventPlace.defaultProps = {
  placeMarkIcon: '/icons/place_mark.svg'
};

export default EventPlace;
