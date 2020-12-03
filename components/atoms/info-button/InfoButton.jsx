import React from 'react';
import PropTypes from 'prop-types';
import {
  IconContainer,
  Icon,
} from './infoButton.style';

/**
 * function that render InfoButton react component
 * 
 * @param {object} props component props
 * @returns contains InfoButton Component
 */
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
