import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { purple, purple15, purple50 } from '../../../settings/colors';
import Cover from '../../atoms/cover/cover';
import AudioPlayer from '../../organisms/audio-player/audioPlayer';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import { fetchSongs } from './artist-curationship.controller';
import {
  ArtistCurationshipModalWrapper,
  CloseWrapper,
  CloseIcon,
  ProfileImage,
  ArtistWrapper,
  ArtistInfos,
  ArtistName,
  ArtistLabel,
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
} from './artist-curationship.style';

const curatorAction = ({ opportunity, artist, approveAction, reproveAction }) => (
  <WhiteZone>
    <Label>
      <Bold>{`${artist?.name} `}</Bold>
      se inscreveu em
      <Bold>{` ${opportunity?.name} `}</Bold>
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

const resetRateAction = ({ opportunity, artist, resetSubscriptionAction }) => (
  <WhiteZone approved={artist?.approved}>
    <Label>
      Banda
      {artist?.approved === 'approved' ? (
        <GreenBold>{' aprovada '}</GreenBold>
      ) : (
        <RedBold>{' reprovada '}</RedBold>
      )}
      para o<Bold>{` ${opportunity?.name} `}</Bold>
    </Label>
    <PrimaryButton onClick={resetSubscriptionAction} customStyle={resetSubscriptionStyle}>
      Reavaliar artista
    </PrimaryButton>
  </WhiteZone>
);

const ArtistCurationshipModal = ({
  artist,
  opportunity,
  closeModal,
  resetSubscriptionAction,
  reproveAction,
  approveAction
}) => {
  const router = useRouter();
  const [songs, setSongs] = useState([]);
  const [playPress, setPlayPress] = useState('');
  useEffect(() => {
    if (artist) fetchSongs({ artist, setSongs });
  }, [artist]);

  if (!artist) return null;

  return (
    <ArtistCurationshipModalWrapper
      id="artists-curationship"
      onClick={() => {
        closeModal();
      }}>
      <Container onClick={(e) => e.stopPropagation()}>
        <CoverWrapper>
          <Cover customStyle="padding: 0; min-height: 100px;" cover={artist?.cover}>
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
                <ProfileImage>
                  <img alt="" src={artist?.avatar_image?.mimified} />
                </ProfileImage>
                <ArtistInfos>
                  <ArtistLabel>Artista</ArtistLabel>
                  <ArtistName>{artist?.name}</ArtistName>
                  <ArtistDescription>
                    {artist?.about.slice(0, 100)}
                    {artist?.about.length > 100 ? '...' : ''}
                  </ArtistDescription>
                  <ProfileLink onClick={() => router.push(`/artist/${artist?.username}`)}>
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
          ? resetRateAction({ opportunity, artist, resetSubscriptionAction })
          : curatorAction({ opportunity, artist, approveAction, reproveAction })}
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
  opportunity: PropTypes.shape({ name: PropTypes.string }).isRequired,
  closeModal: PropTypes.func.isRequired,
  reproveAction: PropTypes.func.isRequired,
  approveAction: PropTypes.func.isRequired,
  resetSubscriptionAction: PropTypes.func.isRequired
};

export default ArtistCurationshipModal;
