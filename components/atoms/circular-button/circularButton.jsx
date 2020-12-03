import PropTypes from 'prop-types';
import { CircularButtonStyle } from './circularButton.style';

/**
 * function that render CircularButtonAtom react component
 * 
 * @param {object} props component props
 * @returns contains CircularButtonAtom Component
 */
const CircularButtonAtom = ({
  size, color, customStyle,
}) => (
  <CircularButtonStyle
    size={size}
    color={color}
    customStyle={customStyle}
  />
)

CircularButtonAtom.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  customStyle: PropTypes.string,
};

CircularButtonAtom.defualtProps = {
  color: 'purple',
  customStyle: '',
};

export default CircularButtonAtom;
