import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Cont, TextAreaComp } from './textArea.style';

/**
 * function that render react component
 * @param {object} props component props
 * @returns contains TextArea Component
 */
const TextArea = (props) => (
  <Wrapper>
    <TextAreaComp {...props} />
    {props.maxLength ? <Cont>{`${props.value.length}/${props.maxLength}`}</Cont> : null}
  </Wrapper>
);

TextArea.defaultProps = {
  value: '',
  maxLength: null
};

TextArea.propTypes = {
  value: PropTypes.string,
  maxLength: PropTypes.number
};

export default TextArea;
