import {
  approveArtistSubscriptionOnOpportunity,
  approveProducerSubscriptionOnOpportunity,
  fetchEventData,
  reproveArtistSubscriptionOnOpportunity,
  reproveProducerSubscriptionOnOpportunity,
  resetArtistSubscriptionOnOpportunity,
  resetProducerSubscriptionOnOpportunity
} from './curatorship.repository';

export const getOpportunity = async (id, setOpportunity) => {
  const response = await fetchEventData(id);
  setOpportunity(response.data.oneEvent);
};

export const approveArtist = async (artistId, opportunityId, setOpportunity, setSelectedArtist) => {
  await approveArtistSubscriptionOnOpportunity(opportunityId, artistId);

  const response = await fetchEventData(opportunityId);
  setOpportunity(response.data.oneEvent);
  setSelectedArtist(null);
};

export const reproveArtist = async (artistId, opportunityId, setOpportunity, setSelectedArtist) => {
  await reproveArtistSubscriptionOnOpportunity(opportunityId, artistId);

  const response = await fetchEventData(opportunityId);
  setOpportunity(response.data.oneEvent);
  setSelectedArtist(null);
};

export const resetArtist = async (artistId, opportunityId, setOpportunity, setSelectedArtist) => {
  await resetArtistSubscriptionOnOpportunity(opportunityId, artistId);

  const response = await fetchEventData(opportunityId);
  setOpportunity(response.data.oneEvent);
  setSelectedArtist(null);
};

export const approveProducer = async (
  producerId,
  opportunityId,
  setOpportunity,
  setSelectedProducer
) => {
  await approveProducerSubscriptionOnOpportunity(opportunityId, producerId);

  const response = await fetchEventData(opportunityId);
  setOpportunity(response.data.oneEvent);
  setSelectedProducer(null);
};

export const reproveProducer = async (
  producerId,
  opportunityId,
  setOpportunity,
  setSelectedProducer
) => {
  await reproveProducerSubscriptionOnOpportunity(opportunityId, producerId);

  const response = await fetchEventData(opportunityId);
  setOpportunity(response.data.oneEvent);
  setSelectedProducer(null);
};

export const resetProducer = async (
  producerId,
  opportunityId,
  setOpportunity,
  setSelectedProducer
) => {
  await resetProducerSubscriptionOnOpportunity(opportunityId, producerId);

  const response = await fetchEventData(opportunityId);
  setOpportunity(response.data.oneEvent);
  setSelectedProducer(null);
};
