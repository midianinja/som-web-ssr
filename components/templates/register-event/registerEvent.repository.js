import { client } from '../../../libs/apollo.lib';
import { createEventMutation, createLocationMutation } from './registerEvent.mutation';

export const createEvent = (event) =>
  client().mutate({
    mutation: createEventMutation,
    variables: {
      event
    }
  });

export const createLocation = (location) =>
  client().mutate({
    mutation: createLocationMutation,
    variables: {
      location
    }
  });
