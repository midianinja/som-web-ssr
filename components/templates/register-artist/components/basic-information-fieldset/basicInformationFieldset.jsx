import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../../atoms/input/input';
import UploadAvatar from '../../../../atoms/upload-avatar/uploadAvatar';
import TextArea from '../../../../atoms/text-area/TextArea';
import InputGroup from '../../../../molecules/input-group/inputGroup';
import TagList from '../../../../molecules/tag-list/tagList';
import AutocompleteInput from '../../../../molecules/autocomplete-input/autocompleteInput';
import {
  Fieldset,
  MainInformationWrapper,
  TextInpustWrapper,
  Title,
  musicalGenresCustomStyle,
  avatarInputGroupStyle
} from './basicInformationFieldset.style';

/**
 * This contains the Basic Informations Fildset Component
 * 
 * @returns {React.Component} React Component
 */
const BasicInformationFieldset = ({
  handleNameChange,
  handleAboutChange,
  handleIntegrants,
  deleteTag,
  handleAvatarChange,
  handleMusicalStyleChange,
  handleMusicalStyleSelect,
  productorStepErrors,
  values,
  descriptionMaxLength
}) => (
  <Fieldset>
    <Title>Informações do Artista/Banda</Title>
    <MainInformationWrapper>
      <InputGroup
        error={productorStepErrors.avatar}
        customStyle={avatarInputGroupStyle}
        info="Tamanho sugerido: 500x500px">
        <UploadAvatar
          alt="botão para subir imagem"
          title="avatar image"
          handleChange={handleAvatarChange}
          src={values.avatar.url && values.avatar.url.url ? values.avatar.url : values.avatar}
        />
      </InputGroup>
      <TextInpustWrapper>
        <InputGroup
          label={values.name ? 'Nome da banda/artista *' : ''}
          error={productorStepErrors.name}>
          <Input
            id="name"
            type="text"
            placeholder="Nome da banda/artista *"
            value={values.name}
            onChange={handleNameChange}
          />
        </InputGroup>
        <InputGroup
          label={values.integrants ? 'Integrantes (nomes sepados por vírgula)' : ''}
          error={productorStepErrors.integrants}>
          <Input
            id="integrants"
            placeholder="Integrantes (nomes sepados por vírgula)"
            type="tel"
            value={values.integrants}
            onChange={handleIntegrants}
          />
        </InputGroup>
        <InputGroup
          label={values.musicalStyles.length ? 'Estilos de música *' : ''}
          error={productorStepErrors.musicalStyles}>
          <AutocompleteInput
            placeholder={values.musicalStyles.length ? '' : 'Estilos de música *'}
            predict={values.musicalStylePredict}
            value={values.musicalStyle}
            handleChange={handleMusicalStyleChange}
            handleSelect={handleMusicalStyleSelect}
          />
          <TagList
            handleClose={deleteTag}
            data={values.musicalStyles}
            customStyle={musicalGenresCustomStyle}
          />
        </InputGroup>
      </TextInpustWrapper>
    </MainInformationWrapper>
    <InputGroup label={values.about ? 'Sobre você *' : ''} error={productorStepErrors.about}>
      <TextArea
        id="about"
        placeholder="Conte sobre você :) *"
        value={values.about}
        onChange={handleAboutChange}
        maxLength={descriptionMaxLength}
      />
    </InputGroup>
  </Fieldset>
);

const avatarShape = {
  uri: PropTypes.string
};

const valuesShape = {
  about: PropTypes.string.isRequired,
  musicalGenres: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  cnpj: PropTypes.string.isRequired,
  avatar: PropTypes.shape(avatarShape).isRequired
};

const errorsShape = {
  musicalGenres: PropTypes.string,
  name: PropTypes.string,
  about: PropTypes.string,
  cnpj: PropTypes.string,
  cpf: PropTypes.string
};

BasicInformationFieldset.propTypes = {
  handleAboutChange: PropTypes.func.isRequired,
  handleAvatarChange: PropTypes.func.isRequired,
  deleteTag: PropTypes.func.isRequired,
  descriptionMaxLength: PropTypes.number.isRequired,
  handleMusicalStyleChange: PropTypes.func.isRequired,
  handleMusicalStyleSelect: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleCPFChange: PropTypes.func.isRequired,
  values: PropTypes.shape(valuesShape).isRequired,
  productorStepErrors: PropTypes.shape(errorsShape).isRequired
};

export default BasicInformationFieldset;
