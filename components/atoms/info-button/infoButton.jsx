import React from 'react';
import PropTypes from 'prop-types';
import {
  IconContainer,
  Icon,
} from './infoButton.style';

const InfoButton = (props) => (
  <IconContainer {...props}>
    <Icon src={props.infoIcon} />
  </IconContainer>
);

InfoButton.propTypes = {
  infoIcon: PropTypes.string,
};

InfoButton.defualtProps = {
  infoIcon: '/icons/info.svg',
};

export default InfoButton;
