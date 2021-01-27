import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './loading.style';

/**
 * function that render Loading react component
 * @param {object} props component props
 * @returns contains Loading Component
 */
const Loading = ({ loadingIcon }) => <Icon src={loadingIcon} alt="" />;

Loading.propTypes = {
  loadingIcon: PropTypes.string
};

Loading.defaultProps = {
  loadingIcon: '/icons/white-loading.svg'
};

export default Loading;
