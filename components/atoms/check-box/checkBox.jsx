import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Circle, Label } from './checkBox.style';

/**
 * function that render Checkbox react component
 *
 * @param {object} props component props
 * @returns contains Checkbox Component
 */
const Checkbox = ({ checked, text, onChange, multiple }) => (
  <Wrapper onClick={onChange}>
    <Circle checked={checked} multiple={multiple} />
    <Label>{text}</Label>
  </Wrapper>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

Checkbox.defaultProps = {
  multiple: false
};

export default Checkbox;
