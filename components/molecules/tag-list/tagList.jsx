import React from 'react';
import PropTypes from 'prop-types';
import Tag from '../../atoms/tag/Tag';
import { List } from './tagList.style';

/**
 * function that get items
 * @param {array} data it is object array contains tags informataion
 * @returns React Component array
 */
const getItems = (data, handleClose) => data.map(
    ({ color, text, id }) => (
      <Tag text={text} id={id} color={color} handleClose={handleClose} />
    ),
  );

/**
 * function that render TagList
 * @param {object} props component props
 * @returns React Component
 */
const TagList = ({ data, handleClose, customStyle }) => (
  <List customStyle={customStyle}>{getItems(data, handleClose)}</List>;
);

const tagShape = {
  text: PropTypes.string.isRequried,
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
};

TagList.propTypes = {
  customStyle: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape(tagShape)),
  handleClose: PropTypes.func.isRequired,
};

TagList.defaultProps = {
  customStyle: '',
  data: [],
};

export default TagList;
