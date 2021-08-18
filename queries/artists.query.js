import { gql } from 'apollo-boost';

export const oneArtistQuery = gql`
  query($artist: ArtistInput) {
    oneArtist(artist: $artist) {
      name
      hometown
      username
    }
  }
`;

export default oneArtistQuery;
