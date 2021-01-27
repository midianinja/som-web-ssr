import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input, Icon, PasswordInputWrapper } from './passwordInput.style';

/**
 * function that render react component
 * @param {object} props component props
 * @returns contains PasswordInput Component
 */
const PasswordInput = ({
  onChange,
  placeholder,
  value,
  width,
  point,
  id,
  autoComplete,
  visibilityIconOn,
  visibilityIconOff
}) => {
  const [visibility, setvisibility] = useState(false);
  const src = visibility ? visibilityIconOn : visibilityIconOff;

  return (
    <PasswordInputWrapper width={width} point={point}>
      <Input
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={visibility ? 'text' : 'password'}
        name={`${id} ${Math.random()}`}
        autoComplete={autoComplete}
      />
      <Icon src={src} alt="" onClick={() => setvisibility(!visibility)} />
    </PasswordInputWrapper>
  );
};

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  width: PropTypes.string,
  point: PropTypes.number,
  id: PropTypes.string,
  visibilityIconOn: PropTypes.string,
  visibilityIconOff: PropTypes.string,
  autoComplete: PropTypes.string
};

PasswordInput.defaultProps = {
  autoComplete: 'new-password',
  id: '',
  width: 'auto',
  point: 10,
  visibilityIconOn: '/icons/visibility_outlined.svg',
  visibilityIconOff: '/icons/visibility_off_outlined.svg'
};

export default PasswordInput;
