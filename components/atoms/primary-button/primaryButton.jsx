// import PropTypes from 'prop-types';
import {
  PrimaryButtonStyle,
} from './primaryButton.style';

/**
 * function that render react component
 * @param {object} props component props
 * @returns contains PrimaryButton Component
 */
const PrimaryButton = (props) => (
  <PrimaryButtonStyle {...props} />
);

export default PrimaryButton;
