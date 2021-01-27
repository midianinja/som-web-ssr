import { client } from '../../libs/apollo.lib';
import { oneUserQuery } from './main.query';
import { createUserMutation } from './main.mutation';

export const getUser = (ida) =>
  client().query({
    query: oneUserQuery,
    variables: {
      ida
    }
  });

export const createUserSOM = (ida) =>
  client().mutate({
    mutation: createUserMutation,
    variables: {
      user: { ida, likes: [] }
    }
  });

export default getUser;
