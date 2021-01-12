import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper, PreLoaderImage,
} from './avatar.style';

/**
 * function that loading image before render
 * @void
 * @param {string} src image source to be loading
 */
const load = (src, callback) => {
  const image = new Image();

  image.onload = () => {
    callback(src);
  };

  image.src = src;
}

/**
 * function that render Avatar react component
 * @param {object} props component props
 * @returns contains Avatar Component
 */
function Avatar({
  src, alt, title, customStyle,
}) {
  const [loaddedSrc, setLoaddedSrc] = useState(null);

  useEffect(() => {
    load(src, setLoaddedSrc);
  }, []);

  return (
    <Wrapper customStyle={customStyle}>
      <PreLoaderImage>
        <Image
          src={loaddedSrc}
          alt={alt}
          width={120}
          height={120}
          title={title}
        />
      </PreLoaderImage>
    </Wrapper>
  );
}

Avatar.propTypes = {
  alt: PropTypes.string,
  customStyle: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
};

Avatar.defaultProps = {
  alt: '',
  customStyle: '',
  title: '',
  src: '',
};

export default Avatar;
