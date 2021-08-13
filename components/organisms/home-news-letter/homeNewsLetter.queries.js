import { gql } from 'apollo-boost';

export const getOneNewsLatterQuery = gql`
  query oneNewsLatter($newsLatter: NewsLatterInput) {
    oneNewsLatter(newsLatter: $newsLatter) {
      id
      email
    }
  }
`;
