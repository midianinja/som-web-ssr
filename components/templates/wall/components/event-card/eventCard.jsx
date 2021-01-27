import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EventDate from '../../../../atoms/event-date/eventDate';
import EventPlace from '../../../../atoms/event-place/eventPlace';
import SlimButton from '../../../../atoms/slim-button/slimButton';
import PrimaryButton from '../../../../atoms/primary-button/primaryButton';
import TagList from '../../../..//molecules/tag-list/tagList';
import {
  Wrapper,
  Container,
  View,
  ButtonWrapper,
  Image,
  Title,
  customButtomStyl,
  buttonStyl,
  tagListStyl,
  eventDetailsStyl,
  Space
} from './eventCard.style';

const isSubscribed = (event, user) => {
  if (!user || !user.artist) return false;
  const artistIsSubscribed = event.subscribers.find((subs) => {
    if (subs.id === user.artist.id) return true;
    return false;
  });
  return !!artistIsSubscribed;
};

const EventCard = ({
  event,
  customStyle,
  user,
  onClick,
  subscribeAction,
  unsubscribeAction,
  loggedAs
}) => {
  const [hover, setHover] = useState(false);
  const musicalStyles = event.music_styles ? event.music_styles : [];

  return (
    <Wrapper customStyle={customStyle}>
      <Container>
        <View>
          <View>
            <Image onClick={onClick} image={event.photo.mimified} />
            <TagList data={musicalStyles} customStyle={tagListStyl} />
          </View>
          <View customStyle={eventDetailsStyl}>
            <Title onClick={onClick}>{event.name}</Title>
            <EventDate
              day={new Date(+event.subscribe_closing_date).getDate()}
              month={new Date(+event.subscribe_closing_date).getMonth() + 1}
              year={new Date(+event.subscribe_closing_date).getFullYear()}
            />
            <Space />
            <EventPlace
              address={event.location.address}
              city={event.location.city}
              state={event.location.state}
              district={event.location.district}
            />
          </View>
        </View>
        <ButtonWrapper>
          {+event.subscribe_closing_date < new Date().getTime() ? (
            <PrimaryButton
              onFocus={() => null}
              onBlur={() => null}
              customStyle={buttonStyl}
              onClick={() => null}
              disabled>
              Inscrições encerradas
            </PrimaryButton>
          ) : null}
          {!isSubscribed(event, user) &&
          !(+event.subscribe_closing_date < new Date().getTime()) &&
          loggedAs !== 'productor' ? (
            <PrimaryButton customStyle={buttonStyl} onClick={subscribeAction}>
              Inscrever-se
            </PrimaryButton>
          ) : null}
          {isSubscribed(event, user) &&
          !(+event.subscribe_closing_date < new Date().getTime()) &&
          loggedAs !== 'productor' ? (
            <SlimButton
              onFocus={() => null}
              onBlur={() => null}
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
              onClick={unsubscribeAction}
              customStyle={customButtomStyl}>
              {!hover ? 'Inscrito' : 'Desinscrever'}
            </SlimButton>
          ) : null}
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

const eventShape = {};
const userShape = {};

EventCard.propTypes = {
  customStyle: PropTypes.string.isRequired,
  loggedAs: PropTypes.string.isRequired,
  subscribeAction: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  unsubscribeAction: PropTypes.func.isRequired,
  event: PropTypes.objectOf(PropTypes.shape(eventShape)).isRequired,
  user: PropTypes.objectOf(PropTypes.shape(userShape)).isRequired
};

export default EventCard;
