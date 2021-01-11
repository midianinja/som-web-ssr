import React from 'react';
import PropTypes from 'prop-types';
import EventCondition from '../../atoms/event-condition/EventCondition';
import {
  Container
} from './eventConditions.style';

const EventConditions = ({ conditions }) => (
  <Container>
    <EventCondition title="Transporte" condition="directions-car" checked={conditions.has_local_transportation} />
    <EventCondition title="Acomodações" condition="hotel" checked={conditions.has_accommodation} />
    <EventCondition title="Alimentacção" condition="local-dining" checked={conditions.has_food} />
    <EventCondition title="Cachê" condition="money" checked={conditions.has_money_paid} />
  </Container>
);

const conditionsShape = {
  has_local_transportation: PropTypes.bool.isRequired,
  has_accommodation: PropTypes.bool.isRequired,
  has_food: PropTypes.bool.isRequired,
};

EventConditions.propTypes = {
  conditions: PropTypes.shape(conditionsShape).isRequired,
};

export default EventConditions;
