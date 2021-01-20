import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../../atoms/link-button/LinkButton';
import {
  Container, Icon, LinkContainer,
} from './eventBrands.style';

const EventDate = ({
  subscribed, iconSrc, linkColor,
  linkSize, linkFontSize,
}) => (
  <Container>
    <Icon src={iconSrc} />
    <LinkContainer>
      <LinkButton color={linkColor} size={linkSize} fontSize={linkFontSize}>
        {' '}
        {`${subscribed} bandas inscritas`}
      </LinkButton>
    </LinkContainer>
  </Container>
);

EventDate.propTypes = {
  subscribed: PropTypes.string,
};

EventDate.defaultProps = {
  subscribed: '',
  iconSrc: '/icons/audio_track.svg',
  linkColor: 'green',
  linkSize: 'default',
  linkFontSize: 'large',
};

export default EventDate;
