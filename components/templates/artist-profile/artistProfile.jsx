import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Cover from '../../atoms/cover/cover';
import InstagramMedia from '../../molecules/instagram-medias/instagramMedias';
import AudioPlayer from '../../organisms/audio-player/audioPlayer';
import Header from '../../organisms/default-header/defaultHeader';
import DialogModal from '../../modals/dialog/dialog';
import Store from '../../../store/Store';
import MoreArtist from './components/more-artist/moreArtist';
import ArtistBasicInfo from './components/artist-basic-info/artistBasicInfo';
import ApprovedEvents from './components/approved-events/approvedEvents';
import {
  fetchArtistData, fetchArtistInstaImages,
  fetchRelatedArtsts, follow, unfollow,
  editSongAction, deleteSongAction,
} from './artistProfile.controller';
import {
  ArtistWrapper, CoverWrapper, HeaderWrapper, Content,
  ColumnWrapper,
} from './artistProfile.style';

const ArtistPage = () => {
  const router = useRouter();
  const { label } = router.query;
  const { state, dispatch } = useContext(Store);
  const [artistLoading, setArtistLoading] = useState(false);
  const [artist, setArtist] = useState({});
  const [relatedArtsts, setRelatedArtsts] = useState([]);
  const [instagramPhotos, setInstagramPhotos] = useState(false);
  const [follows, setFollows] = useState([]);
  const [alertModal, setAlertModal] = useState({
    title: '',
    icon: '',
    description: '',
    agreeText: '',
    disagreeText: '',
    confirmAction: '',
    disagreeAction: '',
    isOpen: false,
  });
  const [songs, setSongs] = useState([]);

  const isUserArtist = (state.user && state.user.artist && state.user.artist.id === label);
  useEffect(() => {
    if (label !== artist.id) {
      const fetchArtist = async () => {
        await fetchArtistData(label, setArtist, setArtistLoading, setSongs, setAlertModal);
      };
      fetchArtist();
    }
  }, [router.query]);

  useEffect(() => {
    if (artist.instagram) {
      fetchArtistInstaImages(artist.instagram, setInstagramPhotos);
    }
    if (!relatedArtsts.length) {
      fetchRelatedArtsts(artist, setRelatedArtsts);
    }

    if (artist.follows) {
      setFollows(artist.follows.map(({ user }) => user.id));
    }
  }, [artist]);

  if (artistLoading) return null;
  if (!artist.id) return null;

  const handleFollow = () => {
    if (!state.user) {
      state.idaSDK.signinWithPopup();
    } else if (state.user && follows.indexOf(state.user.id) !== -1) {
      unfollow(artist.id, state.user.id, setFollows, follows);
    } else {
      follow(artist.id, state.user.id, setFollows, follows);
    }
  };

  if (alertModal.isOpen) {
    return (
      <DialogModal
        title={alertModal.title}
        description={alertModal.description}
        agreeText={alertModal.agreeText}
        disagreeText={alertModal.disagreeText}
        confirmAction={alertModal.confirmAction}
        disagreeAction={alertModal.disagreeAction}
        isOpen={alertModal.isOpen}
      />
    );
  }

  return (
    <ArtistWrapper>
      <Header />
      <CoverWrapper>
        <Cover cover={artist.cover}>
          <HeaderWrapper />
        </Cover>
      </CoverWrapper>
      <Content>
        <ArtistBasicInfo
          isUserArtist={isUserArtist}
          avatar={artist.avatar_image ? artist.avatar_image.mimified : null}
          about={artist.about}
          name={artist.name}
          facebook={artist.facebook}
          twitter={artist.twitter}
          spotify={artist.spotify_artist_link}
          instagram={artist.instagram}
          followers={follows.length}
          following={artist.user.following_artists.length}
          isFollowing={
            state.user && artist.follows
              ? follows.indexOf(state.user.id) !== -1
              : false
          }
          followToggle={handleFollow}
          editAction={() => router.push('/register-artist')}
        />
        <ColumnWrapper>
          {
            songs.length ? (
              <AudioPlayer
                editAction={data => editSongAction({
                  ...data,
                  artist: state.user.artist,
                  setSongs,
                })}
                deleteAction={data => deleteSongAction({
                  ...data,
                  artist: state.user.artist,
                  setSongs,
                })}
                isUserArtist={isUserArtist}
                tracks={songs}
              />
            ) : null
          }
          <InstagramMedia
            images={instagramPhotos}
            navigateToInstagram={() => {
              if (artist.instagram) {
                window.open(artist.instagram, '_blank');
              }
            }}
          />
          {/* {
            artist.spotify_artist_link ? (
              <iframe
                src={artist.spotify_artist_link}
                width="100%"
                height="200px"
                title="spotify"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
              />
            ) : (
              null
            )
          } */}
          {
            artist.approved_events.length
              ? (
                <ApprovedEvents
                  eventClick={evtId => router.push(`/event/${evtId}`)}
                  events={artist.approved_events}
                />
              )
              : null
          }
          {
            relatedArtsts.length
              ? (
                <MoreArtist history={router} artists={relatedArtsts} />
              )
              : null
          }
        </ColumnWrapper>
      </Content>
    </ArtistWrapper>
  );
}

export default ArtistPage;
