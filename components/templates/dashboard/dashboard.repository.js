import { client } from '../../../libs/apollo.lib';
import { getAllOpportunitiesQuery } from './dashboard.queries';

export const getOpportunities = (id) =>
  client().query({
    query: getAllOpportunitiesQuery,
    variables: {
      event: id,
      paginator: {
        limit: 20
      }
    }
  });

export const getSubscribedOpportunities = (id) =>
  client().query({
    query: getAllOpportunitiesQuery,
    variables: {
      event: { subscri: id },
      paginator: {
        limit: 20
      }
    }
  });
