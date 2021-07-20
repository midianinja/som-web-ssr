import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../../../atoms/check-box/checkBox';
import InputGroup from '../../../../molecules/input-group/inputGroup';
import { Fieldset, CheckboxWrapper, Title } from './event-type.style';
import Input from '../../../../atoms/input/input';

const renderTypes = ({ values, handleSelectEventType }) =>
  [
    {
      text: 'Evento físico',
      handle: () => handleSelectEventType('PHYSICAL'),
      checked: values.eventTypes.find((id) => id === 'PHYSICAL')
    },
    {
      text: 'Evento online',
      handle: () => handleSelectEventType('ONLINE'),
      checked: values.eventTypes.find((id) => id === 'ONLINE')
    }
    // {
    //   text: 'Ao vivo no S.O.M',
    //   handle: () => handleSelectEventType('SOM'),
    //   checked: values.eventTypes.find((id) => id === 'SOM')
    // }
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

const EventTypes = ({ values, handleSelectEventType, handleChangeSrc }) => (
  <Fieldset>
    <Title>Tipo de evento</Title>
    <InputGroup label="" error="">
      {renderTypes({
        values,
        handleSelectEventType
      })}
    </InputGroup>
    {values.eventTypes.find((id) => id === 'ONLINE') ? (
      <InputGroup label="" error="">
        <Input placeholder="Stream URL" value={values.streamUrl} onChange={handleChangeSrc} />
      </InputGroup>
    ) : null}
  </Fieldset>
);

const valuesShape = {
  eventTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  streamUrl: PropTypes.string.isRequired
};

const errorsShape = {};
Object.keys(valuesShape).forEach((key) => {
  errorsShape[key] = '';
});

EventTypes.propTypes = {
  values: PropTypes.shape(valuesShape).isRequired,
  handleChangeSrc: PropTypes.func.isRequired,
  handleSelectEventType: PropTypes.func.isRequired
};

export default EventTypes;
