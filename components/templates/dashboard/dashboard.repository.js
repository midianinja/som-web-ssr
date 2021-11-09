import { client } from '../../../libs/apollo.lib';
import { getAllOpportunitiesQuery, getArtistQuery, getProducerQuery } from './dashboard.queries';

export const getOpportunities = (id) =>
  client().query({
    query: getAllOpportunitiesQuery,
    variables: {
      event: { productor: id },
      paginator: {
        limit: 20
      }
    }
  });

export const getArtistSubscribedOpportunities = (id) =>
  client().query({
    query: getArtistQuery,
    variables: { id }
  });

  export const getProducerSubscribedOpportunities = (id) =>
  client().query({
    query: getProducerQuery,
    variables: { id }
  });
