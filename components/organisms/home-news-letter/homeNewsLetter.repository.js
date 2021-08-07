import { client } from '../../../libs/apollo.lib';
import { createNewsLatterMutation } from './homeNewsLetter.mutations';

export const createNewsLetter = (newsLatter) =>
  client().mutate({
    mutation: createNewsLatterMutation,
    variables: {
      newsLatter
    }
  });
