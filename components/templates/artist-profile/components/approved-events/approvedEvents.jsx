import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../../atoms/avatar/avatar';
import {
  Wrapper, Card, ListWrapper, Title,
  avatarCustomStyle, ArtistNameWrapper, ArtistName,
} from './approvedEvents.style';

const renderEvents = (events, eventClick) => {
  const sortedEvents = events.sort((a, b) => a.event_date > b.event_date);

  return sortedEvents.map((event) => {
    const src = event.photo.mimified;
    return (
      <Card key={event.id} id={event.id} onClick={() => eventClick(event.id)}>
        <Avatar src={src} customStyle={avatarCustomStyle} />
        <ArtistNameWrapper>
          <ArtistName>{event.name}</ArtistName>
        </ArtistNameWrapper>
      </Card>
    );
  });
}

const ApprovedEvents = ({ events, eventClick }) => (
  <Wrapper>
    <Title>Participou dos eventos</Title>
    <ListWrapper>{renderEvents(events, eventClick)}</ListWrapper>
  </Wrapper>
);

const eventsShape = {
  id: PropTypes.string,
  cover: PropTypes.string,
  name: PropTypes.string,
  event_date: PropTypes.string,
};

ApprovedEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape(eventsShape)),
  eventClick: PropTypes.func.isRequired,
};

ApprovedEvents.defaultProps = {
  events: [],
};

export default ApprovedEvents;
