import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Cover from '../../atoms/cover/cover';
import AudioPlayer from '../../organisms/audio-player/audioPlayer';
import Header from '../../organisms/default-header/defaultHeader';
import DialogModal from '../../modals/dialog/dialog';
import Store from '../../../store/Store';
import MoreArtist from './components/more-artist/moreArtist';
import ArtistBasicInfo from './components/artist-basic-info/artistBasicInfo';
import ApprovedEvents from './components/approved-events/approvedEvents';
import {
  fetchArtistData,
  fetchRelatedArtsts,
  follow,
  unfollow,
  editSongAction,
  deleteSongAction,
  favoriteSong,
  unfavoriteSong
} from './artistProfile.controller';
import {
  ArtistWrapper,
  CoverWrapper,
  HeaderWrapper,
  Content,
  ColumnWrapper
} from './artistProfile.style';

const ArtistPage = () => {
  const router = useRouter();
  const { label } = router.query;
  const { state, dispatch } = useContext(Store);
  const [artistLoading, setArtistLoading] = useState(false);
  const [artist, setArtist] = useState({});
  const [relatedArtsts, setRelatedArtsts] = useState([]);
  const [follows, setFollows] = useState([]);
  const [alertModal, setAlertModal] = useState({
    title: '',
    icon: '',
    description: '',
    agreeText: '',
    disagreeText: '',
    confirmAction: '',
    disagreeAction: '',
    isOpen: false
  });
  const [songs, setSongs] = useState([]);

  const isUserArtist = state.user && state.user.artist && state.user.artist.id === artist.id;
  useEffect(() => {
    if (label !== artist.username) {
      const fetchArtist = async () => {
        await fetchArtistData(label, setArtist, setArtistLoading, setSongs, setAlertModal);
      };
      fetchArtist();
    }
  }, [router.query]);

  useEffect(() => {
    if (!relatedArtsts.length) {
      fetchRelatedArtsts(artist, setRelatedArtsts);
    }

    if (artist.follows) {
      setFollows(artist.follows.map((id) => id));
    }
  }, [artist]);

  if (artistLoading) return null;
  if (!artist.id) return null;

  const handleFollow = () => {
    if (!state.user) {
      state.idaSDK.signinWithPopup();
    } else if (state.user && follows.some((obj) => obj.id === state.user.id)) {
      unfollow(artist, state.user, setFollows, follows);
    } else {
      follow(artist, state.user, setFollows, follows);
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

  // console.log(
  //   'sooongs',
  //   songs.map(
  //     (s) =>
  //       ({
  //         ...s,
  //         liked: state.user.favorited_songs.findIndex(({ id }) => s.id === id)
  //       } !== -1)
  //   )
  // );

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
          email={artist.email}
          facebook={artist.facebook}
          twitter={artist.twitter}
          spotify={artist.spotify_artist_link}
          instagram={artist.instagram}
          followers={follows.length}
          following={artist.user.following_artists.length}
          isFollowing={
            state.user && artist.follows ? follows.some((obj) => obj.id === state.user.id) : false
          }
          followToggle={handleFollow}
          editAction={() => router.push('/register-artist')}
        />
        <ColumnWrapper>
          {songs.length ? (
            <AudioPlayer
              editAction={(data) =>
                editSongAction({
                  ...data,
                  artist: state.user.artist,
                  setSongs
                })
              }
              deleteAction={(data) =>
                deleteSongAction({
                  ...data,
                  artist: state.user.artist
                })
              }
              isUserArtist={isUserArtist}
              tracks={songs.map((s) => ({
                ...s,
                liked: state.user.favorited_songs.findIndex(({ id }) => s.id === id) !== -1
              }))}
              favoriteSong={(song) =>
                favoriteSong(state.user, song, dispatch, state.user.favorited_songs)
              }
              unfavoriteSong={(song) =>
                unfavoriteSong(state.user, song, dispatch, state.user.favorited_songs)
              }
            />
          ) : null}
          {artist.approved_events.length ? (
            <ApprovedEvents
              eventClick={(evtId) => router.push(`/event/${evtId}`)}
              events={artist.approved_events}
            />
          ) : null}
          {relatedArtsts.length ? <MoreArtist history={router} artists={relatedArtsts} /> : null}
        </ColumnWrapper>
      </Content>
    </ArtistWrapper>
  );
};

export default ArtistPage;
