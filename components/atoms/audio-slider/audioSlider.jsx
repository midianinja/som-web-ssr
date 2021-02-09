import React from 'react';
import PropTypes from 'prop-types';
import { AudioSliderStyle } from './audioSlider.style';

/**
 * function that render AudioSliderAtom react component
 *
 * @param {object} props component props
 * @returns contains NewsletterInput Component
 */
const AudioSliderAtom = ({
  color, color15, color50, value,
  id, max, min, defaultValue,
  onChange,
}) => (
  <AudioSliderStyle
    color={color}
    color15={color15}
    color50={color50}
    value={value}
    max={max}
    min={min}
    id={id}
    defaultValue={defaultValue}
    onChange={onChange}
  />
);

AudioSliderAtom.propTypes = {
  color: PropTypes.string,
  color15: PropTypes.string,
  color50: PropTypes.string,
  value: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

AudioSliderAtom.defualtProps = {
  color: '',
  color15: '',
  color50: '',
  value: '',
  min: '0',
  max: '1000',
  id: '',
  defaultValue: '0',
};

export default AudioSliderAtom;
