import { client } from '../../../libs/apollo.lib';
import { followMutation, unfollowMutation } from './artistProfile.mutations';

export const followArtist = (id, userId) =>
  client().mutate({
    mutation: followMutation,
    variables: {
      id,
      user_id: userId
    }
  });

export const unfollowArtist = (id, userId) =>
  client().mutate({
    mutation: unfollowMutation,
    variables: {
      id,
      user_id: userId
    }
  });
