import React from 'react';
import PropTypes from 'prop-types';

import { Input, Icon, NewsletterInputWrapper, inputStyle, LoadIcon } from './newsletterInput.style';

/**
 * function that render react component
 * @param {object} props component props
 * @returns contains NewsletterInput Component
 */
function NewsletterInput({ onChange, placeholder, value, width, point, onSubmit, loading }) {
  return (
    <NewsletterInputWrapper width={width} point={point}>
      <Input customStyle={inputStyle} onChange={onChange} placeholder={placeholder} value={value} />
      {loading ? (
        <LoadIcon src="/icons/dark-loading.svg" alt="Carregando" />
      ) : (
        <Icon src="/icons/send.svg" alt="Envie" onClick={() => onSubmit()} />
      )}
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
  loading: PropTypes.bool
};

NewsletterInput.defaultProps = {
  placeholder: '',
  width: 'auto',
  point: 10,
  loading: false
};

export default NewsletterInput;
