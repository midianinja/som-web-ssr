import PropTypes from 'prop-types';
import { Input, Wrapper } from './autocompleteInput.style';
import { white10, gray02 } from '../../../settings/colors';

const AutocompleteInput = ({
  value, predict, handleChange, handleSelect, placeholder,
}) => (
  <Wrapper>
    <Input
      type="search"
      customStyle="z-index: 2;"
      onChange={handleChange}
      keyn
      onKeyDown={e => (e.keyCode === 13 ? e.preventDefault() : null)}
      value={value}
      onKeyUp={e => (e.keyCode === 13 && predict ? handleSelect(predict) : null)}
    />
    <Input
      type="text"
      disabled
      placeholder={placeholder}
      value={predict}
      customStyle={`z-index: 1; background-color: ${white10}; color: ${gray02};`}
    />
  </Wrapper>
);

AutocompleteInput.defaultProps = {
  placeholder: '',
};

AutocompleteInput.propTypes = {
  value: PropTypes.string.isRequired,
  predict: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default AutocompleteInput;
