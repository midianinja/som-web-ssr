import PropTypes from 'prop-types';
import { SlimButtonStyle } from './slimButton.style';

/**
 * function that render react component
 * @param {object} props component props
 * @returns contains SlimButton Component
 */
const SlimButton = ({
  size, color, customStyle,
}) => (
  <SlimButtonStyle
    size={size}
    color={color}
    customStyle={customStyle}
  />
);

SlimButton.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  customStyle: PropTypes.string,
};

SlimButton.defualtProps = {
  size: 'medium',
  color: 'purple',
  customStyle: '',
};

export default SlimButton;
