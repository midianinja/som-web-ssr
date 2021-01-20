import { gql } from "apollo-boost";

export const followMutation = gql`
  mutation($user: ID!, $artist: ID!){
    followArtist(user: $user, artist: $artist) {
      id
      follows {
        user {
          id
        }
      }
    }
  }
`;

export const unfollowMutation = gql`
  mutation($user: ID!, $artist: ID!){
    unfollowArtist(user: $user, artist: $artist) {
      id
      follows {
        user {
          id
        }
      }
    }
  }
`;

export const deleteSongMutation = gql`
  mutation deleteSong(
    $song_id: ID!
  ) {
    deleteSong(
      song_id: $song_id
    ) {
      id
      url
      title
      image {
        mimified
      }
    }
  }
`;

export const editSongMutation = gql`
  mutation updateSong(
    $song_id: ID!
    $song: SongInput!
  ) {
    updateSong(
      song_id: $song_id
      song: $song
    ) {
      id
      url
      title
      image {
        mimified
      }
    }
  }
`;
