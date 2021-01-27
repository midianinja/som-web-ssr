import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import EventDate from '../../atoms/event-date/eventDate';
import EventPlace from '../../atoms/event-place/eventPlace';
import EventBands from '../../molecules/event-brands/eventBrands';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import SlimButton from '../../atoms/slim-button/slimButton';
import {
  Container,
  ClockIcon,
  Title,
  ClosingDateTimer,
  Space,
  SubSpace,
  ButtonWrapper
} from './eventInfo.style';
const unixTime = (unixtime) => new Date(+unixtime).toISOString().slice(0, 19);

const EventInfo = ({
  name,
  date,
  place,
  subscribers,
  subscribeAction,
  subscribed,
  unsubscribeAction,
  isClosingSubscribe,
  diffDays,
  diffHours,
  loggedAs
}) => {
  const newDate = new Date(unixTime(date));
  const dateInstance = moment(newDate);
  const [hover, setHover] = useState(false);
  const dayLabel = diffDays === 1 ? 'dia' : 'dias';
  const hourLabel = diffHours === 1 ? 'hora' : 'horas';

  let label = 'Inscrições encerradas';
  if (diffHours > 0) label = `${diffHours} ${hourLabel} para o fim das inscrições`;
  if (diffDays > 0) label = `${diffDays} ${dayLabel} para o fim das inscrições`;

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
      <EventPlace
        address={place.address}
        city={place.city}
        state={place.state}
        district={place.district}
        complement={place.complement}
      />
      <SubSpace />
      <EventBands subscribed={subscribers} />
      <Space />
      <ButtonWrapper>
        {isClosingSubscribe ? (
          <PrimaryButton onFocus={() => null} onBlur={() => null} onClick={() => null} disabled>
            Inscrições encerradas
          </PrimaryButton>
        ) : null}
        {!subscribed && !isClosingSubscribe && loggedAs !== 'productor' ? (
          <PrimaryButton onClick={subscribeAction}>Inscrever-se</PrimaryButton>
        ) : null}
        {subscribed && !isClosingSubscribe && loggedAs !== 'productor' ? (
          <SlimButton
            onFocus={() => null}
            onBlur={() => null}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onClick={unsubscribeAction}
            customStyle={`
                  width: 120px;
                  padding-left: 5px
                  padding-right: 5px
                `}>
            {!hover ? 'Inscrito' : 'Desinscrever'}
          </SlimButton>
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
  subscribers: PropTypes.number,
  diffDays: PropTypes.number,
  diffHours: PropTypes.number,
  subscribed: PropTypes.bool,
  isClosingSubscribe: PropTypes.bool,
  place: PropTypes.shape(placeShape),
  subscribeAction: PropTypes.func.isRequired,
  unsubscribeAction: PropTypes.func.isRequired
};

EventInfo.defaultProps = {
  name: '',
  loggedAs: '',
  date: '',
  subscribers: 0,
  diffDays: 0,
  diffHours: 0,
  subscribed: false,
  isClosingSubscribe: false,
  place: {}
};

export default EventInfo;
