import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SelectWrapper, Image, Arrow,
  Option, Options, Label,
} from './select.style';

/**
 * function that render options on props
 * @param {array} options it is the options that to be render
 * @param {function} onClick it is the function that select the option
 * @returns contains Option Component array
 */
const renderOptions = (options, onClick) => options.map(({ id, image, label }) => (
  <Option
    key={id}
    id={id}
    onClick={() => onClick({ id, label, image })}
  >
    <Image src={image} visible={!!image} />
    {label}
  </Option>
));

/**
 * function that render react component
 * @param {object} props component props
 * @returns contains Select Component
 */
const Select = (props) => {
  const [focus, setFocus] = useState(false);
  const {
    placeholder, options, selected,
    tabIndex, onSelect,
  } = props;
  const select = (data) => {
    onSelect(data);
    setFocus(false);
  };
  return (
    <SelectWrapper focus={focus} onBlur={() => setFocus(false)} tabIndex={tabIndex}>
      <Label onClick={() => setFocus(!focus)}>
        {selected.label || placeholder}
        <Arrow src={!focus ? '/icons/down-arrow.svg' : '/icons/up-arrow.svg'} alt={focus ? '' : ''} />
      </Label>
      <Options focus={focus}>{renderOptions(options, select)}</Options>
    </SelectWrapper>
  );
}

const optionShape = {
  image: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

Select.propTypes = {
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape(optionShape)),
  selected: PropTypes.shape(optionShape),
  onSelect: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
};

Select.defaultProps = {
  placeholder: 'Selecione',
  options: [],
  selected: {},
  tabIndex: 1,
};

export default Select;
