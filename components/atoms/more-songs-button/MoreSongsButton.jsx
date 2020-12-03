import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from './moreSongsButton.style';

/**
 * function that render MoreASongButton react component
 * @param {object} props component props
 * @returns contains MoreASongButton Component
 */
const MoreASongButton = ({ onClick, label }) => {
  return <Button onClick={onClick}>{label}</Button>;
}

MoreASongButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
};
MoreASongButton.defaultProps = {
  label: 'Carregar mais músicas +',
};

export default MoreASongButton;
