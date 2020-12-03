import React from 'react';
import PropTypes from 'prop-types';
import {
  Input, Icon,
  InputIconWrapper, icons,
} from './inputIcon.style';

/**
 * function that render InputIcon react component
 * @param {object} props component props
 * @returns contains InputIcon Component
 */
const InputIcon = ({
  onChange, placeholder, value,
  width, type, icon, iconAlt,
}) => {
  return (
    <InputIconWrapper width={width}>
      <Input onChange={onChange} placeholder={placeholder} value={value} type={type} />
      <Icon src={icons[icon]} alt={iconAlt} />
    </InputIconWrapper>
  );
}

InputIcon.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  width: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  iconAlt: PropTypes.string,
};

InputIcon.defaultProps = {
  placeholder: '',
  width: 'auto',
  type: 'text',
  icon: 'calendar',
  iconAlt: '',
};

export default InputIcon;
