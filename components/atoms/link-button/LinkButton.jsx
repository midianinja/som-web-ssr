import PropTypes from 'prop-types';
import {
  LinkButtonStyle
} from './linkButton.style';

/**
 * function that render LinkButton react component
 * @param {object} props component props
 * @returns contains LinkButton Component
 */
const LinkButton = (props) => (
  <LinkButtonStyle {...props} />
);

LinkButton.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  customStyle: PropTypes.string,
};

LinkButton.defaultProps = {
  size: 'medium',
  color: 'purple',
  customStyle: '',
};

export default LinkButton;
