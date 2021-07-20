import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../../../atoms/check-box/checkBox';
import InputGroup from '../../../../molecules/input-group/inputGroup';
import { Fieldset, CheckboxWrapper, Title } from './who-subscribe.style';

const renderPersonas = ({ values, setIsToArtist, setIsToProductor }) =>
  [
    {
      text: 'Artista',
      handle: () => setIsToArtist(!values.isToArtist),
      checked: values.isToArtist
    },
    {
      text: 'Produtor',
      handle: () => setIsToProductor(!values.isToProductor),
      checked: values.isToProductor
    }
  ].map(({ text, checked, handle }) => (
    <CheckboxWrapper key={text}>
      <Checkbox
        multiple
        customStyle={`
          border-radius: 4px;
        `}
        checked={checked}
        text={text}
        onChange={handle}
      />
    </CheckboxWrapper>
  ));

const WhoSubscribe = ({ values, setIsToProductor, setIsToArtist }) => (
  <Fieldset>
    <Title>Quem pode se inscrever</Title>
    <InputGroup label="" error="">
      {renderPersonas({
        values,
        setIsToProductor,
        setIsToArtist
      })}
    </InputGroup>
  </Fieldset>
);

const valuesShape = {
  isToArtist: PropTypes.bool.isRequired,
  isToProductor: PropTypes.bool.isRequired
};

const errorsShape = {};
Object.keys(valuesShape).forEach((key) => {
  errorsShape[key] = '';
});

WhoSubscribe.propTypes = {
  values: PropTypes.shape(valuesShape).isRequired,
  setIsToProductor: PropTypes.func.isRequired,
  setIsToArtist: PropTypes.func.isRequired
};

export default WhoSubscribe;
