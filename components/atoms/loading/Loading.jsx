import React from 'react';
import {
  Icon,
} from './loading.style';

/**
 * function that render Loading react component
 * @param {object} props component props
 * @returns contains Loading Component
 */
const Loading = (loadingIcon) =>  (
  <Icon src={loadingIcon} />
);

Loading.propTypes = {
  loadingIcon: PropTypes.string,
};

Loading.defaultProps = {
  loadingIcon: '/icons/white-loading.svg',
};

export default Loading;
