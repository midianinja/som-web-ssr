import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Store from '../../../store/Store';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import SlimButton from '../../atoms/slim-button/slimButton';
import Header from '../../organisms/default-header/defaultHeader';
import ArtistCurationshipModal from '../../modals/artist-curationship/artist-curationship';
import ProducerCurationshipModal from '../../modals/producer-curationship/producer-curationship';
import CuratorshipHeader from './components/curatorship-header/curatorship-header';
import CuratorshipList from './components/curatorship-list/curatorship-list';
import { Page, Main, FilterWrapper, FilterItem } from './curatorship.style';
import {
  approveArtist,
  approveProducer,
  getOpportunity,
  reproveArtist,
  reproveProducer,
  resetArtist,
  resetProducer
} from './curatorship.controller';

const Curatorship = () => {
  const [opportunity, setOpportunity] = useState(null);
  const [showArtists, setShowArtists] = useState(true);
  const [showProducers, setShowProducers] = useState(true);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedProducer, setSelectedProducer] = useState(null);
  const router = useRouter();
  const { state } = useContext(Store);

  useEffect(() => {
    if (!state.user?.productor) {
      router.push('/');
    } else if (
      state.user?.productor?.events?.findIndex(({ id }) => id === router.query.label) === -1
    ) {
      router.push('/dashboard');
    } else {
      getOpportunity(router.query.label, setOpportunity);
    }
  }, [state.user]);

  useEffect(() => {
    if (opportunity && +opportunity?.subscribe_closing_date < Date.now()) {
      router.push('/dashboard');
    }
  }, [opportunity]);

  let openedSubscriptions = [];
  if (opportunity) {
    if (showArtists) {
      openedSubscriptions = openedSubscriptions.concat(
        opportunity.subscribers.map((s) => ({ ...s, type: 'artist' }))
      );
    }

    if (showProducers) {
      openedSubscriptions = openedSubscriptions.concat(
        opportunity.subscribed_productors.map((s) => ({ ...s, type: 'producer' }))
      );
    }
  }

  let evaluatedSubscriptions = [];
  if (opportunity) {
    if (showArtists) {
      evaluatedSubscriptions = evaluatedSubscriptions.concat(
        opportunity.approved_artists.map((s) => ({ ...s, type: 'artist', approved: 'approved' }))
      );

      evaluatedSubscriptions = evaluatedSubscriptions.concat(
        opportunity.reproved_artists.map((s) => ({ ...s, type: 'artist', approved: 'reproved' }))
      );
    }

    if (showProducers) {
      evaluatedSubscriptions = evaluatedSubscriptions.concat(
        opportunity.approved_productors.map((s) => ({
          ...s,
          type: 'producer',
          approved: 'approved'
        }))
      );

      evaluatedSubscriptions = evaluatedSubscriptions.concat(
        opportunity.reproved_productors.map((s) => ({
          ...s,
          type: 'producer',
          approved: 'reproved'
        }))
      );
    }
  }

  return (
    <Page>
      <Header logged={!!state.user} />
      <CuratorshipHeader
        image={opportunity?.photo?.mimified}
        title={opportunity?.name}
        city={opportunity?.location.city}
        state={opportunity?.location.state}
        eventDate={+opportunity?.event_date}
        subscribeClosingDate={+opportunity?.subscribe_closing_date}
      />
      <Main>
        <FilterWrapper>
          <FilterItem>
            {showArtists ? (
              <PrimaryButton color="white" onClick={() => setShowArtists(!showArtists)}>
                Artistas
              </PrimaryButton>
            ) : (
              <SlimButton color="white" onClick={() => setShowArtists(!showArtists)}>
                Artistas
              </SlimButton>
            )}
          </FilterItem>
          <FilterItem>
            {showProducers ? (
              <PrimaryButton color="white" onClick={() => setShowProducers(!showProducers)}>
                Produtores
              </PrimaryButton>
            ) : (
              <SlimButton color="white" onClick={() => setShowProducers(!showProducers)}>
                Produtores
              </SlimButton>
            )}
          </FilterItem>
        </FilterWrapper>
        <CuratorshipList
          openedSubscriptions={openedSubscriptions}
          evaluatedSubscriptions={evaluatedSubscriptions}
          setSelectedArtist={setSelectedArtist}
          setSelectedProducer={setSelectedProducer}
        />
      </Main>

      <ArtistCurationshipModal
        reproveAction={() => {
          reproveArtist(selectedArtist.id, opportunity.id, setOpportunity, setSelectedArtist);
        }}
        approveAction={() => {
          approveArtist(selectedArtist.id, opportunity.id, setOpportunity, setSelectedArtist);
        }}
        resetSubscriptionAction={() => {
          resetArtist(selectedArtist.id, opportunity.id, setOpportunity, setSelectedArtist);
        }}
        artist={selectedArtist}
        opportunity={opportunity}
        closeModal={() => setSelectedArtist(null)}
      />

      <ArtistCurationshipModal
        reproveAction={() => {
          reproveArtist(selectedArtist.id, opportunity.id, setOpportunity, setSelectedArtist);
        }}
        approveAction={() => {
          approveArtist(selectedArtist.id, opportunity.id, setOpportunity, setSelectedArtist);
        }}
        resetSubscriptionAction={() => {
          resetArtist(selectedArtist.id, opportunity.id, setOpportunity, setSelectedArtist);
        }}
        artist={selectedArtist}
        opportunity={opportunity}
        closeModal={() => setSelectedArtist(null)}
      />

      <ProducerCurationshipModal
        reproveAction={() => {
          reproveProducer(selectedProducer.id, opportunity.id, setOpportunity, setSelectedProducer);
        }}
        approveAction={() => {
          approveProducer(selectedProducer.id, opportunity.id, setOpportunity, setSelectedProducer);
        }}
        resetSubscriptionAction={() => {
          resetProducer(selectedProducer.id, opportunity.id, setOpportunity, setSelectedProducer);
        }}
        producer={selectedProducer}
        opportunity={opportunity}
        closeModal={() => setSelectedProducer(null)}
      />
    </Page>
  );
};

export default Curatorship;
