import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../../atoms/input/input';
import UploadDoc from '../upload-doc/uploadDoc';
import {
  Fieldset,
  Title,
  FirstLegend,
  inputGroupStyle,
  SecondLegend,
  CardsWrapper,
  Card,
  CardTitle,
  CardDescription,
  SeeExempleButton,
  Actions,
  UploadButton,
  ButtonIcon
} from './musicFieldset.style';

const MusicFieldset = ({ musics }) => {
  return (
    <Fieldset>
      <Title>Músicas</Title>
      <CardsWrapper>
        <Card>
          <CardTitle>Mapa de palco</CardTitle>
          <CardDescription>
            Com esse desenho fica mais fácil saber a posição de todos equipamentos no palco
          </CardDescription>
          <Actions>
            <SeeExempleButton>Ver Exemplo</SeeExempleButton>
            <UploadDoc
              id="map-doc-uploader"
              handleChange={(data) => handleMapChange(data.target.files[0])}
              label="Subir Mapa"
            />
          </Actions>
        </Card>
        <Card>
          <CardTitle>Rider técnico</CardTitle>
          <CardDescription>
            Com esse desenho fica mais fácil saber a posição de todos equipamentos no palco
          </CardDescription>
          <Actions>
            <SeeExempleButton>Ver Exemplo</SeeExempleButton>
            <UploadDoc
              id="rider-doc-uploader"
              handleChange={(data) => handleRiderChange(data.target.files[0])}
              label="Subir Rider"
            />
          </Actions>
        </Card>
        <Card>
          <CardTitle>Release</CardTitle>
          <CardDescription>
            Com esse desenho fica mais fácil saber a posição de todos equipamentos no palco
          </CardDescription>
          <Actions>
            <SeeExempleButton>Ver Exemplo</SeeExempleButton>
            <UploadDoc
              id="release-doc-uploader"
              handleChange={(data) => handleReleaseChange(data.target.files[0])}
              label="Subir Release"
            />
          </Actions>
        </Card>
      </CardsWrapper>
    </Fieldset>
  );
};
const valuesShape = {
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired
};

MusicFieldset.propTypes = {
  handleRiderChange: PropTypes.func.isRequired,
  handleMapChange: PropTypes.func.isRequired,
  handleReleaseChange: PropTypes.func.isRequired,
  musics: PropTypes.array,
  stepErrors: PropTypes.shape(valuesShape).isRequired,
  values: PropTypes.shape(valuesShape).isRequired
};

MusicFieldset.defaultProps = {
  musics: PropTypes.array
};

export default MusicFieldset;