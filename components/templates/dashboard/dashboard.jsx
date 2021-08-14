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
        location={location}
        subscriptionAmount={opportunity.subscribers.length}
      />
    </li>
  ));

const Dashboard = () => {
  const { state } = useContext(Store);
  const [myOpportunities, setMyOpportunities] = useState([]);

  useEffect(() => {
    load({ id: state.user.productor.id, setMyOpportunities });
  }, []);

  return (
    <DashboardContainer>
      <Header logged={!!state.user} />
      <DashboardHeader />
      <DashboardOpportunityList>{renderMyOpporunities(myOpportunities)}</DashboardOpportunityList>
      <OverlayWrapper>
        <PrimaryButton color="darkGray">+ Adicionar nova oportunidade</PrimaryButton>
      </OverlayWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
