import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Icon,
  EDate,
  Container,
} from './eventDate.style';

/**
 * function that render EventDate react component
 * 
 * @param {object} props component props
 * @returns contains EventDate Component
 */
const EventDate = ({ day, month, year, calendarIcon }) => (
  <Container>
    <Icon src={calendarIcon} />
    <EDate>{`${day}/${month}/${year}`}</EDate>
  </Container>
);

EventDate.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string,
  calendarIcon: PropTypes.string,
};

EventDate.defaultProps = {
  day: '00',
  month: '00',
  year: '0000',
  calendarIcon: '/icons/calendar.svg',
};

export default EventDate;
