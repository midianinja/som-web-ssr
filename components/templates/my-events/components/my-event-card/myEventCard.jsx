import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EventDate from '../../../../atoms/event-date/eventDate';
import EventPlace from '../../../../atoms/event-place/eventPlace';
import TagList from '../../../../molecules/tag-list/tagList';
import {
  Wrapper,
  Container,
  View,
  ImageContainer,
  Image,
  ImageHover,
  Icon,
  Label,
  Title,
  tagListStyl,
  eventDetailsStyl,
  FakeButton
} from './myEventCard.style';

/**
 * This render my event card
 * @param {object} event event informations
 * @param {string} customStyle custom style to card
 * @param {functiom} onClick function that run when card was clicked
 */
const EventCard = ({ event, customStyle, onClick }) => {
  const [cardHover, setCardHover] = useState(false);
  const musicalStyles = event.music_styles ? event.music_styles : [];

  return (
    <Wrapper
      customStyle={customStyle}
      onClick={onClick}
      onMouseEnter={() => setCardHover(!cardHover)}
      onMouseLeave={() => setCardHover(!cardHover)}>
      <Container>
            <ImageContainer>
              <Image image={event.photo.mimified} />
              {cardHover ? (
                <ImageHover>
                  <Icon src="/icons/tool.svg" />
                  <Label>Administrar oportunidade</Label>
                </ImageHover>
              ) : null}
            </ImageContainer>
            <TagList data={musicalStyles} customStyle={tagListStyl} />
          <View customStyle={eventDetailsStyl}>
            <Title>{event.name}</Title>
            <EventDate
              day={new Date(+event.subscribe_closing_date).getDate()}
              month={new Date(+event.subscribe_closing_date).getMonth() + 1}
              year={new Date(+event.subscribe_closing_date).getFullYear()}
            />
            <EventPlace
              address={event.location.address}
              city={event.location.city}
              state={event.location.state}
              district={event.location.district}
            />
          </View>
        <FakeButton>
          {+event.subscribe_closing_date < new Date().getTime()
            ? 'Inscrições encerradas'
            : 'Inscrições abertas'}
        </FakeButton>
      </Container>
    </Wrapper>
  );
};

const eventShape = {};

EventCard.propTypes = {
  customStyle: PropTypes.string.isRequired,
  event: PropTypes.objectOf(PropTypes.shape(eventShape)).isRequired,
  onClick: PropTypes.func.isRequired
};

export default EventCard;
