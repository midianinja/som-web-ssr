import { client } from '../../../libs/apollo.lib';
import { oneArtistQuery, allSongsQuery, searchArtistsQuery } from './artistProfile.queries';
import {
  followMutation, unfollowMutation, deleteSongMutation, editSongMutation,
} from './artistProfile.mutations';

const fetchSongs = artist => client().query({
  query: allSongsQuery,
  variables: { song: { artist } },
});

export const deleteSongAction = async ({ id, artist, setSongs }) => {
  try {
    await client().mutate({
      mutation: deleteSongMutation,
      variables: {
        song_id: id,
      },
    });
    const songsPromise = await fetchSongs(artist.id);
    setSongs(songsPromise.data.allSongs);
    return null;
  } catch (err) {
    throw err;
  }
};

export const editSongAction = async ({
  id, name, artist, setSongs,
}) => {
  try {
    await client().mutate({
      mutation: editSongMutation,
      variables: {
        song: {
          title: name,
        },
        song_id: id,
      },
    });
    const songsPromise = await fetchSongs(artist.id);
    setSongs(songsPromise.data.allSongs);
    return null;
  } catch (err) {
    throw err;
  }
};

export const fetchRelatedArtsts = async (artist, setArtsts) => {
  if (!artist.id) return;
  const artsts = await client().query({
    query: searchArtistsQuery,
    variables: {
      artist: {
        musical_styles: { $in: artist.musical_styles.map(m => m.id) },
        _id: { $ne: [artist.id] },
      },
      paginator: {
        limit: 10,
      },
    },
  });
  setArtsts(artsts.data.searchArtists);
};

export const fetchArtistData = async (
  id, setArtist, setArtistLoading, setSongs, setAlertModal,
) => {
  setArtistLoading(true);

  let promise;
  try {
    promise = await client().query({
      query: oneArtistQuery,
      variables: { id },
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
      isOpen: true,
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

  setSongs(songsPromise.data.allSongs);
  setArtist(promise.data.oneArtist);
  setArtistLoading(false);
};

export const fetchArtistInstaImages = async (instaUri, setInstaPics/* , setInstagramLoading */) => {
  let promise;
  // setInstagramLoading(true);

  const instaname = instaUri.split('/').reverse()[0];

  try {
    promise = await fetch(`${process.env.INSTAGRAM_API_URI}/photos/${instaname}`);
  } catch (e) {
    throw e;
  }

  const { data } = await promise.json();
  setInstaPics(data);
  // setInstagramLoading(false);
};

export const follow = async (artist, user, setFollows, follows) => {
  const newFollows = [...follows];
  newFollows.push(user);
  setFollows(newFollows);

  try {
    await client().mutate({
      mutation: followMutation,
      variables: { artist, user },
    });
  } catch (err) {
    throw err;
  }
};

export const unfollow = async (artist, user, setFollows, follows) => {
  const newFollows = [...follows];
  newFollows.splice(follows.indexOf(user), 1);
  setFollows(newFollows);

  try {
    await client().mutate({
      mutation: unfollowMutation,
      variables: { artist, user },
    });
  } catch (err) {
    console.error([err]);
    throw err;
  }
};
