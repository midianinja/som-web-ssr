import { getOpportunities } from './dashboard.repository';

export const load = async ({ id, setMyOpportunities }) => {
  const opportunitiersResponse = await getOpportunities(id);
  setMyOpportunities(opportunitiersResponse.data.allEvents);
};
