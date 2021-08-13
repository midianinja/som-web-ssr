import { gql } from 'apollo-boost';

export const createNewsLatterMutation = gql`
  mutation($newsLatter: NewsLatterInput!) {
    createNewsLatter(newsLatter: $newsLatter) {
      id
      email
    }
  }
`;
