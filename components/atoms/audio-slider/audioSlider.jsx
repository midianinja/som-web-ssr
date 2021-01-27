import React from 'react';
import PropTypes from 'prop-types';
import { AudioSliderStyle } from './audioSlider.style';

/**
 * function that render AudioSliderAtom react component
 *
 * @param {object} props component props
 * @returns contains NewsletterInput Component
 */
const AudioSliderAtom = ({ color, color15, color50, value }) => (
  <AudioSliderStyle color={color} color15={color15} color50={color50} value={value} />
);

AudioSliderAtom.propTypes = {
  color: PropTypes.string,
  color15: PropTypes.string,
  color50: PropTypes.string,
  value: PropTypes.string
};

AudioSliderAtom.defualtProps = {
  color: '',
  color15: '',
  color50: '',
  value: ''
};

export default AudioSliderAtom;
