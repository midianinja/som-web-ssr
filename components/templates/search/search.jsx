import React, { useState, useContext, useEffect } from 'react';
import EventCard from '../../molecules/event-card/eventCard';
import ArtistCard from '../../molecules/artist-card/artistCard';
import ProducerCard from '../../molecules/producer-card/producerCard';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import Store from '../../../store/Store';
import { useRouter } from 'next/router';
import DefaultHeader from '../../organisms/default-header/defaultHeader';
import {
  fetchOpportunitiesFromSearch,
  fetchArtistFromSearch,
  fetchProducersFromSearch
} from './search.controller';
import {
  Title,
  buttonStyl,
  ResultSection,
  Container,
  HeaderWrapper,
  ResultScope,
  Subtitle,
  NotFoundResults,
  NotFoundText,
  ListResults
} from './search.style';

/**
 * This render the my search components. The my search component, render events, producers and artists created by
 * logged productor profile
 */
const Search = () => {
  const { state } = useContext(Store);
  const [opportunities, setOpportunities] = useState([]);
  const [artists, setArtists] = useState([]);
  const [producers, setProducers] = useState([]);
  const router = useRouter();

  const makeNewSearch = () => {
    document.querySelector('#somSearch').focus();
  };

  useEffect(() => {
    fetchOpportunitiesFromSearch(router.query.q, setOpportunities);
    fetchArtistFromSearch(router.query.q, setArtists);
    fetchProducersFromSearch(router.query.q, setProducers);
  }, [router.query.q]);

  return (
    <Container>
      <DefaultHeader />

      <HeaderWrapper>
        <Title>Busca</Title>

        <PrimaryButton customStyle={buttonStyl}>{opportunities.length} Oportunidades</PrimaryButton>
        <PrimaryButton customStyle={buttonStyl}>{artists.length} Artistas</PrimaryButton>
        <PrimaryButton customStyle={buttonStyl}>{producers.length} Produtores</PrimaryButton>
      </HeaderWrapper>

      <ResultSection>
        <ResultScope>
          <Subtitle>{artists.length} Artistas</Subtitle>
        </ResultScope>
        {!artists.length ? (
          <NotFoundResults>
            <NotFoundText>Nenhum resultado encontrado :(</NotFoundText>
            <PrimaryButton onClick={makeNewSearch} customStyle={buttonStyl}>
              Fazer outra busca
            </PrimaryButton>
          </NotFoundResults>
        ) : (
          <ListResults>
            {artists.map((artist) => (
              <ArtistCard
                key={artist.id}
                artists={artist}
                followersAmount={artist.follows.length}
                isUserArtist={artist.id === state.user?.artist?.id}
              />
            ))}
          </ListResults>
        )}
      </ResultSection>
      <ResultSection>
        <ResultScope>
          <Subtitle>{producers.length} Produtores</Subtitle>
        </ResultScope>
        {!producers.length ? (
          <NotFoundResults>
            <NotFoundText>Nenhum resultado encontrado :(</NotFoundText>
            <PrimaryButton onClick={makeNewSearch} customStyle={buttonStyl}>
              Fazer outra busca
            </PrimaryButton>
          </NotFoundResults>
        ) : (
          <ListResults>
            {producers.map((producer) => (
              <ProducerCard
                key={producer.id}
                producers={producer}
                followersAmount={producer?.followers.length}
                isUserProducer={producer.id === state?.user?.productor?.id}
              />
            ))}
          </ListResults>
        )}
      </ResultSection>
      <ResultSection>
        <ResultScope>
          <Subtitle>{opportunities.length} Oportunidades</Subtitle>
        </ResultScope>
        {!opportunities.length ? (
          <NotFoundResults>
            <NotFoundText>Nenhum resultado encontrado :(</NotFoundText>
            <PrimaryButton onClick={makeNewSearch} customStyle={buttonStyl}>
              Fazer outra busca
            </PrimaryButton>
          </NotFoundResults>
        ) : (
          <ListResults>
            {opportunities.map(
              (opportunity) => (
                console.log(opportunity.id),
                (
                  <EventCard
                    onClick={() => router.push(`/event/${opportunity.id}`)}
                    event={opportunity}
                  />
                )
              )
            )}
          </ListResults>
        )}
      </ResultSection>
    </Container>
  );
};
export default Search;
