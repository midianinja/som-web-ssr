import React from 'react';
import PropTypes from 'prop-types';
import VMasker from 'vanilla-masker';
import Input from '../../../../atoms/input/input';
import InputIcon from '../../../../atoms/input-icon/InputIcon';
import InputGroup from '../../../../molecules/input-group/inputGroup';
import ListInput from '../../../../molecules/list-input/listInput';
import { Fieldset, Title, LocationWrapper } from './locationFieldset.style';

const LocationFieldset = ({
  country,
  countries,
  state,
  states,
  productorStepErrors,
  handleCountrySelect,
  handleStateSelect,
  handleZipcodeChange,
  handleCityChange,
  handleAddressChange,
  handleNumberChange,
  values
}) => (
  <Fieldset>
    <Title>Residência</Title>
    <LocationWrapper>
      <InputGroup
        customStyle={`
          grid-column-start: 1;
          grid-column-end: 2;
        `}
        label="CEP *"
        error={productorStepErrors.zipcode}>
        <InputIcon
          icon="location"
          id="zipcode"
          placeholder="CEP *"
          value={VMasker.toPattern(values.zipcode, '99999999')}
          onChange={handleZipcodeChange}
        />
        <small class="JhijG">*somente números</small>
      </InputGroup>

      <InputGroup
        customStyle={`
          grid-column-start: 1;
          grid-column-end: 3;
        `}
        label="Endereço *"
        error={productorStepErrors.address}>
        <Input
          id="address"
          placeholder="Endereço *"
          value={values.address}
          onChange={handleAddressChange}
        />
      </InputGroup>
      <InputGroup
        customStyle={`
          grid-column-start: 3;
          grid-column-end: 4;
        `}
        label="Número *"
        error={productorStepErrors.number}>
        <Input
          id="number"
          placeholder="Número *"
          value={values.number}
          onChange={handleNumberChange}
        />
      </InputGroup>
      <InputGroup label="País *" error={productorStepErrors.country}>
        <ListInput
          id="country"
          placeholder="País *"
          options={countries}
          selected={values.country}
          value={country}
          onSelect={handleCountrySelect}
        />
      </InputGroup>
      <InputGroup label="Estado *" error={productorStepErrors.state}>
        <ListInput
          id="state"
          placeholder="Estado *"
          value={values.state}
          selected={state}
          options={states}
          onSelect={handleStateSelect}
        />
      </InputGroup>
      <InputGroup label="Cidade *" error={productorStepErrors.city}>
        <Input id="city" placeholder="Cidade *" value={values.city} onChange={handleCityChange} />
      </InputGroup>
    </LocationWrapper>
  </Fieldset>
);

const valuesShape = {};

const errorsShape = {
  musicalGenres: PropTypes.string,
  name: PropTypes.string,
  about: PropTypes.string,
  cnpj: PropTypes.string,
  cpf: PropTypes.string
};

const optionShape = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

LocationFieldset.propTypes = {
  handleCountrySelect: PropTypes.func.isRequired,
  handleStateSelect: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired,
  handleZipcodeChange: PropTypes.func.isRequired,
  handleAddressChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.shape(optionShape)),
  country: PropTypes.shape(optionShape),
  states: PropTypes.arrayOf(PropTypes.shape(optionShape)),
  state: PropTypes.shape(optionShape),
  values: PropTypes.shape(valuesShape).isRequired,
  productorStepErrors: PropTypes.shape(errorsShape).isRequired
};

LocationFieldset.defaultProps = {
  country: {},
  state: {},
  countries: [],
  states: []
};

export default LocationFieldset;
