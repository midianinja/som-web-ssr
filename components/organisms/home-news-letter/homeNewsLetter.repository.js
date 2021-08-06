import { client } from '../../../libs/apollo.lib';
import { createNewsLatterMutation } from './homeNewsLetter.mutations';
import { getOneNewsLatterQuery } from './homeNewsLetter.queries';

export const createNewsLetter = (newsLatter) =>
  client().mutate({
    mutation: createNewsLatterMutation,
    variables: {
      newsLatter
    }
  });

export const getOneNewsLatter = (newsLatter) =>
  client().query({
    query: getOneNewsLatterQuery,
    variables: {
      newsLatter
    }
  });
