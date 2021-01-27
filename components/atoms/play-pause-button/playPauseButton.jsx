import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PlayPauseButtonStyle } from './playPauseButton.style';

/**
 * function that render react component
 * @param {object} props component props
 * @returns contains PlayPauseButton Component
 */
const PlayPauseButton = (props) => {
  return <PlayPauseButtonStyle {...props} />;
};

PlayPauseButton.propTypes = {};

PlayPauseButton.defaultProps = {};

export default PlayPauseButton;
