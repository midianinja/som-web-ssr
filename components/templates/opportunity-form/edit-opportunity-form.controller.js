import { getEvent } from './opportunity-form.repository';

export const loadOpportunity = async (id, setLoading, router, setOpportunity) => {
  setLoading(true);
  let opportunityResponse;

  try {
    opportunityResponse = await getEvent(id);
  } catch (err) {
    setLoading(false);
    router.push('/opportunity');
    return;
  }

  if (!opportunityResponse.data.oneEvent) {
    setLoading(false);
    router.push('/opportunity');
    return;
  }

  setOpportunity(opportunityResponse.data.oneEvent);
  setLoading(false);
};
