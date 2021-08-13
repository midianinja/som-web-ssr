import { client } from '../../../libs/apollo.lib';

import { searchArtistsQuery, searchOpportunitiesQuery, searchProducersQuery } from './search.query';

export const searchOpportunities = (text) =>
  client().query({
    query: searchOpportunitiesQuery,
    variables: { text }
  });

export const searchArtists = (text) =>
  client().query({
    query: searchArtistsQuery,
    variables: { text }
  });

export const searchProducers = (text) =>
  client().query({
    query: searchProducersQuery,
    variables: { text }
  });
