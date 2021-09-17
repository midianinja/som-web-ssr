import { gql } from 'apollo-boost';
import { eventType } from './curatorship.queries';

export const reproveArtistMutation = gql`
mutation reproveArtist(
  $event_id: String!
  $artist_id: String!
) {
  reproveArtist(
    event_id: $event_id
    artist_id: $artist_id
  ){
    ${eventType}
  }
}
`;

export const approveArtistMutation = gql`
  mutation aproveArtist(
    $event_id: String!
    $artist_id: String!
  ){
    aproveArtist(
      event_id: $event_id
      artist_id: $artist_id
    )
    {
      ${eventType}
    }
  }
`;

export const resetSubscriptionMutation = gql`
  mutation resetSubscriptionEvent(
    $event_id: String!
    $artist_id: String!
  ){
    resetSubscriptionEvent(
      event_id: $event_id
      artist_id: $artist_id
    )
    {
      ${eventType}
    }
  }
`;

export const reproveProducerMutation = gql`
  mutation reproveProducer(
    $event_id: String!
    $producer_id: String!
  ) {
    reproveProducer(
      event_id: $event_id
      producer_id: $producer_id
    ){
      ${eventType}
    }
  }
`;

export const approveProducerMutation = gql`
  mutation aproveProducer(
    $event_id: String!
    $producer_id: String!
  ){
    aproveProducer(
      event_id: $event_id
      producer_id: $producer_id
    )
    {
      ${eventType}
    }
  }
`;

export const resetProducerSubscriptionMutation = gql`
  mutation resetProducerSubscriptionEvent(
    $event_id: String!
    $producer_id: String!
  ){
    resetProducerSubscriptionEvent(
      event_id: $event_id
      producer_id: $producer_id
    )
    {
      ${eventType}
    }
  }
`;
