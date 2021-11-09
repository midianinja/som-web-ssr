import { getOpportunities, getArtistSubscribedOpportunities, getProducerSubscribedOpportunities } from './dashboard.repository';

export const load = async ({ id, connectionType, setMyOpportunities, setSubscribedOpportunities }) => {  
  if (connectionType === 'artist') {
    const subscribedOpportunitiesResponse = await getArtistSubscribedOpportunities(id);

    let opportunities = [];
    opportunities = opportunities
      .concat(subscribedOpportunitiesResponse.data.oneArtist.approved_events.map((o) => ({ ...o, status: 'approved' })))
      .concat(subscribedOpportunitiesResponse.data.oneArtist.recused_events.map((o) => ({ ...o, status: 'refused' })))
      .concat(subscribedOpportunitiesResponse.data.oneArtist.subscribed_events.map((o) => ({ ...o, status: 'subscribed' })));
    
    opportunities = opportunities.sort((a, b) => a.event_date > b.event_data ? 1 : -1);
    setSubscribedOpportunities(opportunities);
  } else {
    const opportunitiersResponse = await getOpportunities(id);
    setMyOpportunities(opportunitiersResponse.data.allEvents);

    const subscribedOpportunitiesResponse = await getProducerSubscribedOpportunities(id);
    console.log(subscribedOpportunitiesResponse)
    let opportunities = [];
    opportunities = opportunities
      .concat(subscribedOpportunitiesResponse.data.oneProductor.approved_opportunities.map((o) => ({ ...o, status: 'approved' })))
      .concat(subscribedOpportunitiesResponse.data.oneProductor.refused_opportunities.map((o) => ({ ...o, status: 'refused' })))
      .concat(subscribedOpportunitiesResponse.data.oneProductor.subscribed_opportunities.map((o) => ({ ...o, status: 'subscribed' })));
    
    opportunities = opportunities.sort((a, b) => a.event_date > b.event_data ? 1 : -1);
    setSubscribedOpportunities(opportunities);
  }
};
