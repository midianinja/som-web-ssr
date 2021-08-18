import { gql } from 'apollo-boost';

export const createProductorMutation = gql`
  mutation($productor: ProductorInput!) {
    createProductor(productor: $productor) {
      id
      name
      username
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
`;

export const updateProductorMutation = gql`
  mutation($productor_id: ID!, $productor: ProductorInput!) {
    updateProductor(productor_id: $productor_id, productor: $productor) {
      id
      name
      username
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
