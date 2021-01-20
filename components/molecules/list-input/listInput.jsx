import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/input/input';
import {
  SelectWrapper, Image, Option, Options, Label,
} from './listInput.style';

/**
 * function that render options on props
 * @param {array} options it is the options that to be render
 * @param {function} onClick it is the function that select the option
 * @returns contains Option Component array
 */
const renderOptions = (options, onClick) => options.map((value) => {
  const { id, label, image } = value;
  return (
    <Option
      key={id}
      id={id}
      onClick={() => onClick(value)}
    >
      <Image src={image} visible={!!image} />
      {label}
    </Option>
  );
});

const normalizeString = (text) => {
  let str = text;
  str = str.replace(/[ÀÁÂÃÄÅ]/g, 'A');
  str = str.replace(/[àáâãäå]/g, 'a');
  str = str.replace(/[ÈÉÊË]/g, 'E');

  return str.replace(/[^a-zA-Z ]/g, '').toUpperCase();
};

const handleChange = (
  event, setValue, options, setList,
) => {
  const { value } = event.target;

  const list = options.filter((op) => {
    const label = normalizeString(op.label);
    const myValue = normalizeString(value);
    return label.indexOf(myValue) >= 0;
  });

  setValue(value);
  setList(list);
};

function ListInput(props) {
  const {
    placeholder, options, selected, id,
    tabIndex, onSelect,
  } = props;
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  const [list, setList] = useState(options);
  const wrapperRef = useRef(null);
  useEffect(() => {
    setList(options);
  }, [options]);
  const select = (data) => {
    setValue('');
    onSelect(data);
    setFocus(false);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setFocus(false);
    }
  };
  return (
    <SelectWrapper focus={focus && list.length} tabIndex={tabIndex} ref={wrapperRef}>
      <Label>
        <Input
          id={id}
          autoComplete="off"
          onFocus={() => setFocus(true)}
          customStyle="background-color: transparent;"
          placeholder={selected.label || placeholder}
          onBlur={e => e.preventDefault()}
          value={value || ''}
          autoComplete="new-password"
          onChange={e => handleChange(e, setValue, options, setList)}
        />
      </Label>
      <Options focus={focus && list.length}>{renderOptions(list, select)}</Options>
    </SelectWrapper>
  );
}

const optionShape = {
  image: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

ListInput.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape(optionShape)),
  selected: PropTypes.shape(optionShape),
  onSelect: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
};

ListInput.defaultProps = {
  placeholder: 'Selecione',
  id: `${(Math.random() * 999)}`,
  options: [],
  selected: {},
  tabIndex: 1,
};

export default ListInput;
