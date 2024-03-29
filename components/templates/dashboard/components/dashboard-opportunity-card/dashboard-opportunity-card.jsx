import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import PrimaryButton from '../../../../atoms/primary-button/primaryButton';
import SlimButton from '../../../../atoms/slim-button/slimButton';
import EventDate from '../../../../atoms/event-date/eventDate';
import EventPlace from '../../../../atoms/event-place/eventPlace';
import {
  Card,
  Figure,
  OpportunityName,
  Content,
  InfoWrapper,
  SubscriptionText
} from './dashboard-opportunity-card.style';

const getButtonText = (subscriptionAmount, eventDate, endEventDate) => {
  const eventDateDiff = moment(+eventDate).diff(Date.now(), 'days');
  const endEventDateDiff = moment(+endEventDate).diff(Date.now(), 'days');

  if (eventDateDiff <= 0 && endEventDateDiff >= 0) return 'Oportunidade em andamento';
  if (subscriptionAmount <= 0) return 'Visualizar inscrições';

  return `${subscriptionAmount} incrições em aberto`;
};

const disabledButton = (subscriptionAmount, eventDate, endEventDate) => {
  const eventDateDiff = moment(+eventDate).diff(Date.now(), 'days');
  const endEventDateDiff = moment(+endEventDate).diff(Date.now(), 'days');

  if (eventDateDiff <= 0 && endEventDateDiff >= 0) return true;
  if (subscriptionAmount <= 0) return false;

  return false;
};

const getSubscriptionText = (subscriptionDate, eventDate, endEventDate) => {
  const eventDateDiff = moment(+eventDate).diff(Date.now(), 'days');
  const endEventDateDiff = moment(+endEventDate).diff(Date.now(), 'days');
  const subscriptionDateDiff = moment(+subscriptionDate).diff(Date.now(), 'days');

  if (eventDateDiff <= 0 && endEventDateDiff >= 0) return 'Inscrições encerradas';
  if (eventDateDiff > 0 && subscriptionDateDiff <= 0) return 'Inscrições encerradas';
  if (endEventDateDiff < 0) return 'Inscrições encerradas';

  return (
    <>
      <strong>{subscriptionDateDiff} dias</strong> para o fim das inscrições
    </>
  );
};

/**
 *
 * @param {*} param0
 * @returns
 */
const DashboardOpportunityCard = ({
  id,
  name,
  eventDate,
  endEventDate,
  subscribeClosingDate,
  location,
  subscriptionAmount,
  photo
}) => {
  const router = useRouter();

  return (
    <Card>
      <Figure onClick={() => router.push(`/event/${id}`)}>
        <img src={photo.mimified} alt="" />
      </Figure>
      <Content>
        <OpportunityName>{name}</OpportunityName>
        <InfoWrapper>
          <EventDate
            day={new Date(+eventDate).getDate()}
            month={new Date(+eventDate).getMonth() + 1}
            year={new Date(+eventDate).getFullYear()}
          />
          <EventPlace city={location.city} state={location.state} />
          <SubscriptionText>
            {getSubscriptionText(subscribeClosingDate, eventDate, endEventDate)}
          </SubscriptionText>
        </InfoWrapper>
        <div>
          {subscriptionAmount <= 0 ? (
            <SlimButton
              onClick={() => {
                router.push(`/dashboard/${id}/curatorship`);
              }}
              color="white"
              disabled={disabledButton(subscriptionAmount, eventDate, endEventDate)}
              customStyle={`
                  width: auto;
                  height: 30px;
                  padding-left: 12px;
                  padding-right: 12px;
                `}>
              {getButtonText(subscriptionAmount, eventDate, endEventDate)}
            </SlimButton>
          ) : (
            <PrimaryButton
              onClick={() => {
                router.push(`/dashboard/${id}/curatorship`);
              }}
              disabled={disabledButton(subscriptionAmount, eventDate, endEventDate)}
              customStyle={`
                  width: auto;
                  height: 30px;
                  padding-left: 12px;
                  padding-right: 12px;
                `}>
              {getButtonText(subscriptionAmount, eventDate, endEventDate)}
            </PrimaryButton>
          )}
        </div>
      </Content>
    </Card>
  );
};

DashboardOpportunityCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subscribeClosingDate: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  endEventDate: PropTypes.string.isRequired,
  photo: PropTypes.shape({
    mimified: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }).isRequired,
  subscriptionAmount: PropTypes.number.isRequired
};

export default DashboardOpportunityCard;
