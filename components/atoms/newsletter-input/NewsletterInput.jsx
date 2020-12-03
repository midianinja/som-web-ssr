import React from 'react';
import PropTypes from 'prop-types';

import {
  Input, Icon,
  NewsletterInputWrapper, inputStyle,
} from './newsletterInput.style';

/**
 * function that render react component
 * @param {object} props component props
 * @returns contains NewsletterInput Component
 */
function NewsletterInput({
  onChange, placeholder, value, width, point, onSubmit,
}) {
  return (
    <NewsletterInputWrapper width={width} point={point}>
      <Input
        customStyle={inputStyle}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      <Icon src="/icons/send.svg" alt="Envie" onClick={() => onSubmit()} />
    </NewsletterInputWrapper>
  );
}

NewsletterInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  width: PropTypes.string,
  point: PropTypes.number,
};

NewsletterInput.defaultProps = {
  placeholder: '',
  width: 'auto',
  point: 10,
};

export default NewsletterInput;
