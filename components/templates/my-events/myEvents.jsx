import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Input from '../../atoms/input/input';
import InputGroup from '../../molecules/input-group/inputGroup';
import Header from '../../organisms/default-header/defaultHeader';
import Dialog from '../../modals/dialog/dialog';
import Store from '../../../store/Store';
import {
  fetchEventsData, initialLoading,
} from './myEvents.controller';
import EventCard from './components/my-event-card/myEventCard';
import {
  Container, GlobalForm, LocationContainer, InputIconWrapper,
  SearchIcon, EventsContainer, searchStyle, Icon,
  AddButton, searchInputStyle,
} from './myEvents.style';

/**
 * This render the my events components. The my events component, render events created by
 * logged productor profile
 */
const MyEventsPage = () => {
  const router = useRouter();
  const { state } = useContext(Store);
  const [loading, setLoading] = useState({ ...initialLoading });
  const [events, setEvents] = useState([]);
  const [dialog, setDialog] = useState({});

  useEffect(() => {
    if (state.user) {
      fetchEventsData({
        setEvents, loading, setLoading,
        setDialog, state, user: state.user,
      });
    }
  }, [state.user]);

  return (
    <Container>
      <Header
        logged={!!state.user}
      />
      <GlobalForm>
        <LocationContainer />
        <InputGroup customStyle={searchStyle}>
          <InputIconWrapper>
            <SearchIcon
              src="/icons/search.svg"
            />
            <Input
              id="keyword"
              placeholder="Buscar"
              value={undefined}
              customStyle={searchInputStyle}
              onBlur={() => console.log('onBlur')}
              onChange={() => console.log('onChange')}
            />
          </InputIconWrapper>
        </InputGroup>
      </GlobalForm>
      <EventsContainer>
        {
          events.map(evt => (
            <EventCard
              customStyle={`
                margin: 0 5px 90px;
                max-width: 220px;
              `}
              user={state.user}
              event={evt}
              onClick={() => router.push('/events-curatorship')}
            />
          ))
        }
      </EventsContainer>
      <AddButton onClick={() => router.push('/register-event')}>
        <Icon src="/icons/plus.svg" />
        Adicionar evento
      </AddButton>
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

export default MyEventsPage;
