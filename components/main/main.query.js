import { gql } from 'apollo-boost';

export const oneUserQuery = gql`
  query($ida: String) {
    oneUser(ida: $ida) {
      id
      ida
      type
      favorited_songs {
        id
        title
        url
      }
      artist {
        id
        members_number
        integrants
        telegram
        tec_rider
        stage_map
        tec_release
        whatsapp
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
        about
        musical_styles {
          name
          id
        }
        phone
        email
        songs {
          title
          id
          url
        }
        spotify_id
        id
        name
        avatar_image {
          mimified
          thumbnail
        }
        facebook
        twitter
        instagram
        youtube
      }
      productor {
        id
        name
        photo
        musical_styles {
          id
          name
        }
        occupations {
          id
          label
          order
        }
        location {
          id
          state
          city
          district
          country
          zipcode
          address
          number
        }
        description
        status
        cpf
        cnpj
        main_phone
        secondary_phone
        whatsapp
        telegram
        contact_email
        facebook
        twitter
        instagram
        youtube
      }
    }
  }
`;

export default oneUserQuery;
