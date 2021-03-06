import { gql } from 'apollo-boost';

export const oneArtistQuery = gql`
  query($artist: ArtistInput) {
    oneArtist(artist: $artist) {
      name
      hometown
    }
  }
`;

export default oneArtistQuery;
