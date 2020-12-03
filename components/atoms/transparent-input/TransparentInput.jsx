import PropTypes from 'prop-types';
import {
  TransparentInputStyle
} from './transparentInput.style';

/**
 * function that render TransparentInput react component
 * @param {object} props component props
 * @returns contains TransparentInput Component
 */
const TransparentInput = (props) => (
  <TransparentInputStyle {...props} />
)

TransparentInput.propTypes = {
  customStyle: PropTypes.string,
};

TransparentInput.defaultProps = {
  customStyle: '',
};

export default TransparentInput;
