import { gql } from 'apollo-boost';

export const getOneEventQuery = gql`
  query oneEvent($id: ID!) {
    oneEvent(id: $id) {
      id
      name
      about
      event_date
      end_event_date
      stream_url
      has_food
      has_money_paid
      has_accommodation
      has_city_transportation
      has_local_transportation
      is_to_productor
      is_to_artist
      is_online
      is_physical
      is_on_som
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
        username
      }
      approved_artists {
        id
        avatar_image {
          mimified
          thumbnail
        }
        name
        username
      }
      reproved_artists {
        id
        avatar_image {
          mimified
          thumbnail
        }
        name
        username
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
