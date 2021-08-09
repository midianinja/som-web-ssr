import React from 'react';
import PropTypes from 'prop-types';
import VMasker from 'vanilla-masker';
import Input from '../../../../atoms/input/input';
import InputGroup from '../../../../molecules/input-group/inputGroup';
import ListInput from '../../../../molecules/list-input/listInput';
import { Fieldset, Title, Wrapper, customNumberStyle } from './addressFieldset.style';

const AddressFieldset = ({
  values,
  eventErrors,
  handleAddressChange,
  handleDistrictChange,
  handleZipcodeChange,
  handleComplementChange,
  handleCountrySelect,
  countries,
  handleStateSelect,
  states,
  handleCityChange,
  handleNumberChange
}) => (
  <Fieldset>
    <Title>Endereço</Title>
    <Wrapper>
      <InputGroup label={values.address ? 'Rua' : ''} error={eventErrors.address}>
        <Input
          id="address"
          type="text"
          placeholder="Rua"
          value={values.address}
          onChange={handleAddressChange}
        />
      </InputGroup>
      <InputGroup
        customStyle={customNumberStyle}
        label={values.number ? 'Numero' : ''}
        error={eventErrors.number}>
        <Input
          id="number"
          type="tel"
          placeholder="Número"
          value={VMasker.toPattern(values.number, '99999')}
          onChange={handleNumberChange}
        />
      </InputGroup>
      <InputGroup label={values.district ? 'Bairro' : ''} error={eventErrors.district}>
        <Input
          id="district"
          type="text"
          placeholder="Bairro"
          value={values.district}
          onChange={handleDistrictChange}
        />
      </InputGroup>
      <InputGroup label={values.zipcode ? 'CEP' : ''} error={eventErrors.zipcode}>
        <Input
          id="zipcode"
          type="tel"
          placeholder="CEP"
          value={VMasker.toPattern(values.zipcode, '9999999999')}
          onChange={handleZipcodeChange}
        />
      </InputGroup>
      <InputGroup label={values.complement ? 'Complemento' : ''} error={eventErrors.complement}>
        <Input
          id="complement"
          type="text"
          placeholder="Complemento"
          value={values.complement}
          onChange={handleComplementChange}
        />
      </InputGroup>
      <InputGroup label={values.city ? 'Cidade' : ''} error={eventErrors.city}>
        <Input
          id="city"
          type="text"
          placeholder="Cidade"
          value={values.city}
          onChange={handleCityChange}
        />
      </InputGroup>
        <ListInput
          id="country"
          placeholder="País"
          options={countries}
          // selected={values.country}
          value={values.country}
          onSelect={handleCountrySelect}
        />
      <InputGroup label={values.country.id ? 'Estado' : ''} error={eventErrors.state}>
        <ListInput
          id="state"
          placeholder="Estado"
          value={values.state}
          selected={values.state}
          options={states}
          onSelect={handleStateSelect}
        />
      </InputGroup>
    </Wrapper>
  </Fieldset>
);

const optionShape = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

const valuesShape = {
  title: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  closingSubscribeDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  stateText: PropTypes.string.isRequired,
  countryText: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  state: PropTypes.shape(optionShape),
  country: PropTypes.shape(optionShape)
};

const errorsShape = {};
Object.keys(valuesShape).forEach((key) => {
  errorsShape[key] = '';
});

AddressFieldset.propTypes = {
  values: PropTypes.shape(valuesShape).isRequired,
  eventErrors: PropTypes.shape(errorsShape).isRequired,
  handleAddressChange: PropTypes.func.isRequired,
  handleDistrictChange: PropTypes.func.isRequired,
  handleZipcodeChange: PropTypes.func.isRequired,
  handleComplementChange: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  handleStateSelect: PropTypes.func.isRequired,
  handleCountrySelect: PropTypes.func.isRequired,
  states: PropTypes.arrayOf(PropTypes.shape(optionShape)).isRequired,
  countries: PropTypes.arrayOf(PropTypes.shape(optionShape)).isRequired
};

export default AddressFieldset;
