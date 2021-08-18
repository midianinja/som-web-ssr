import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { purple, purple15, purple50 } from '../../../settings/colors';
import Cover from '../../atoms/cover/cover';
import AudioPlayer from '../../organisms/audio-player/audioPlayer';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import { fetchSongs } from './artistCurationship.controller';
import {
  ArtistCurationshipModalWrapper,
  CloseWrapper,
  CloseIcon,
  ProfileImage,
  ArtistWrapper,
  ArtistInfos,
  ArtistName,
  Label,
  Empty,
  Bold,
  GreenBold,
  RedBold,
  ArtistDescription,
  ProfileLink,
  CoverWrapper,
  HeaderWrapper,
  Container,
  WhiteZone,
  ButtonsWrapper,
  aprroveButtonStyle,
  reproveButtonStyle,
  audioListStyle,
  resetSubscriptionStyle
} from './artistCurationship.style';

const curatorAction = ({ artist, approveAction, reproveAction }) => (
  <WhiteZone>
    <Label>
      <Bold>{`${artist.name} `}</Bold>
      se inscreveu em
      <Bold>{` ${artist.event.name} `}</Bold>
    </Label>
    <ButtonsWrapper>
      <PrimaryButton customStyle={aprroveButtonStyle} onClick={approveAction}>
        Aprovar
      </PrimaryButton>
      <PrimaryButton onClick={reproveAction} customStyle={reproveButtonStyle}>
        Reprovar
      </PrimaryButton>
    </ButtonsWrapper>
  </WhiteZone>
);

const resetRateAction = ({ artist, resetSubscriptionAction }) => (
  <WhiteZone>
    <Label>
      Banda
      {artist.approved === 'aprovada' ? (
        <GreenBold>{' aprovada '}</GreenBold>
      ) : (
        <RedBold>{' reprovada '}</RedBold>
      )}
      para o<Bold>{` ${artist.event.name} `}</Bold>
    </Label>
    <PrimaryButton onClick={resetSubscriptionAction} customStyle={resetSubscriptionStyle}>
      Reavaliar artista
    </PrimaryButton>
  </WhiteZone>
);

const ArtistCurationshipModal = ({
  artist,
  closeModal,
  resetSubscriptionAction,
  reproveAction,
  approveAction,
}) => {
  const router = useRouter();
  const [songs, setSongs] = useState([]);
  const [playPress, setPlayPress] = useState('');
  useEffect(() => {
    if (artist) fetchSongs({ artist, setSongs });
  }, [artist]);

  if (!artist) return null;

  return (
    <ArtistCurationshipModalWrapper id="artists-curationship" onClick={() => {
      closeModal();
    }}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CoverWrapper>
          <Cover customStyle="padding: 0; height: 180px;" cover={artist.cover}>
            <HeaderWrapper>
              <CloseWrapper>
                <CloseIcon
                  onClick={() => {
                    setPlayPress(`${Math.random()}`);
                    setTimeout(closeModal, 200);
                  }}
                  src="/icons/close-white.svg"
                />
              </CloseWrapper>
              <ArtistWrapper>
                <ProfileImage src={artist.avatar.mimified} />
                <ArtistInfos>
                  <ArtistName>{artist.name}</ArtistName>
                  <ArtistDescription>{artist.about}</ArtistDescription>
                  <ProfileLink onClick={() => router.push(`/artist/${artist.username}`)}>
                    Ver perfil completo
                  </ProfileLink>
                </ArtistInfos>
              </ArtistWrapper>
            </HeaderWrapper>
          </Cover>
        </CoverWrapper>
        {songs.length ? (
          <AudioPlayer
            playPress={playPress}
            color={purple}
            color15={purple15}
            color50={purple50}
            customStyle="padding-top: 90px;"
            customListStyle={audioListStyle}
            tracks={artist ? songs : []}
          />
        ) : (
          <Empty>Artista sem musicas</Empty>
        )}
        {artist.approved
          ? resetRateAction({ artist, resetSubscriptionAction })
          : curatorAction({ artist, approveAction, reproveAction })}
      </Container>
    </ArtistCurationshipModalWrapper>
  );
};

const artistShape = {
  cover: PropTypes.object,
  about: PropTypes.string,
  approved: PropTypes.string
};

curatorAction.propTypes = {
  artist: PropTypes.shape(artistShape).isRequired,
  reproveAction: PropTypes.func.isRequired,
  approveAction: PropTypes.func.isRequired
};

resetRateAction.propTypes = {
  artist: PropTypes.shape(artistShape).isRequired,
  resetSubscriptionAction: PropTypes.func.isRequired
};

ArtistCurationshipModal.propTypes = {
  artist: PropTypes.shape(artistShape).isRequired,
  closeModal: PropTypes.func.isRequired,
  reproveAction: PropTypes.func.isRequired,
  approveAction: PropTypes.func.isRequired,
  resetSubscriptionAction: PropTypes.func.isRequired
};

export default ArtistCurationshipModal;
