import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Uploader, Icon, Input, Text,
} from './uploadDoc.style';

/**
 * function that render Upload Doc component
 * @returns {React.Component} React Component
 */
function UploadDoc({
  src, label, handleChange,
  customStyle, id, accept,alt,
  icon, customLabelStyle,
}) {
  return (
    <Fragment>
      <Uploader
        customStyle={customStyle}
        onChange={handleChange}
        htmlFor={id}
      >
        <Text customStyle={customLabelStyle}>
          {label}
        </Text>
        <Icon alt={alt} src={icon || '/icons/cloud-upload.svg'} />
      </Uploader>
      <Input
        id={id}
        onChange={handleChange}
        type="file"
        accept={accept || 'image/png, image/jpeg, application/pdf'}
      />
    </Fragment>
  );
}

UploadDoc.propTypes = {
  id: PropTypes.string,
  alt: PropTypes.string,
  label: PropTypes.string,
  src: PropTypes.string,
  customStyle: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

UploadDoc.defaultProps = {
  id: '',
  alt: '',
  label: '',
  src: '',
  customStyle: ''
};

export default UploadDoc;
