import { client } from '../../../libs/apollo.lib';
import { oneArtistQuery, allSongsQuery, searchArtistsQuery } from './artistProfile.queries';
import {
  deleteSongMutation,
  editSongMutation,
  favoriteSongMutation,
  unfavoriteSongMutation
} from './artistProfile.mutations';
import { followArtist, unfollowArtist } from './artistProfile.repository';

const fetchSongs = (artist) =>
  client().query({
    query: allSongsQuery,
    variables: { song: { artist } }
  });

export const deleteSongAction = async ({ id, artist, setSongs }) => {
  await client().mutate({
    mutation: deleteSongMutation,
    variables: {
      song_id: id
    }
  });

  const songsPromise = await fetchSongs(artist.id);
  setSongs(songsPromise.data.allSongs);
};

export const editSongAction = async ({ id, name, artist, setSongs }) => {
  await client().mutate({
    mutation: editSongMutation,
    variables: {
      song: {
        title: name
      },
      song_id: id
    }
  });

  const songsPromise = await fetchSongs(artist.id);
  setSongs(songsPromise.data.allSongs);
};

export const fetchRelatedArtsts = async (artist, setArtsts) => {
  if (!artist.id) return;

  const artsts = await client().query({
    query: searchArtistsQuery,
    variables: {
      paginator: {
        limit: 10
      }
    }
  });

  setArtsts(artsts.data.searchArtists);
};

export const fetchArtistData = async (id, setArtist, setArtistLoading, setSongs, setAlertModal) => {
  setArtistLoading(true);

  let promise;
  try {
    promise = await client().query({
      query: oneArtistQuery,
      variables: { username: id }
    });
  } catch (err) {
    setArtistLoading(false);
    throw err;
  }

  if (!promise.data.oneArtist) {
    setArtistLoading(false);
    setAlertModal({
      title: 'Ops!',
      icon: '',
      description: 'Artista não encontrado',
      agreeText: 'OK',
      disagreeText: '',
      confirmAction: () => setAlertModal({}),
      disagreeAction: undefined,
      isOpen: true
    });
    return;
  }

  let songsPromise;
  try {
    songsPromise = await fetchSongs(promise.data.oneArtist.id);
  } catch (err) {
    setArtistLoading(false);
    throw err;
  }

  console.log(songsPromise.data.allSongs);
  setSongs(songsPromise.data.allSongs);
  setArtist(promise.data.oneArtist);
  setArtistLoading(false);
};

export const fetchArtistInstaImages = async (instaUri, setInstaPics) => {
  const instaname = instaUri.split('/').reverse()[0];
  const promise = await fetch(`${process.env.INSTAGRAM_API_URI}/photos/${instaname}`);

  const { data } = await promise.json();
  setInstaPics(data);
};

export const follow = async (artist, user, setFollows, follows) => {
  const newFollows = [...follows];

  newFollows.push(user);
  setFollows(newFollows);

  await followArtist(artist.id, user.id);
};

export const unfollow = async (artist, user, setFollows, follows) => {
  const newFollows = [...follows];
  newFollows.splice(follows.indexOf(user.id), 1);
  setFollows(newFollows);

  await unfollowArtist(artist.id, user.id);
};

export const favoriteSong = async (user, song, dispatch, favoritedSongs) => {
  let newFavoritedSongs = [...favoritedSongs];
  newFavoritedSongs.push(song);

  let newUser = { ...user, favorited_songs: newFavoritedSongs };
  dispatch({
    type: 'SET_USER',
    user: newUser
  });

  try {
    await client().mutate({
      mutation: favoriteSongMutation,
      variables: { song: song.id, user: user.id }
    });
  } catch (err) {
    newFavoritedSongs = [...newUser.favorited_songs];
    newFavoritedSongs.splice(
      newFavoritedSongs.indexOf((s) => s.id === song.id),
      1
    );

    newUser = { ...newUser, favorited_songs: newFavoritedSongs };

    dispatch({
      type: 'SET_USER',
      user: newUser
    });

    throw err;
  }
};

export const unfavoriteSong = async (user, song, dispatch, favoritedSongs) => {
  let newFavoritedSongs = [...user.favorited_songs];
  newFavoritedSongs.splice(
    newFavoritedSongs.indexOf((s) => s.id === song.id),
    1
  );

  let newUser = { ...newUser, favorited_songs: newFavoritedSongs };

  dispatch({
    type: 'SET_USER',
    user: newUser
  });

  try {
    await client().mutate({
      mutation: unfavoriteSongMutation,
      variables: { song: song.id, user: user.id }
    });
  } catch (err) {
    newFavoritedSongs = [...favoritedSongs];
    newFavoritedSongs.push(song);

    newUser = { ...newUser, favorited_songs: newFavoritedSongs };
    dispatch({
      type: 'SET_USER',
      user: newUser
    });

    throw err;
  }
};
