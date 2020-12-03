import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Icon,
  ECondition, Status,
} from './eventCondition.style';

const EventCondition = ({ condition, checked, title, checkedIcon }) => (
  <Container checked={checked}>
    <div>
      <Icon src={`/icons/${condition}.svg`} />
      <ECondition>{title}</ECondition>
    </div>
    <Status checked={checked}>
      <Icon src={checkedIcon} />
    </Status>
  </Container>
);

EventCondition.propTypes = {
  condition: PropTypes.string,
  checked: PropTypes.bool,
  title: PropTypes.string,
  checkedIcon: PropTypes.string,
};

EventCondition.defaultProps = {
  condition: 'calendar',
  checked: false,
  title: 'Transporte',
  checkedIcon: '/icons/checked.svg',
};

export default EventCondition;
