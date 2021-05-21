import { gql } from 'apollo-boost';

const eventFragment = `
  id
  name
  about
  event_date
  has_food
  has_money_paid
  has_accommodation
  has_city_transportation
  has_local_transportation
  approved_productors {
    id
    name
    photo
    description
  }
  reproved_productors {
    id
    name
    photo
    description
  }
  subscribed_productors {
    id
    name
    photo
    description
  }
  location {
    number
    address
    district
    city
    state
    complement
  }
  subscribers {
    id
    avatar_image {
      mimified
      thumbnail
    }
    name
  }
  approved_artists {
    id
    avatar_image {
      mimified
      thumbnail
    }
    name
  }
  reproved_artists {
    id
    avatar_image {
      mimified
      thumbnail
    }
    name
  }
  subscribe_closing_date
  cover {
    thumbnail
    mimified
  }
  photo {
    thumbnail
    mimified
  }
  productor {
    id
    photo
    name
    description
    followers {
      id
    }
    following {
      id
    }
    location {
      city
      state
    }
  }
`;

export const subscribe = gql`
  mutation subscribe($id: String!, $artistID: String!) {
    subscribeEvent(id: $id, artistID: $artistID) {
      ${eventFragment}
    }
  }
`;

export const unsubscribe = gql`
  mutation unsubscribe($id: String!, $artistID: String!) {
    unsubscribeEvent(id: $id, artistID: $artistID) {
      ${eventFragment}
    }
  }
`;

export const subscribeProductorOnEventMutation = gql`
  mutation subscribeProductorOnEvent($id: String!, $productor_id: String!) {
    subscribeProductorOnEvent(id: $id, productor_id: $productor_id) {
      ${eventFragment}
    }
  }
`;

export const unsubscribeProductorOnEventMutation = gql`
  mutation unsubscribeProductorOnEvent($id: String!, $productor_id: String!) {
    unsubscribeProductorOnEvent(id: $id, productor_id: $productor_id) {
      ${eventFragment}
    }
  }
`;
