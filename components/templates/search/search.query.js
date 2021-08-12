import {
  gql
} from 'apollo-boost';

export const searchEventsQuery = gql`
  query searchEvents($text: String) {
    searchEvents(text: $text) {
      id
      name
      event_date
      location {
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
      occupations {
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
      musical_styles {
        name
      }
      user {
        id
      }
    }
  }
`;
