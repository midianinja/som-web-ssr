import { client } from '../../../libs/apollo.lib';
import { allSongsQuery } from './artistCurationship.queries';

export const fetchSongs = async ({ artist, setSongs }) => {
  const songsPromise = await client().query({
    query: allSongsQuery,
    variables: { song: { artist: artist.id } }
  });
  setSongs(songsPromise.data.allSongs);
};

export default fetchSongs;
