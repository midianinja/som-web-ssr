import PropTypes from 'prop-types';
import { InputStyle } from './input.style';

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
