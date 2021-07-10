import { gql } from 'apollo-boost';

export const createUserMutation = gql`
  mutation createUser($user: UserInput!) {
    createUser(user: $user) {
      id
    }
  }
`;

export default createUserMutation;
