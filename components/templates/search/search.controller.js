import { searchArtists, searchOpportunities, searchProducers } from './search.repository';

export const fetchOpportunitiesFromSearch = async (text, setOpportunities) => {
  const opportunitiesResponse = await searchOpportunities(text);

  setOpportunities(opportunitiesResponse.data.searchEvents);
};

export const fetchArtistFromSearch = async (text, setArtists) => {
  const artistsResponse = await searchArtists(text);

  setArtists(artistsResponse.data.newSearchArtists);
};

export const fetchProducersFromSearch = async (text, setProducers) => {
  const producersResponse = await searchProducers(text);

  setProducers(producersResponse.data.searchProducers);
};
