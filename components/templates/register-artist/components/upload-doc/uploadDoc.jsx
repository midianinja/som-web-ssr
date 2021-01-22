import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Uploader, Icon, Input,
} from './uploadDoc.style';

/**
 * function that loading image before render
 * @void
 * @param {string} src image source to be loading
 */
function load(src, callback) {
  const image = new Image();

  image.onload = () => {
    callback(src);
  };

  image.src = src;
}

/**
 * function that render react component
 * @param {object} props component props
 * @returns contains UploadDoc Component
 */
function UploadDoc({
  src, label, handleChange,
  customStyle, id, accept,alt
}) {
  const [loaddedSrc, setLoaddedSrc] = useState(null);

  useEffect(() => {
    load(src.url, setLoaddedSrc);
  });

  return (
    <Fragment>
      <Uploader
        customStyle={customStyle}
        onChange={handleChange}
        htmlFor={id}
      >
        {label}
        <Icon alt={alt} src="/icons/cloud-upload.svg" />
      </Uploader>
      <Input id={id} onChange={handleChange} type="file"   accept={accept || "image/png, image/jpeg, application/pdf"} />
    </Fragment>
  );
}

UploadDoc.propTypes = {
  id: PropTypes.string,
  alt: PropTypes.string,
  label: PropTypes.string,
  src: PropTypes.string,
  customStyle: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

UploadDoc.defaultProps = {
  id: '',
  alt: '',
  label: '',
  src: '',
  customStyle: '',
};

export default UploadDoc;
