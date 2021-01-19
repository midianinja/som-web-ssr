import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from '../../../../molecules/input-group/inputGroup';
import UploadAvatar from '../../../../atoms/upload-avatar/uploadAvatar';
import {
  Fieldset, Title, Span, avatarCustomStyle,
} from './avatarFieldset.style';

const AvatarFieldset = ({ values, onChange, eventErrors }) => {
  return (
    <Fieldset>
      <Title>
        Avatar&nbsp;
        <Span>Tamanho sugerido: 500x500px</Span>
      </Title>
      <InputGroup error={eventErrors.avatar}>
        <UploadAvatar
          id="avatar-uploader"
          alt="botão para subir imagem"
          title="avatar image"
          handleChange={onChange}
          customStyle={avatarCustomStyle}
          src={values.avatar.url && values.avatar.url.url ? values.avatar.url : values.avatar}
        />
      </InputGroup>
    </Fieldset>
  );
}

const valuesShape = {
  avatar: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.object.isRequired,
  ]),
};

const errorsShape = {};
Object.keys(valuesShape).forEach((key) => {
  errorsShape[key] = '';
});

AvatarFieldset.propTypes = {
  values: PropTypes.shape(valuesShape).isRequired,
  onChange: PropTypes.func.isRequired,
  eventErrors: PropTypes.shape(errorsShape).isRequired,
};

export default AvatarFieldset;
