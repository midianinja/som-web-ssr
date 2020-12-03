import React from 'react';
import PropTypes from 'prop-types';

/**
 * function that render Checkbox react component
 * 
 * @param {object} props component props
 * @returns contains Checkbox Component
 */
function Checkbox({
  checked, text, onChange,
}) {
  return (
    <Wrapper onClick={onChange}>
      <Circle checked={checked} />
      <Label>{text}</Label>
    </Wrapper>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {};

export default Checkbox;
