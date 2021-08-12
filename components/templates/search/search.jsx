/* eslint-disable react/jsx-key */
import EventCard from '../../molecules/event-card/eventCard';
import React, { useState, useContext, useEffect } from 'react';
import Store from '../../../store/Store';
import { useRouter } from 'next/router';
import { fetchEventsFromSearch } from './search.controller';

import {
  Title,
  TextResult,
  EventsContainer,
  buttonStyl,
  Linha,
  ResultSection,
  Container
} from './search.style';
import PrimaryButton from '../../atoms/primary-button/primaryButton';

/**
 * This render the my search components. The my search component, render events, producers and artists created by
 * logged productor profile
 */
const Search = () => {
  const [events, setEvents] = useState([]);
  const { state } = useContext(Store);
  const { query, router } = useRouter();

  console.log('value: ' + query.q);

  const text = query.q;

  useEffect(() => {
    if (!events.length) {
      fetchEventsFromSearch(text);
    }
  }, [events]);

  return (
    <>
      <Container>
        <Title>Busca</Title>
        <PrimaryButton customStyle={buttonStyl}>12 Oportunidades</PrimaryButton>
        <PrimaryButton customStyle={buttonStyl}>0 Artistas</PrimaryButton>
        <PrimaryButton customStyle={buttonStyl}>2 Produtores</PrimaryButton>
        <Linha>
          <ResultSection>
            <TextResult big>0 Artistas</TextResult>

            <EventsContainer>
              {events.map((evt) => (
                <EventCard
                  customStyle="margin-bottom: 24px;"
                  user={state.user}
                  onClick={() => router.push(`/event/${evt.id}`)}
                />
              ))}
            </EventsContainer>
          </ResultSection>
        </Linha>
      </Container>
    </>
  );
};
export default Search;
