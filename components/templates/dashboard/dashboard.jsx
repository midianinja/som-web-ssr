import React, { useContext, useEffect, useState } from 'react';
import Store from '../../../store/Store';
import Header from '../../organisms/default-header/defaultHeader';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import DashboardHeader from './components/dashboard-header/dashboard-header';
import DashboardOpportunityCard from './components/dashboard-opportunity-card/dashboard-opportunity-card';
import { load } from './dashboard.controller';
import { DashboardContainer, OverlayWrapper, DashboardOpportunityList } from './dashboard.style';

const renderMyOpporunities = (opportunities) =>
  opportunities.map((opportunity) => (
    <li key={opportunity.id}>
      <DashboardOpportunityCard
        name={opportunity.name}
        subscribeClosingDate={opportunity.subscribe_closing_date}
        eventDate={opportunity.event_date}
        endEventDate={opportunity.end_event_date}
        location={opportunity.location}
        photo={opportunity.photo}
        subscriptionAmount={opportunity.subscribers.length}
      />
    </li>
  ));

const Dashboard = () => {
  const { state } = useContext(Store);
  const [myOpportunities, setMyOpportunities] = useState([]);
  const [subscribedOpportunities, setSubscribedOpportunities] = useState([]);
  const [selected, setSelected] = useState('created-by-me');

  useEffect(() => {
    load({ id: state.user.productor.id, setMyOpportunities, setSubscribedOpportunities });
  }, []);

  return (
    <DashboardContainer>
      <Header logged={!!state.user} />
      <DashboardHeader selected={selected} setSelected={setSelected} />
      <DashboardOpportunityList>
        {renderMyOpporunities(
          selected === 'created-by-me' ? myOpportunities : subscribedOpportunities
        )}
      </DashboardOpportunityList>
      <OverlayWrapper>
        <PrimaryButton color="darkGray">+ Adicionar nova oportunidade</PrimaryButton>
      </OverlayWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
