import { gql } from 'apollo-boost';

export const oneProductorQuery = gql`
  query($productor: ProductorInput) {
    oneProductor(productor: $productor) {
      id
      photo
      name
      description
      username
      musical_styles {
        id
        name
      }
      occupations {
        id
        label
        order
      }
      events {
        id
        event_date
        location {
          address
          city
          state
          district
        }
        name
        subscribe_closing_date
        subscribers {
          id
        }
        approved_artists {
          id
        }
        reproved_artists {
          id
        }
        cover {
          mimified
          thumbnail
        }
        photo {
          mimified
          thumbnail
        }
      }
      contact_email
      instagram
      whatsapp
      telegram
      facebook
      twitter
      youtube
      follows {
        id
      }
      location {
        city
        state
        country
      }
    }
  }
`;

export default oneProductorQuery;
