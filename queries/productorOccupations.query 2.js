import { gql } from 'apollo-boost';

export const oneProductorOccupationQuery = gql`
  query oneProductorOccupation($id: ID!) {
    oneProductorOccupation(id: $id) {
      id
      label
      order
    }
  }
`;

export const allProductorOccupationsQuery = gql`
  query {
    allProductorOccupations {
      id
      label
      order
    }
  }
`;