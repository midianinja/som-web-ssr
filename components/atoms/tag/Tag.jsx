import React from 'react';
import PropTypes from 'prop-types';
import {
  TagWrapper, CloseIcon,
} from './tag.style';

/**
 * function that render react component
 * @param {object} props component props
 * @returns contains Tag Component
 */
const Tag = ({
  color, id, handleClose,
  text, customStyle, cliseIconAlt, closeIconSrc,
}) => (
  <TagWrapper handleClose={!!handleClose} customStyle={customStyle} color={color}>
    {
      handleClose
        ? (
          <CloseIcon
            color={color}
            src={closeIconSrc}
            alt={cliseIconAlt}
            onClick={() => handleClose(id)}
          />
        ) : null
    }
    {text}
  </TagWrapper>
);

Tag.propTypes = {
  color: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  id: PropTypes.string,
  text: PropTypes.string,
  customStyle: PropTypes.string,
  cliseIconAlt: PropTypes.string,
  closeIconSrc: PropTypes.string,
};

Tag.defaultProps = {
  color: 'green',
  id: '',
  text: 'Label',
  customStyle: '',
  cliseIconAlt: 'botão de cancelar',
  closeIconSrc: '/icons/cancel_outlined.svg',
};

export default Tag;
