import PropTypes from 'prop-types';
import { SlimButtonStyle } from './slimButton.style';

/**
 * function that render Slim Button React component
 * @param {object} props component props
 * @returns contains SlimButton Component
 */
const SlimButton = ({ size, color, customStyle, children, onClick }) => (
  <SlimButtonStyle size={size} color={color} onClick={onClick} customStyle={customStyle}>
    {children}
  </SlimButtonStyle>
);

SlimButton.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  customStyle: PropTypes.string
};

SlimButton.defualtProps = {
  size: 'medium',
  color: 'purple',
  customStyle: ''
};

export default SlimButton;
