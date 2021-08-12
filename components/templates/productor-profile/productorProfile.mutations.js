import { gql } from 'apollo-boost';

export const followMutation = gql`
  mutation($user: ID!, $productor: ID!) {
    followProductor(user: $user, productor: $productor) {
      id
      follows {
        user {
          id
        }
      }
    }
  }
`;

export const unfollowMutation = gql`
  mutation($user: ID!, $productor: ID!) {
    unfollowProductor(user: $user, productor: $productor) {
      id
      follows {
        user {
          id
        }
      }
    }
  }
`;