import { gql } from 'apollo-boost';

export const getOneEventQuery = gql`
  query oneEvent($id: ID!) {
    oneEvent(id: $id) {
      id
      name
      about
      event_date
      end_event_date
      approved_productors {
        id
        name
        username
        photo
        description
      }
      reproved_productors {
        id
        name
        photo
        username
        description
      }
      subscribed_productors {
        id
        name
        photo
        username
        description
      }
      location {
        district
        city
        state
      }
      subscribers {
        id
        avatar_image {
          mimified
          thumbnail
        }
        name
        username
        about
      }
      approved_artists {
        id
        avatar_image {
          mimified
          thumbnail
        }
        name
        username
        about
      }
      reproved_artists {
        id
        avatar_image {
          mimified
          thumbnail
        }
        name
        username
        about
      }
      subscribe_closing_date
      cover {
        thumbnail
        mimified
      }
      photo {
        thumbnail
        mimified
      }
      productor {
        id
      }
    }
  }
`;

export const eventType = `
  id
  name
  subscribers {
    id
    about
    avatar_image {
      mimified
      thumbnail
    }
    name
  }
  approved_artists {
    id
    about
    avatar_image {
      mimified
      thumbnail
    }
    name
  }
  reproved_artists {
    id
    about
    avatar_image {
      mimified
      thumbnail
    }
    name
  }
  cover {
    mimified
  }
  photo {
    mimified
  }
  productor {
    id
  }
`;
