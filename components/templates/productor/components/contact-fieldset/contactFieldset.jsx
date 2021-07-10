import React from 'react';
import PropTypes from 'prop-types';
import VMasker from 'vanilla-masker';
import Input from '../../../../atoms/input/input';
import InputGroup from '../../../../molecules/input-group/inputGroup';
import { Fieldset, Title, Row, inputGroup50CustomStyle } from './contactFieldset.style';

const ContactFieldset = ({
  handleMainPhoneChange,
  handleSecondaryPhoneChange,
  handleWhatsappChange,
  handleTelegramChange,
  handleContactEmailChange,
  productorStepErrors,
  values
}) => (
  <Fieldset>
    <Title>Informações de contato</Title>
    <Row>
      <InputGroup
        label={values.mainPhone ? 'Telefone príncipal' : ''}
        error={productorStepErrors.mainPhone}
        customStyle={inputGroup50CustomStyle}>
        <Input
          id="mainPhone"
          type="text"
          placeholder="Telefone príncipal"
          value={VMasker.toPattern(values.mainPhone, '(99) 99999-9999')}
          onChange={handleMainPhoneChange}
        />
      </InputGroup>
      <InputGroup
        label={values.secondaryPhone ? 'Telefone secundário' : ''}
        error={productorStepErrors.secondaryPhone}
        customStyle={inputGroup50CustomStyle}>
        <Input
          id="secondaryPhone"
          placeholder="Telefone secundário"
          type="tel"
          value={VMasker.toPattern(values.secondaryPhone, '(99) 99999-9999')}
          onChange={handleSecondaryPhoneChange}
        />
      </InputGroup>
    </Row>
    <Row>
      <InputGroup
        label={values.whatsapp ? 'Whatsapp' : ''}
        error={productorStepErrors.whatsapp}
        customStyle={inputGroup50CustomStyle}>
        <Input
          id="whatsapp"
          placeholder="Whatsapp"
          value={VMasker.toPattern(values.whatsapp, '(99) 99999-9999')}
          type="tel"
          onChange={handleWhatsappChange}
        />
      </InputGroup>
      <InputGroup
        label={values.telegram ? 'Telegram' : ''}
        error={productorStepErrors.telegram}
        customStyle={inputGroup50CustomStyle}>
        <Input
          id="telegram"
          placeholder="Telegram"
          value={values.telegram}
          type="text"
          onChange={handleTelegramChange}
        />
      </InputGroup>
    </Row>
    <Row>
      <InputGroup
        label={values.contactEmail ? 'Email de contato *' : ''}
        error={productorStepErrors.contactEmail}
        customStyle={inputGroup50CustomStyle}>
        <Input
          id="contactEmail"
          placeholder="Email de contato *"
          value={values.contactEmail}
          type="text"
          onChange={handleContactEmailChange}
        />
      </InputGroup>
    </Row>
  </Fieldset>
);

const valuesShape = {
  about: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  cnpj: PropTypes.string.isRequired
};

const errorsShape = {
  musicalGenres: PropTypes.string,
  name: PropTypes.string,
  about: PropTypes.string,
  cnpj: PropTypes.string,
  cpf: PropTypes.string
};

ContactFieldset.propTypes = {
  handleMainPhoneChange: PropTypes.func.isRequired,
  handleSecondaryPhoneChange: PropTypes.func.isRequired,
  handleWhatsappChange: PropTypes.func.isRequired,
  handleTelegramChange: PropTypes.func.isRequired,
  handleContactEmailChange: PropTypes.func.isRequired,
  values: PropTypes.shape(valuesShape).isRequired,
  productorStepErrors: PropTypes.shape(errorsShape).isRequired
};

export default ContactFieldset;
