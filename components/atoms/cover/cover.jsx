import React from 'react';
import PropTypes from 'prop-types';
import { CoverStyle } from './cover.style';

/**
 * function that render CoverAtom react component
 *
 * @param {object} props component props
 * @returns contains CoverAtom Component
 */
const CoverAtom = ({ cover, customStyle, children }) => (
  <CoverStyle cover={cover} customStyle={customStyle}>
    {children}
  </CoverStyle>
);

CoverAtom.propTypes = {
  cover: PropTypes.string,
  customStyle: PropTypes.string,
  children: PropTypes.any
};

CoverAtom.defualtProps = {
  cover: '',
  customStyle: ''
};

export default CoverAtom;
