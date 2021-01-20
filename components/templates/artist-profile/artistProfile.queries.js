import { gql } from "apollo-boost";

export const oneArtistQuery = gql`
  query($id: ID!){
    oneArtist(id: $id) {
      id
      name
      about
      user {
        following_artists {
          id
        }
      }
      approved_events {
        id
        name
        cover {
          mimified
        }
        photo {
          mimified
        }
        event_date
      }
      avatar_image {
        mimified
        thumbnail
      }
      facebook
      twitter
      musical_styles {
        id
        name
      }
      instagram
      youtube
      follows {
        user {
          id
        }
      }
      spotify_artist_link
    }
  }
`;

export const allSongsQuery = gql`
  query($song: SongInput) {
    allSongs(song: $song) {
      id
      url
      title
      image {
        mimified
      }
    }
  }
`;

export const searchArtistsQuery = gql`
  query searchArtists(
    $artist: JSON
    $paginator: PaginatorInput
  ) {
    searchArtists(
      artist: $artist
      paginator: $paginator
    ) {
      id
      name
      avatar_image {
        mimified
        thumbnail
      }
    }
  }
`;
