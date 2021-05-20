import axios from 'axios';
import { client } from '../../../libs/apollo.lib';
import {
  createArtistMutation,
  updateArtistMutation,
  createLocationMutation,
  updateLocationMutation,
  deleteSongMutation,
  createSongMutation,
  updateSongMutation
} from './registerArtist.mutations';

export const createArtist = (artist) =>
  client().mutate({
    mutation: createArtistMutation,
    variables: {
      artist
    }
  });

export const updateArtist = (id, artist) =>
  client().mutate({
    mutation: updateArtistMutation,
    variables: {
      artist_id: id,
      artist
    }
  });

export const createLocation = (location) =>
  client().mutate({
    mutation: createLocationMutation,
    variables: {
      location
    }
  });

export const updateLocation = (id, location) =>
  client().mutate({
    mutation: updateLocationMutation,
    variables: {
      id,
      location
    }
  });

export const createSong = (song) =>
  client().mutate({
    mutation: createSongMutation,
    variables: {
      song: {
        artist: song.artist,
        url: song.url,
        title: song.title,
        image: song.image
      }
    }
  });

export const updateSong = (song) =>
  client().mutate({
    mutation: updateSongMutation,
    variables: {
      song_id: song.id,
      song: {
        artist: song.artist,
        url: song.url,
        title: song.title,
        image: song.image
      }
    }
  });

export const deleteSong = (id) =>
  client().mutate({
    mutation: deleteSongMutation,
    variables: {
      song_id: id
    }
  });

export const getViaCepLocation = (zipcode) => axios.get(`https://viacep.com.br/ws/${zipcode}/json`);
