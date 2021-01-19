import PropTypes from 'prop-types';
import { InputStyle } from './input.style';

/**
 * function that render Input react component
 * 
 * @param {object} props component props
 * @returns contains Input Component
 */
const Input = (props) => (
  <InputStyle {...props}/>
)

Input.propTypes = {
  customStyle: PropTypes.string,
};

Input.defaultProps = {
  customStyle: '',
};

export default Input;
