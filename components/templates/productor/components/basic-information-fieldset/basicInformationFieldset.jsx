import React from 'react';
import PropTypes from 'prop-types';
import VMasker from 'vanilla-masker';
import styled from 'styled-components';
import Input from '../../../../atoms/input/input';
import UploadAvatar from '../../../../atoms/upload-avatar/uploadAvatar';
import ListInput from '../../../../molecules/list-input/listInput';

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

const BasicInformationFieldset = ({
  handleNameChange,
  handleAboutChange,
  handleCPFChange,
  deleteTag,
  handleAvatarChange,
  handleOccupationChange,
  handleOccupationSelect,
  productorStepErrors,
  values,
  descriptionMaxLength,
  occupationOptions
}) => (
  <Fieldset>
    <Title>Informações do Produtor</Title>
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
        <InputGroup label={values.name ? 'Nome completo *' : ''} error={productorStepErrors.name}>
          <Input
            id="name"
            type="text"
            placeholder="Nome completo *"
            value={values.name}
            onChange={handleNameChange}
          />
        </InputGroup>
        <InputGroup
          label={values.occupations.length ? 'Área de Atuação *' : ''}
          error={productorStepErrors.occupations}>
          {console.log(occupationOptions)}
          <ListInput
            // selected={values.occupations}
            id="occupation"
            placeholder={values.occupations.length ? '' : 'Área de Atuação *'}
            options={occupationOptions}
            onSelect={handleOccupationSelect}
            onChange={handleOccupationChange}>
            {/* <AutocompleteInput
            placeholder={values.occupations.length ? '' : 'Área de Atuação *'}
            predict={values.occupationPredict}
            value={values.occupation}
            handleChange={handleMusicalStyleChange}
            handleSelect={handleMusicalStyleSelect}
          />
          */}
          </ListInput>

          <TagList
            handleClose={deleteTag}
            data={values.occupations}
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
  occupations: PropTypes.arrayOf(PropTypes.string),
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
