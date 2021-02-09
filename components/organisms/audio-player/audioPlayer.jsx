import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlayPauseButton from '../../atoms/play-pause-button/playPauseButton';
import AudioSlider from '../../atoms/audio-slider/audioSlider';
import {
  TooltipContainer,
  Content,
  Triangle,
  Wrapper,
  Header,
  Info,
  Title,
  Album,
  List,
  Track,
  TrackContainer,
  TrackText,
  TrackInfo,
  TrackTime,
  TrackLikedIcon,
  TrackEditIcon,
  TooltipIcon,
  TrackHeaderWrapper
} from './audioPlayer.style';

let AUDIO_ELEMENT = null;

const secondToMinute = (time) => {
  let minutes = parseInt(time / 60, 10);
  let seconds = parseInt(time % 60, 10);

  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
};

const renderTracks = (tracks, handleClick, deleteAction, editAction, isUserArtist) => {
  const [selected, setSelected] = useState('');
  const [name, setName] = useState('');

  const editAct = async ({ id }) => {
    await editAction({ id, name });
    setSelected('');
  };

  const deleteAct = async ({ id }) => {
    await deleteAction({ id });
    setSelected('');
  };

  return tracks.map(({ id, title, liked, time }, index) => (
    <Track onClick={() => handleClick(tracks[index])}>
      <TooltipContainer show={id === selected}>
        <Content onClick={(e) => e.stopPropagation()}>
          <TooltipIcon show={!name} onClick={() => setName(title)} src="/icons/edit-white.svg" />
          <TooltipIcon show={!name} onClick={() => deleteAct({ id })} src="/icons/trash.svg" />
          <TooltipIcon show={!!name} onClick={() => editAct({ id })} src="/icons/check-green.svg" />
          <TooltipIcon
            show
            onClick={() => {
              setSelected('');
              setName('');
            }}
            src="/icons/close-white.svg"
          />
        </Content>
        <Triangle show={id === selected} />
      </TooltipContainer>
      <TrackContainer>
        <TrackText
          value={id === selected && name ? name : title}
          onChange={({ target }) => setName(target.value)}
          disabled={!(id === selected && name)}
        />
        <TrackInfo>
          {isUserArtist ? (
            <TrackEditIcon
              onClick={(e) => {
                e.stopPropagation();
                setSelected(selected === id ? '' : id);
                setName('');
              }}
              src="/icons/tool.svg"
            />
          ) : null}
          <TrackLikedIcon src={liked ? '/icons/star_outlined.svg' : '/icons/star.svg'} />
          <TrackTime>{secondToMinute(time)}</TrackTime>
        </TrackInfo>
      </TrackContainer>
    </Track>
  ));
};

const handlePlayPause = (setPlay, play) => {
  if (!AUDIO_ELEMENT) return;

  if (play) {
    AUDIO_ELEMENT.pause();
    setPlay(false);
  } else {
    AUDIO_ELEMENT.play();
    setPlay(!play);
  }
};

const AudioPlayer = ({
  tracks,
  isUserArtist,
  deleteAction,
  editAction,
  customStyle,
  customListStyle,
  color,
  color15,
  color50,
  playPress
}) => {
  const [play, setPlay] = useState(false);
  const [songs, setSongs] = useState([]);
  const [selectSong, setSelectSong] = useState(null);
  const [audioStatus, setAudioStatus] = useState('stopped');
  const [currentTime, setCurrentTime] = useState(0);

  const loadingSong = (cb) => {
    setAudioStatus('loading');
    AUDIO_ELEMENT = new Audio();
    AUDIO_ELEMENT.onloadstart = () => {
      setAudioStatus('loadded');
      cb();
    };

    AUDIO_ELEMENT.ontimeupdate = (event) => {
      setCurrentTime(event.target.currentTime);
    };

    AUDIO_ELEMENT.src = selectSong.url;
    AUDIO_ELEMENT.load();
  };

  useEffect(() => {
    const isAudio = !!AUDIO_ELEMENT;
    const cb = () => {
      setPlay(true);
      AUDIO_ELEMENT.play();
    };

    if (isAudio && AUDIO_ELEMENT) {
      setPlay(false);
      AUDIO_ELEMENT.pause();
    }

    if (selectSong) loadingSong(isAudio ? cb : () => null);
  }, [selectSong]);

  useEffect(() => {
    if (playPress && AUDIO_ELEMENT) {
      setPlay(false);
      AUDIO_ELEMENT.pause();
    }
  }, [playPress]);

  useEffect(() => {
    const mapSongs = async () => {
      const songsDataPromise = (track) =>
        new Promise((resolve) => {
          AUDIO_ELEMENT = null;
          const audioFakeElement = new Audio();
          audioFakeElement.onloadedmetadata = (data) => {
            const metadata = {
              id: track.id,
              url: track.url,
              title: track.title,
              time: data.target.duration,
              liked: false,
              algum: '-'
            };

            resolve(metadata);
          };

          audioFakeElement.src = track.url;
          audioFakeElement.load();
        });

      const promises = tracks.map(songsDataPromise);
      const newSongs = await Promise.all(promises);

      setSongs(newSongs);
      setSelectSong(newSongs[0]);
      if (AUDIO_ELEMENT) handlePlayPause(setPlay, true);
    };

    mapSongs();
  }, [tracks]);

  const currentRangeValue =
    currentTime && AUDIO_ELEMENT && AUDIO_ELEMENT.duration
      ? Math.floor((currentTime / AUDIO_ELEMENT.duration) * 1000)
      : 0;

  if (AUDIO_ELEMENT?.duration) {
    console.log(currentRangeValue, currentTime, AUDIO_ELEMENT.duration);    
  }

  const song = {
    title: 'Nenhuma seleção.',
    album: '',
    url: '',
    ...(selectSong || {})
  };
  return (
    <Wrapper customStyle={customStyle}>
      <Header>
        <TrackHeaderWrapper>
          <PlayPauseButton
            color={color}
            ket={play}
            shouldPlay={play}
            onClick={() => handlePlayPause(setPlay, play)}
          />
          <Info>
            <Title>{song.title}</Title>
            <Album>{song.album}</Album>
          </Info>
        </TrackHeaderWrapper>
        <AudioSlider
          color15={color15}
          color50={color50}
          color={color}
          id="audio-slider"
          value={currentRangeValue}
          defaultValue="0"
          onChange={(e) => {
            if (!AUDIO_ELEMENT) return;

            const time = (e.target.value / 1000) * AUDIO_ELEMENT.duration;
            setCurrentTime(time);

            AUDIO_ELEMENT.currentTime = time;
            AUDIO_ELEMENT.play();
            setPlay(true);
          }}
          min="0"
          max="1000"
        />
      </Header>
      <List customStyle={customListStyle}>
        {renderTracks(songs, setSelectSong, deleteAction, editAction, isUserArtist)}
      </List>
    </Wrapper>
  );
};

const trackShape = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.number
};

AudioPlayer.propTypes = {
  deleteAction: PropTypes.func.isRequired,
  editAction: PropTypes.func.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape(trackShape)),
  isUserArtist: PropTypes.bool,
  customStyle: PropTypes.string,
  customListStyle: PropTypes.string,
  color: PropTypes.string,
  color15: PropTypes.string,
  color50: PropTypes.string,
  playPress: PropTypes.string
};

AudioPlayer.defaultProps = {
  isUserArtist: false,
  tracks: [],
  customStyle: '',
  customListStyle: '',
  color: '',
  color15: '',
  color50: '',
  playPress: ''
};

export default AudioPlayer;
