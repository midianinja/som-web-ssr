import { getOpportunities } from './dashboard.repository';

export const load = async ({ dataQuery, setMyOpportunities, setSubscribedOpportunities }) => {
  if (dataQuery.id) {
    const opportunitiersResponse = await getOpportunities(dataQuery.id);
    setMyOpportunities(opportunitiersResponse.data.allEvents);
  }
  if (dataQuery.sub) {
    const opportunitiersSubResponse = await getOpportunities(dataQuery.sub);
    setSubscribedOpportunities(opportunitiersSubResponse.data.allEvents);
  }
};
