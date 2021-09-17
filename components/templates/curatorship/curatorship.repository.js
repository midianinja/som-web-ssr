import { client } from '../../../libs/apollo.lib';
import { getOneEventQuery } from './curatorship.queries';
import {
  approveArtistMutation,
  approveProducerMutation,
  reproveArtistMutation,
  reproveProducerMutation,
  resetProducerSubscriptionMutation,
  resetSubscriptionMutation
} from './curatorship.mutations';

export const fetchEventData = (id) =>
  client().query({
    query: getOneEventQuery,
    variables: { id }
  });

export const approveArtistSubscriptionOnOpportunity = (eventId, artistId) =>
  client().mutate({
    mutation: approveArtistMutation,
    variables: {
      event_id: eventId,
      artist_id: artistId
    }
  });

export const reproveArtistSubscriptionOnOpportunity = (eventId, artistId) =>
  client().mutate({
    mutation: reproveArtistMutation,
    variables: {
      event_id: eventId,
      artist_id: artistId
    }
  });

export const resetArtistSubscriptionOnOpportunity = (eventId, artistId) =>
  client().mutate({
    mutation: resetSubscriptionMutation,
    variables: {
      event_id: eventId,
      artist_id: artistId
    }
  });

export const approveProducerSubscriptionOnOpportunity = (eventId, producerId) =>
  client().mutate({
    mutation: approveProducerMutation,
    variables: {
      event_id: eventId,
      producer_id: producerId
    }
  });

export const reproveProducerSubscriptionOnOpportunity = (eventId, producerId) =>
  client().mutate({
    mutation: reproveProducerMutation,
    variables: {
      event_id: eventId,
      producer_id: producerId
    }
  });

export const resetProducerSubscriptionOnOpportunity = (eventId, producerId) =>
  client().mutate({
    mutation: resetProducerSubscriptionMutation,
    variables: {
      event_id: eventId,
      producer_id: producerId
    }
  });
