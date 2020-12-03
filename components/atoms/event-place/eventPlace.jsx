import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, IconWrapper, Icon, Adress,
} from './eventPlace.style';

const EventPlace = ({
  address, district, city, state,
  complement, placeMarkIcon,
}) => (
  <Container>
    <IconWrapper>
      <Icon src={placeMarkIcon} />
    </IconWrapper>
    <Adress>
      {`${address ? `${address} ${complement ? `(${complement})` : ''} / ` : ''} ${district},
      ${city}, ${state}`}
    </Adress>
  </Container>
);

EventPlace.propTypes = {
  address: PropTypes.string.isRequired,
  district: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  complement: PropTypes.string.isRequired,
};

EventPlace.defaultPros = {
  placeMarkIcon: '/icons/place_mark.svg',
};

export default EventPlace;
