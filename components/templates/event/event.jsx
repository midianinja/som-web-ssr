import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import moment from 'moment';
import Store from '../../../store/Store';
import Cover from '../../atoms/cover/cover';
import EventText from '../../atoms/event-text/eventText';
import EventConditions from '../../molecules/event-conditions/eventConditions';
import EventInfo from '../../organisms/event-info/eventInfo';
import Header from '../../organisms/default-header/defaultHeader';
import Dialog from '../../modals/dialog/dialog';
import SubscribedArtists from './components/subscribed-artists/subscribedArtists';
import ProductorCard from './components/productor-card/productorCard';
import {
  fetchEventData,
  initialLoading,
  subscribeAction,
  unsubscribeAction
} from './event.controller';
import {
  Container,
  ProductorCardWrapper,
  CoverWrapper,
  HeaderWrapper,
  Content,
  ColumnWrapper,
  EventImage
} from './event.style';

const unixTime = (unixtime) => new Date(+unixtime).toISOString().slice(0, 19);

const EventPage = () => {
  const router = useRouter();
  const { label } = router.query;
  const [loading, setLoading] = useState({ ...initialLoading });
  const [event, setEvent] = useState(null);
  const [dialog, setDialog] = useState({});
  const { state: myState } = useContext(Store);

  useEffect(() => {
    fetchEventData(label, setEvent, loading, setLoading, setDialog, router);
  }, []);

  if (!event) {
    return (
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
    );
  }

  const eventPlace = {
    city: event.location.city,
    state: event.location.state,
    district: event.location.district,
    address: `${event.location.address} ${event.location.number}`,
    complement: event.location.complement
  };

  const eventConditions = {
    has_local_transportation: event.has_local_transportation,
    has_accommodation: event.has_accommodation,
    has_food: event.has_food,
    has_money_paid: event.has_money_paid
  };

  const closingDateInstance = moment(new Date(unixTime(event.subscribe_closing_date)));
  const todayInstance = moment();

  const closingDiffDays = Math.floor(closingDateInstance.diff(todayInstance, 'days', true));
  const closingDiffHours = Math.ceil(closingDateInstance.diff(todayInstance, 'hours', true));

  const isClosingSubscribe = closingDiffDays <= 0 && closingDiffHours <= 0;
  const isSubscribed = (u, e) => {
    let subscribed = false;

    if (u && u.artist) {
      if (
        e.subscribers.find(({ id }) => u.artist.id === id) ||
        e.approved_artists.find(({ id }) => u.artist.id === id)
      ) {
        subscribed = true;
      }
    }

    return subscribed;
  };

  return (
    <Store.Consumer>
      {({ state, dispatch }) => (
        <Container>
          <Header logged={!!state.user} />
          <CoverWrapper>
            <Cover cover={event.cover.mimified}>
              <EventImage src={event.cover.mimified} alt="Cover do Evento" />
              <HeaderWrapper />
            </Cover>
          </CoverWrapper>
          <Content>
            <EventInfo
              subscribed={isSubscribed(state.user, event)}
              name={event.name}
              date={event.event_date}
              place={eventPlace}
              isClosingSubscribe={isClosingSubscribe}
              diffDays={closingDiffDays}
              diffHours={closingDiffHours}
              loggedAs={myState.connectionType}
              subscribers={event.subscribers.length}
              subscribeAction={() =>
                subscribeAction(
                  state.auth,
                  state.user,
                  event,
                  dispatch,
                  setDialog,
                  setEvent,
                  router,
                  event
                )
              }
              unsubscribeAction={() => unsubscribeAction(state.user, event, setEvent)}
            />
            <ColumnWrapper>
              <EventText text={event.about} />
              <EventConditions conditions={eventConditions} />
              <ProductorCardWrapper>
                <ProductorCard productor={event.productor} router={router} />
              </ProductorCardWrapper>
              <SubscribedArtists
                artistClick={(artistId) => router.push(`/artist/${artistId}`)}
                artists={event.subscribers}
                approveds={event.approved_artists}
              />
            </ColumnWrapper>
          </Content>
          {dialog.title ? (
            <Dialog
              closeAction={() => setDialog({})}
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
      )}
    </Store.Consumer>
  );
};

EventPage.propTypes = {};

export default EventPage;