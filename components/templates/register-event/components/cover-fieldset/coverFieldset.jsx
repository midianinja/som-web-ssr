import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from '../../../../molecules/input-group/inputGroup';
import UploadAvatar from '../../../../atoms/upload-avatar/uploadAvatar';
import { Fieldset, Title, Span, avatarCustomStyle } from './coverFieldset.style';

const CoverFieldset = ({ values, onChange, eventErrors }) => (
  <Fieldset>
    <Title>
      Foto de capa&nbsp;
      <Span>Tamanho sugerido: 1440x345px</Span>
    </Title>
    <InputGroup error={eventErrors.cover}>
      <UploadAvatar
        id="cover-uploader"
        alt="botão para subir imagem"
        title="Foto de capa da oportunidade"
        handleChange={onChange}
        customStyle={avatarCustomStyle}
        src={values.cover.url && values.cover.url.url ? values.cover.url : values.cover}
      />
    </InputGroup>
  </Fieldset>
);

const valuesShape = {
  cover: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.object.isRequired])
};

const errorsShape = {};
Object.keys(valuesShape).forEach((key) => {
  errorsShape[key] = '';
});

CoverFieldset.propTypes = {
  values: PropTypes.shape(valuesShape).isRequired,
  onChange: PropTypes.func.isRequired,
  eventErrors: PropTypes.shape(errorsShape).isRequired
};

export default CoverFieldset;
