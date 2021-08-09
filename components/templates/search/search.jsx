/* eslint-disable react/jsx-key */
import { TextOportunidades } from '../home/components/dashboard/dashboard.style';

import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { accentFold } from '../../../utils/string.utils';

import Header from '../../organisms/default-header/defaultHeader';
import Dialog from '../../modals/dialog/dialog';
import Store from '../../../store/Store';
// import { fetchEventsData, initialLoading } from './myEvents.controller';
import EventCard from '../my-events/components/my-event-card/myEventCard';
import { Container, GlobalForm, LocationContainer, EventsContainer } from './search.style';

// const Search = () => <TextOportunidades big>Busca</TextOportunidades>;

const Search = ({ router, events, searchText, user }) =>
  events
    .filter((event) => {
      let matched = false;
      const text = accentFold(searchText);
      const searchExpression = new RegExp(`${text}`, 'gi');

      if (searchExpression.test(accentFold(event.name))) matched = true;
      if (searchExpression.test(accentFold(event.location.address))) matched = true;
      if (searchExpression.test(accentFold(event.location.city))) matched = true;
      if (searchExpression.test(accentFold(event.location.state))) matched = true;
      if (searchExpression.test(accentFold(event.location.district))) matched = true;

      return matched;
    })
    .map((event) => (
      <EventCard
        customStyle={`
          margin: 0 5px 90px;
          max-width: 220px;
        `}
        user={user}
        event={event}
        onClick={() => router.push('/events-curatorship')}
      />
    ));

/**
 * This render the my events components. The my events component, render events created by
 * logged productor profile
 */
const SearchPage = () => {
  const router = useRouter();
  const { state } = useContext(Store);
  const [loading, setLoading] = useState({ ...initialLoading });
  const [searchText, setSearchText] = useState('');
  const [events, setEvents] = useState([]);
  const [dialog, setDialog] = useState({});

  useEffect(() => {
    if (state.user) {
      console.log('oi');
    //   fetchEventsData({
    //     setEvents,
    //     loading,
    //     setLoading,
    //     setDialog,
    //     state,
    //     user: state.user
    //   });
    }
  }, [state.user]);

  return (
    <Container>
      <Header logged={!!state.user} />
      <GlobalForm>
        <LocationContainer />
      </GlobalForm>
      <TextOportunidades big>Busca</TextOportunidades>
      <EventsContainer>
        {Search({
          router,
          events,
          user: state.user,
          searchText
        })}
      </EventsContainer>

      <Container>
        {dialog.title ? (
          <Dialog
            isOpen
            title={dialog.title}
            icon={dialog.icon}
            description={dialog.description}
            agreeText={dialog.agreeText}
            disagreeText={dialog.disagreeText}
            confirmAction={dialog.confirmAction}
            disagreeAction={dialog.disagreeAction}
          />
        ) : null}
      </Container>
    </Container>
  );
};
export default Search;
