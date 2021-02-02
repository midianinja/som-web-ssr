import React from 'react';
import PropTypes from 'prop-types';
import { InptGroupContainer, Label, ErrorText, InfoText, InputWrapper } from './inputGroup.style';

const InputGroup = ({
  children, label, info, error, customStyle,
  customLabelStyle, customErrorStyle, marginLeft,
}) => (
  <InptGroupContainer marginLeft={marginLeft} customStyle={customStyle}>
    {label ? <Label customStyle={customLabelStyle}>{label}</Label> : null}
    <InputWrapper customStyle={customStyle}>{children}</InputWrapper>
    {info && !error ? <InfoText>{info}</InfoText> : null}
    {error ? <ErrorText customStyle={customErrorStyle}>{error}</ErrorText> : null}
  </InptGroupContainer>
);

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  customStyle: PropTypes.string,
  customLabelStyle: PropTypes.string,
  customErrorStyle: PropTypes.string,
  info: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
};

InputGroup.defaultProps = {
  customStyle: '',
  customLabelStyle: '',
  customErrorStyle: ''
};

export default InputGroup;
