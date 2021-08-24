import { gql } from 'apollo-boost';

export const searchOpportunitiesQuery = gql`
  query searchEvents($text: String) {
    searchEvents(text: $text) {
      id
      name
      photo {
        thumbnail
        mimified
      }
      event_date
      subscribe_closing_date
      location {
        address
        district
        city
        state
      }
    }
  }
`;
export const searchProducersQuery = gql`
  query searchProducers($text: String!) {
    searchProducers(text: $text) {
      id
      name
      username
      photo
      followers {
        id
      }
      occupations {
        id
        label
      }
      user {
        id
      }
    }
  }
`;
export const searchArtistsQuery = gql`
  query newSearchArtists($text: String!) {
    newSearchArtists(text: $text) {
      id
      name
      username
      avatar_image {
        thumbnail
        mimified
      }
      musical_styles {
        id
        name
      }
      user {
        id
      }
      follows {
        user {
          id
        }
      }
    }
  }
`;
