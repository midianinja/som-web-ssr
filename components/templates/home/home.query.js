import { gql } from 'apollo-boost';

export const ALL_HIGHLIGHTED_OPORTUNITIES_QUERY = gql`
  query allHighlightedOportunities {
    allHighlightedOportunities {
      id
      image
      link
      oportunity {
        id
        name
        about
      }
    }
  }
`;

export const ALL_COMMUNITY_USERS_QUERY = gql`
  query allCommunityUsers {
    allCommunityUsers {
      id
    }
  }
`;

export const ALL_NEWS_QUERY = gql`
  query allNews {
    allNews {
      id
      title
      description
      image_uri
      uri
    }
  }
`;

export const LASTEST_OPPORTUNITIES = gql`
  query allEvents($paginator: PaginatorInput) {
    allEvents(paginator: $paginator) {
      id
      name
      about
      photo {
        mimified
        original
      }
    }
  }
`;

export const LAST_OPORTUNITIES_TO_ARTIST = gql`
  query allEventToArtist {
    allEventToArtist {
      id
      name
      about
      photo {
        mimified
        original
      }
    }
  }
`;

export const LAST_OPORTUNITIES_TO_PRODUTOR = gql`
  query allEventToProductor {
    allEventToProductor {
      id
      name
      about
      photo {
        mimified
        original
      }
    }
  }
`;
