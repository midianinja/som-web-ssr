import { client } from '../../../libs/apollo.lib';
import { followMutation, unfollowMutation } from './productorProfile.mutations';

export const followProductor = (id, userId) =>
  client().mutate({
    mutation: followMutation,
    variables: {
      id,
      user_id: userId
    }
  });

export const unfollowProductor = (id, userId) =>
  client().mutate({
    mutation: unfollowMutation,
    variables: {
      id,
      user_id: userId
    }
  });
