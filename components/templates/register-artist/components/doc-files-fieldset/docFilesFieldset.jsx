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
  ButtonIcon,
  Content,
} from './docFilesFieldset.style';

const getFileName = (data) => {
  if (data) {
    if (data.file) return data.file.name;
    if (data.url) return data.url;
  }
  return 'Ver Exemplo';
}

/**
 * This contains the Document Files Fildset Component
 * 
 * @returns {React.Component} React Component
 */
const DocFilesFieldset = ({
  handleRiderChange, handleMapChange, handleReleaseChange,
  tecRider, tecMap, tecRelease, linkPdf
}) => (
  <Fieldset>
    <Content>

      <Title>Arquivos técnicos</Title>
      <FirstLegend>Documentos básicos para inscrição em qualquer evento do SOM</FirstLegend>
      <SecondLegend>
        Formatos de arquivo suportados: .pdf, .jpg, e .png, com no máximo 10 mb.
      </SecondLegend>
      <CardsWrapper>
        <Card>
          <CardTitle>Mapa de palco</CardTitle>
          <CardDescription>
            Com esse desenho fica mais fácil saber a posição de todos equipamentos no palco
          </CardDescription>
          <Actions>
            {/* <SeeExempleButton
              onClick={() => window.open(tecMap ? tecMap.url : '')}
              name={tecMap}
            >
              {getFileName(tecMap)}
            </SeeExempleButton> */}
            <SeeExempleButton
              onClick={() => window.open('/files/som-site-docsreferencia-mapadepalco.pdf')}>
              Ver Exemplo
            </SeeExempleButton>
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
            <SeeExempleButton
              onClick={() => window.open('/files/som-site-docsreferencia-ridertecnico.pdf')}>
              Ver Exemplo
            </SeeExempleButton>
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
            <SeeExempleButton
              onClick={() => window.open('/files/som-site-docsreferencia-presskit.pdf')}>
              Ver Exemplo
            </SeeExempleButton>
            <UploadDoc
              id="release-doc-uploader"
              handleChange={(data) => handleReleaseChange(data.target.files[0])}
              label="Subir Release"
            />
          </Actions>
        </Card>
      </CardsWrapper>
    </Content>
  </Fieldset>
);

const valuesShape = {
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired
};

DocFilesFieldset.propTypes = {
  handleRiderChange: PropTypes.func.isRequired,
  handleMapChange: PropTypes.func.isRequired,
  handleReleaseChange: PropTypes.func.isRequired,

  stepErrors: PropTypes.shape(valuesShape).isRequired,
  values: PropTypes.shape(valuesShape).isRequired
};

export default DocFilesFieldset;
