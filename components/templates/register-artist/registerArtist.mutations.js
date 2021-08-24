import { gql } from 'apollo-boost';

export const createArtistMutation = gql`
  mutation($artist: ArtistInput!) {
    createArtist(artist: $artist) {
      id
      name
      phone
      members_number
      username
      avatar_image {
        mimified
      }
      status
      about
      telegram
      integrants
      whatsapp
      country
      state
      location {
        id
        address
        complement
        district
        city
        number
        zipcode
        state
        country
        place_id
        geometry
      }
      city
      musical_styles {
        id
        name
      }
      facebook
      instagram
      twitter
      songs {
        title
        id
        url
      }
      youtube
      hometown
      google_id
      stage_map
      tec_rider
      tec_release
      twitter_id
      instagram_id
      spotify_id
      spotify_artist_link
      facebook_id
      email
    }
  }
`;

export const updateArtistMutation = gql`
  mutation($artist_id: ID!, $artist: ArtistInput!) {
    updateArtist(artist_id: $artist_id, artist: $artist) {
      id
      name
      phone
      username
      members_number
      avatar_image {
        mimified
      }
      about
      country
      integrants
      state
      city
      telegram
      songs {
        title
        id
        url
      }
      whatsapp
      musical_styles {
        id
        name
      }
      location {
        id
        address
        complement
        district
        city
        number
        zipcode
        state
        country
        place_id
        geometry
      }
      facebook
      instagram
      twitter
      youtube
      hometown
      google_id
      stage_map
      tec_rider
      kit
      twitter_id
      instagram_id
      spotify_id
      spotify_artist_link
      facebook_id
      email
    }
  }
`;

export const createLocationMutation = gql`
  mutation($location: LocationInput!) {
    createLocation(location: $location) {
      id
    }
  }
`;

export const updateLocationMutation = gql`
  mutation($id: ID!, $location: LocationInput!) {
    updateLocation(id: $id, location: $location) {
      id
    }
  }
`;

export const createSongMutation = gql`
  mutation($song: SongInput!) {
    createSong(song: $song) {
      id
      url
      title
      deleted
    }
  }
`;
export const updateSongMutation = gql`
  mutation($song_id: ID!, $song: SongInput!) {
    updateSong(song_id: $song_id, song: $song) {
      id
      url
      title
      deleted
    }
  }
`;

export const deleteSongMutation = gql`
  mutation($song_id: ID!) {
    deleteSong(song_id: $song_id) {
      id
      url
      title
      deleted
    }
  }
`;
