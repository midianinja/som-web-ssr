import { client } from '../../../libs/apollo.lib';
import {
  createProductorMutation,
  updateProductorMutation,
  createLocationMutation,
  updateLocationMutation
} from './productor.mutations';

export const createProductor = (productor) =>
  client().mutate({
    mutation: createProductorMutation,
    variables: {
      productor
    }
  });

export const updateProductor = (id, productor) =>
  client().mutate({
    mutation: updateProductorMutation,
    variables: {
      productor_id: id,
      productor
    }
  });

export const createLocation = (location) =>
  client().mutate({
    mutation: createLocationMutation,
    variables: {
      location
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
