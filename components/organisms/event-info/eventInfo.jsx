import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import EventDate from '../../atoms/event-date/eventDate';
import EventPlace from '../../atoms/event-place/eventPlace';
import Subscribers from '../../molecules/subscribers/subscribers';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import {
  Container,
  ClockIcon,
  Title,
  ClosingDateTimer,
  Space,
  SubSpace,
  ButtonWrapper
} from './eventInfo.style';
import EventOnline from '../../atoms/event-online/event-online';
const unixTime = (unixtime) => new Date(+unixtime).toISOString().slice(0, 19);

const EventInfo = ({
  name,
  date,
  place,
  subscribedArtists,
  subscribedProductors,
  subscribeAction,
  subscribed,
  unsubscribeAction,
  loggedAs,
  isToArtist,
  isToProductor,
  isClosingSubscribe,
  diffDays,
  diffHours,
  happeningNow,
  isOnline,
  streamUrl
}) => {
  const newDate = new Date(unixTime(date));
  const dateInstance = moment(newDate);
  const dayLabel = diffDays === 1 ? 'dia' : 'dias';
  const hourLabel = diffHours === 1 ? 'hora' : 'horas';

  let label = 'Inscrições encerradas';
  if (diffHours > 0) label = `${diffHours} ${hourLabel} para o fim das inscrições`;
  if (diffDays > 0) label = `${diffDays} ${dayLabel} para o fim das inscrições`;

  const targetList = [];
  const exclusiveLabels = { artist: 'productores', productor: 'artistas', public: 'membros' };
  if (isToArtist) targetList.push('artist');
  if (isToProductor) targetList.push('productor');

  return (
    <Container>
      <ClosingDateTimer>
        <ClockIcon src="/icons/clock.svg" alt="icone de um relógio" />
        {label}
      </ClosingDateTimer>
      <Title>{name}</Title>
      <Space />
      <EventDate
        day={dateInstance.date()}
        month={dateInstance.month() + 1}
        year={dateInstance.year()}
      />
      <SubSpace />
      {!isOnline ? (
        <EventPlace
          address={place.address}
          city={place.city}
          state={place.state}
          district={place.district}
          complement={place.complement}
        />
      ) : null}
      {happeningNow && isOnline ? <EventOnline src={streamUrl} /> : null}
      <SubSpace />
      <Subscribers
        subscribedArtists={subscribedArtists}
        subscribedProductors={subscribedProductors}
      />
      <Space />
      <ButtonWrapper>
        {isClosingSubscribe ? (
          <PrimaryButton onFocus={() => null} onBlur={() => null} onClick={() => null} disabled>
            Inscrições encerradas
          </PrimaryButton>
        ) : null}

        {!subscribed && !isClosingSubscribe ? (
          <PrimaryButton onClick={subscribeAction} disabled={targetList.indexOf(loggedAs) === -1}>
            {targetList.indexOf(loggedAs) !== -1
              ? 'Inscrever-se'
              : `Exclusivo para ${exclusiveLabels[loggedAs]}`}
          </PrimaryButton>
        ) : null}

        {subscribed && !isClosingSubscribe ? (
          <PrimaryButton
            customStyle={`
              background-color: #44178F;
            `}
            onClick={unsubscribeAction}>
            Inscrito
          </PrimaryButton>
        ) : null}
      </ButtonWrapper>
    </Container>
  );
};

const placeShape = {
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  complement: PropTypes.string
};

EventInfo.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  loggedAs: PropTypes.string,
  streamUrl: PropTypes.string,
  subscribedArtists: PropTypes.number,
  subscribedProductors: PropTypes.number,
  diffDays: PropTypes.number,
  diffHours: PropTypes.number,
  happeningNow: PropTypes.bool,
  isOnline: PropTypes.bool,
  subscribed: PropTypes.bool,
  isToArtist: PropTypes.bool,
  isToProductor: PropTypes.bool,
  isClosingSubscribe: PropTypes.bool,
  place: PropTypes.shape(placeShape),
  subscribeAction: PropTypes.func.isRequired,
  unsubscribeAction: PropTypes.func.isRequired
};

EventInfo.defaultProps = {
  name: '',
  loggedAs: '',
  date: '',
  streamUrl: '',
  subscribers: 0,
  diffDays: 0,
  diffHours: 0,
  subscribed: false,
  happeningNow: false,
  isClosingSubscribe: false,
  isToArtist: false,
  isToProductor: false,
  isOnline: false,
  place: {}
};

export default EventInfo;
