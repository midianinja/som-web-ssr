import { client } from '../../../libs/apollo.lib';
import { subscribe, unsubscribe } from './event.mutations';

export const subscribeEvent = (id, artistID) =>
  client().mutate({
    mutation: subscribe,
    variables: { id, artistID }
  });

export const unsubscribeEvent = (id, artistID) =>
  client().mutate({
    mutation: unsubscribe,
    variables: { id, artistID }
  });
