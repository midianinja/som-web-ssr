import { gql } from 'apollo-boost';

export const getOneEventQuery = gql`
  query oneEvent($id: ID!) {
    oneEvent(id: $id) {
      id
      name
      about
      event_date
      has_food
      has_money_paid
      has_accommodation
      has_city_transportation
      has_local_transportation
      approved_productors {
        id
        name
        photo
        description
      }
      reproved_productors {
        id
        name
        photo
        description
      }
      subscribed_productors {
        id
        name
        photo
        description
      }
      location {
        number
        address
        district
        city
        state
        complement
      }
      subscribers {
        id
        avatar_image {
          mimified
          thumbnail
        }
        name
      }
      approved_artists {
        id
        avatar_image {
          mimified
          thumbnail
        }
        name
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
        photo
        name
        description
        followers {
          id
        }
        following {
          id
        }
        location {
          city
          state
        }
      }
    }
  }
`;

export const getAssociatedEvents = '';
