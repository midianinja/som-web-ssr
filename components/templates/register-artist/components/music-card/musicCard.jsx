import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Title, uploaderGroupLabelCustomStyle, uploaderGroupCustomStyle,
  Wrapper, Icon, Header, uploaderCustomStyle, uploaderLabelCustomStyle
} from './musicCard.style';
import Uploader from '../upload-doc/uploadDoc';
import { black, red, theBestColor, white } from '../../../../../settings/colors';
import InputGroup from '../../../../molecules/input-group/inputGroup';
import Input from '../../../../atoms/input/input';
import Store from '../../../../../store/Store';

/**
 * Function that receive a file and return a blob
 * 
 * @param {File} file
 * 
 * @returns {Blob} Blob
 */
export const makeBlob = (file) => {
  return new Blob([file], {type : file.type});
};

/**
 * Function that convert a file to base 64
 * 
 * @param {File} file
 * 
 * @returns {Base64} String File
 */
const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
});

/**
 * Function that make the file upload and set the file in the state
 * 
 * @param {String} name
 * @param {Object} file.file
 * @param {Object} state
 * @param {Function} setFile
 * @param {Function} setProgress
 * @param {Boolean} deleted
 * 
 * @returns Void
 */
const setNewMusic = async (name, file, state, setFile, setProgress, deleted) => {
  if (deleted) return setFile({ ...file, deleted });
  console.log('🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 SUBIU ');
  const music = await axios.post(`${process.env.STORAGE_API_URI}/song/upload`, {
    file: await toBase64(file.file),
    id: state.auth.ida,
    fileName: name,
  }, { onUploadProgress: (data) => setProgress({ loaded: data.loaded, total: data.total }) });
  setFile({
    blob: makeBlob(file.file),
    blob_url: URL.createObjectURL(makeBlob(file.file)),
    file: file.file,
    new: true,
    url: music.data.data.link,
    name: name || file.file.name,
    deleted,
  });
};

/**
 * Function that verify the file
 * 
 * @param {Object} file.file
 * @param {Object} music
 * 
 * @returns {Boolean}
 */
const verify = (file, music) => {
  if (!file) return true;
  if (!file.file) return true;
  if (file.deleted) return true;
  if (file && music) {
    if (file.blob_url === music.blob_url) return true;
  }
}

/**
 * This contains the Music Card Page Component
 * @returns {React.Component} React Component
 */
const MusicCard = ({
  music, id, handleChange, deleteSong,
}) => {
  const [name, setName] = useState('');
  const [file, setFile] = useState({});
  const [progress, setProgress] = useState(null);
  const { state } = useContext(Store);
  if (music && music.deleted) return null;
  useEffect(() => {
    const isDeleted = music && (file.blob_url !== music.blob_url);
    if (verify(file, music, deleteSong)) return;
    else if (!file.blob) {
      if (!name) setName(file.file.name.replace(/.mp3/, ''));
      setNewMusic(name, file, state, setFile, setProgress, isDeleted);
    } else if (file.url) {
      handleChange(file)
    }
  }, [file]);
  useEffect(() => {
    if (music) {
      setFile(music);
      setName(music.name);
    }
  }, [music]);
  return (
    <Wrapper>
      <Header>
        <Title>{`Faixa ${id}`}</Title>
        {
          (progress && progress.loaded !== progress.total)
            ? null : <Icon onClick={() => deleteSong(file)}  src={'/icons/close-circle.svg'} />
        }
      </Header>
      <InputGroup
        customLabelStyle={uploaderGroupLabelCustomStyle}
        customStyle={uploaderGroupCustomStyle}
        label={name ? 'Arquivo' : ''}
      >
        <Uploader
          label={file.file ? file.file.name : (file.name || 'Subir Música')}
          icon={file.file || file.name ? '/icons/edit.svg' : '/icons/upload-common.svg'}
          accept="audio/mp3"
          customStyle={uploaderCustomStyle(file.file || file.name)}
          customLabelStyle={uploaderLabelCustomStyle(file.file || file.name)}
          id={`track-${id}`}
          handleChange={({ target }) => setFile({ file: target.files[0]})}
        />
      </InputGroup>
      <InputGroup
        customLabelStyle={"color: #5A5A5A; font-size: .68em;"}
        label={name ? 'Título da faixa' : ''}
      >
        <Input
          placeholder="Título da faixa"
          value={name}
          onBlur={() => handleChange({ ...file, name })}
          customStyle={`
            background-color: rgba(0,0,0,.07);
            color: rgba(0,0,0);
            ::placeholder {
              color: rgba(0,0,0,.3);
              opacity: 1;
            }
          `}
          type="text"
          onChange={({ target }) => setName(target.value)}
        />
      </InputGroup>
    </Wrapper>
  );
}
const valuesShape = {
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
};

MusicCard.propTypes = {
  handleRiderChange: PropTypes.func.isRequired,
  handleMapChange: PropTypes.func.isRequired,
  handleReleaseChange: PropTypes.func.isRequired,
  musics: PropTypes.array,
  stepErrors: PropTypes.shape(valuesShape).isRequired,
  values: PropTypes.shape(valuesShape).isRequired,
};

MusicCard.defaultProps = {
  musics: PropTypes.array,
}

export default MusicCard;
