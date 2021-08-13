import React from 'react';
import PropTypes from 'prop-types';
import EventDate from '../../../../atoms/event-date/eventDate';
import EventPlace from '../../../../atoms/event-place/eventPlace';
import {
  Card,
  Figure,
  OpportunityName,
  Content,
  InfoWrapper
} from './dashboard-opportunity-card.style';
import PrimaryButton from '../../../../atoms/primary-button/primaryButton';

const DashboardOpportunityCard = ({ name, subscribeClosingDate, location, subscriptionAmount }) => (
  <Card>
    <Figure />
    <Content>
      <OpportunityName>{name}</OpportunityName>
      <InfoWrapper>
        <EventDate
          day={new Date(+subscribeClosingDate).getDate()}
          month={new Date(+subscribeClosingDate).getMonth() + 1}
          year={new Date(+subscribeClosingDate).getFullYear()}
        />
        <EventPlace city={location.city} state={location.state} />
      </InfoWrapper>
      <div>
        <PrimaryButton
          customStyle={`
            width: auto;
            height: 30px;
          `}>
          {subscriptionAmount} incrições em aberto
        </PrimaryButton>
      </div>
    </Content>
  </Card>
);

DashboardOpportunityCard.propTypes = {
  name: PropTypes.string.isRequired,
  subscribeClosingDate: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }).isRequired,
  subscriptionAmount: PropTypes.number.isRequired
};

export default DashboardOpportunityCard;
