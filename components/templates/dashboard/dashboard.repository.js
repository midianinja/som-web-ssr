import { client } from '../../../libs/apollo.lib';
import { getAllOpportunitiesQuery } from './dashboard.queries';

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
