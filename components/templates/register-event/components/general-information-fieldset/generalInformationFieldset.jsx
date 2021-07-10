import React from 'react';
import PropTypes from 'prop-types';
import VMasker from 'vanilla-masker';
import Input from '../../../../atoms/input/input';
import TextArea from '../../../../atoms/text-area/TextArea';
import InputGroup from '../../../../molecules/input-group/inputGroup';
import { Fieldset, Row2Column, Title } from './generalInformationFieldset.style';

const GeneralInformationFieldset = ({
  values,
  handleTitleChange,
  handleEventDateChange,
  handleEndEventDateChange,
  handleClosingSubscribeDateChange,
  handleDescriptionChange,
  handleOpeningsNumberChange,
  eventErrors,
  descriptionMaxLength
}) => (
  <Fieldset>
    <Title>Informações gerais</Title>
    <InputGroup label={values.title ? 'Título' : ''} error={eventErrors.title}>
      <Input
        id="title"
        type="text"
        placeholder="Título"
        value={values.title}
        onChange={handleTitleChange}
      />
    </InputGroup>
    <Row2Column>
      <InputGroup
        label={values.eventDate ? 'Data da oportunidade' : ''}
        error={eventErrors.eventDate}
        info="Exemplo: 20/04/2020">
        <Input
          id="eventDate"
          type="tel"
          placeholder="Data da oportunidade"
          value={VMasker.toPattern(values.eventDate, '99/99/9999')}
          onChange={handleEventDateChange}
        />
      </InputGroup>
      <InputGroup
        label={values.endEventDate ? 'Término' : ''}
        error={eventErrors.endEventDate}
        info="Exemplo: 20/04/2020">
        <Input
          id="endEventDate"
          type="tel"
          placeholder="Término"
          value={VMasker.toPattern(values.endEventDate, '99/99/9999')}
          onChange={handleEndEventDateChange}
        />
      </InputGroup>
    </Row2Column>
    <InputGroup
      label={values.closingSubscribeDate ? 'Data do fim das inscrições' : ''}
      error={eventErrors.closingSubscribeDate}
      info="Exemplo: 20/04/2020">
      <Input
        id="closingSubscribeDate"
        type="tel"
        placeholder="Data do final das inscrições"
        value={VMasker.toPattern(values.closingSubscribeDate, '99/99/9999')}
        onChange={handleClosingSubscribeDateChange}
      />
    </InputGroup>
    <InputGroup
      label={values.openingsNumber ? 'Quantidade de vagas na oportunidade' : ''}
      error={eventErrors.openingsNumber}>
      <Input
        id="openingsNumber"
        type="tel"
        placeholder="Quantidade de vagas na oportunidade"
        value={VMasker.toPattern(values.openingsNumber, '99999')}
        onChange={handleOpeningsNumberChange}
      />
    </InputGroup>
    <InputGroup
      label={values.description ? 'Descrição da oportunidade' : ''}
      error={eventErrors.description}
      info="Informe todas as condições oferecidas."
    >
      <TextArea
        id="description"
        placeholder="Descrição da oportunidade"
        value={values.description}
        onChange={handleDescriptionChange}
        maxLength={descriptionMaxLength}
      />
    </InputGroup>
  </Fieldset>
);

const valuesShape = {
  title: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  closingSubscribeDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  openingsNumber: PropTypes.string.isRequired,
  descriptionMaxLength: PropTypes.number.isRequired
};

const errorsShape = {};
Object.keys(valuesShape).forEach((key) => {
  errorsShape[key] = '';
});

GeneralInformationFieldset.propTypes = {
  values: PropTypes.shape(valuesShape).isRequired,
  eventErrors: PropTypes.shape(errorsShape).isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleEventDateChange: PropTypes.func.isRequired,
  handleEndEventDateChange: PropTypes.func.isRequired,
  handleClosingSubscribeDateChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleOpeningsNumberChange: PropTypes.func.isRequired,
  descriptionMaxLength: PropTypes.number.isRequired
};

export default GeneralInformationFieldset;
