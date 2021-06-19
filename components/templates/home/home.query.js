import { gql } from 'apollo-boost';

export const ALL_HIGHLIGHTED_OPORTUNITIES_QUERY = gql`
  query allHighlightedOportunities {
    allHighlightedOportunities {
      id,
      image,
      opportunity {
        id,
        name,
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
      image_url
    }
  }
`;

export const LAST_OPORTUNITIES_TO_ARTIST = gql`
  query allEventsToArtist {
    allEventsToArtist {
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
  query allEventsToProductor {
    allEventsToProductor {
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
