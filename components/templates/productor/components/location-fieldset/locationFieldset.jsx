import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../../atoms/input/input';
import InputGroup from '../../../../molecules/input-group/InputGroup';
import ListInput from '../../../../molecules/list-input/ListInput';
import {
  Fieldset, Title, inputGroup30Style, LocationWrapper,
} from './locationFieldset.style';

const LocationFieldset = ({
  country, countries, state, states,
  productorStepErrors, handleCountrySelect, handleStateSelect, handleCityChange,
  values,
}) => (
  <Fieldset>
    <Title>Residência</Title>
    <LocationWrapper>
      <InputGroup
        customStyle={inputGroup30Style}
        label={country.id ? 'País' : ''}
        error={productorStepErrors.country}
      >
        <ListInput
          id="country"
          placeholder="País"
          options={countries}
          selected={values.country}
          value={country}
          onSelect={handleCountrySelect}
        />
      </InputGroup>
      <InputGroup
        customStyle={inputGroup30Style}
        label={state.id ? 'Estado' : ''}
        error={productorStepErrors.state}
      >
        <ListInput
          id="state"
          placeholder="Estado"
          value={values.state}
          selected={state}
          options={states}
          onSelect={handleStateSelect}
        />
      </InputGroup>
      <InputGroup
        customStyle={inputGroup30Style}
        label={values.city ? 'Cidade' : ''}
        error={productorStepErrors.city}
      >
        <Input
          id="city"
          placeholder="Cidade"
          value={values.city}
          onChange={handleCityChange}
        />
      </InputGroup>
    </LocationWrapper>
  </Fieldset>
);

const valuesShape = {
  about: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  cnpj: PropTypes.string.isRequired,
};

const errorsShape = {
  musicalGenres: PropTypes.string,
  name: PropTypes.string,
  about: PropTypes.string,
  cnpj: PropTypes.string,
  cpf: PropTypes.string,
};

const optionShape = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

LocationFieldset.propTypes = {
  handleCountrySelect: PropTypes.func.isRequired,
  handleStateSelect: PropTypes.func.isRequired,
  handleCityChange: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.shape(optionShape)),
  country: PropTypes.shape(optionShape),
  states: PropTypes.arrayOf(PropTypes.shape(optionShape)),
  state: PropTypes.shape(optionShape),
  values: PropTypes.shape(valuesShape).isRequired,
  productorStepErrors: PropTypes.shape(errorsShape).isRequired,
};

LocationFieldset.defaultProps = {
  country: {},
  state: {},
  countries: [],
  states: [],
};

export default LocationFieldset;
