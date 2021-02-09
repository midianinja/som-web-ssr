import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Fieldset, Title, FirstLegend, CardsWrapper,
  UploadNewSongButton, LabelPlus, SecondLegend,
  Content,
} from './musicFieldset.style';
import MusicCard from '../music-card/musicCard';

/**
 * This contains the Music Fieldset Component
 * @returns {React.Component} React Component
 */
const MusicFieldset = ({
  songs, addSong, deleteSong, updateSongName,
  setSubmitDisabled,
}) => {
  const [newSong, setNewSong] = useState(false);
  return (
    <Fieldset>
      <Content>
        <Title>Músicas</Title>
        <FirstLegend>Suba os arquivos de áudio que vão estar disponíveis no player do perfil da banda</FirstLegend>
        <SecondLegend>Formato de arquivo suportado: .mp3, com no máximo 10 mb.</SecondLegend>
        <CardsWrapper>
          {songs.filter((s) => !s.deleted).map((music, index) => (
            <MusicCard
              setSubmitDisabled={setSubmitDisabled}
              handleChange={(data) => addSong(data)}
              deleteSong={(data) => deleteSong(data)}
              key={index}
              id={index + 1}
              music={music}
            />
          ))}
          {
            newSong ?
              (
                <MusicCard
                  setSubmitDisabled={setSubmitDisabled}
                  handleChange={(data) => { setNewSong(false); addSong(data); }}
                  unNameBlur={(song) => { addSong(song); }}
                  deleteSong={(data) => { setNewSong(false); deleteSong(data); }}
                  id={songs.length + 1}
                  music={null}
                />
              ) : null
          }
        </CardsWrapper>
        <UploadNewSongButton onClick={() => setNewSong(true)}>Carregar mais músicas<LabelPlus>+</LabelPlus></UploadNewSongButton>
      </Content>
    </Fieldset>
  );
}
const songShape = {};

MusicFieldset.propTypes = {
  songs: PropTypes.PropTypes.shape(songShape),
  addSong: PropTypes.func.isRequired,
  setSubmitDisabled: PropTypes.func.isRequired,
  deleteSong: PropTypes.func.isRequired,
  updateSongName: PropTypes.func.isRequired,
};

MusicFieldset.defaultProps = {
  musics: [],
}

export default MusicFieldset;
