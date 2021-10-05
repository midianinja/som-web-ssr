import { gql } from 'apollo-boost';

export const followMutation = gql`
  mutation($id: String!, $user_id: String!) {
    followProductor(id: $id, user_id: $user_id) {
      name
      follows {
        id
      }
    }
  }
`;

export const unfollowMutation = gql`
  mutation($id: String!, $user_id: String!) {
    unfollowProductor(id: $id, user_id: $user_id) {
      name
      follows {
        id
      }
    }
  }
`;
