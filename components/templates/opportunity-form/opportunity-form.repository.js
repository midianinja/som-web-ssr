import { client } from '../../../libs/apollo.lib';
import {
  createEventMutation,
  createLocationMutation,
  updateEventMutation,
  updateLocationMutation
} from './opportunity-form.mutation';
import { getOneEventQuery } from './opportunity-form.queries';

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

export const updateEvent = (id, event) =>
  client().mutate({
    mutation: updateEventMutation,
    variables: {
      id,
      event
    }
  });

export const updateLocation = (id, location) =>
  client().mutate({
    mutation: updateLocationMutation,
    variables: {
      id,
      location
    }
  });

export const getEvent = (id) =>
  client().query({
    query: getOneEventQuery,
    variables: { id }
  });
