import { client } from '../../../libs/apollo.lib';
import {
  subscribe,
  unsubscribe,
  subscribeProductorOnEventMutation,
  unsubscribeProductorOnEventMutation
} from './event.mutations';

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

export const subscribeProductorOnEvent = (id, productorId) =>
  client().mutate({
    mutation: subscribeProductorOnEventMutation,
    variables: { id, productor_id: productorId }
  });

export const unsubscribeProductorOnEvent = (id, productorId) =>
  client().mutate({
    mutation: unsubscribeProductorOnEventMutation,
    variables: { id, productor_id: productorId }
  });
