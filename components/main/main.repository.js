import { client } from '../../libs/apollo.lib';
import { oneUserQuery } from './main.query';

export const getUser = ida => client().query({
  query: oneUserQuery,
  variables: {
    ida,
  },
});

export default getUser;
