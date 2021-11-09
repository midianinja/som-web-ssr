import React, { useContext, useEffect, useState } from 'react';
import Store from '../../../store/Store';
import Header from '../../organisms/default-header/defaultHeader';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import DashboardHeader from './components/dashboard-header/dashboard-header';
import DashboardOpportunityCard from './components/dashboard-opportunity-card/dashboard-opportunity-card';
import DashboardSubscribedOpportunityCard from './components/dashboard-subscribed-opportunity-card/dashboard-subscribed-opportunity-card';
import { load } from './dashboard.controller';
import {
  DashboardContainer,
  OverlayWrapper,
  DashboardOpportunityList,
  EmptyWrapper,
  EmptyTitle,
  EmptyText
} from './dashboard.style';
import { useRouter } from 'next/router';

const renderMyOpporunities = (opportunities) =>
  opportunities.map((opportunity) => (
    <li key={opportunity.id}>
      <DashboardOpportunityCard
        id={opportunity.id}
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

const renderSubscribedOpportunities = (opportunities) =>
  opportunities.map((opportunity) => (
    <li key={opportunity.id}>
      <DashboardSubscribedOpportunityCard
        id={opportunity.id}
        status={opportunity.status}
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

const renderEmptyText = (selected) =>
  selected === 'created-by-me' ? (
    <EmptyText>
      Que tal <a href="https://som.vc/opportunities">criar sua primeira oportunidade</a>?
    </EmptyText>
  ) : (
    <EmptyText>
      Que tal <a href="https://som.vc/opportunities">se inscrever na sua primeira oportunidade</a>?
    </EmptyText>
  );

const Dashboard = () => {
  const router = useRouter();
  const { state } = useContext(Store);
  const [myOpportunities, setMyOpportunities] = useState([]);
  const [subscribedOpportunities, setSubscribedOpportunities] = useState([]);
  const [selected, setSelected] = useState('created-by-me');

  useEffect(() => {
    if (state.connectionType === 'public') {
      router.push('/opportunity')
    }

    load({
      id: state.connectionType === 'artist' ? state.user.artist.id : state.user.productor.id,
      connectionType: state.connectionType,
      setMyOpportunities,
      setSubscribedOpportunities
    });

    if (state.connectionType === 'artist') {
      setSelected('subscribe-myself')
    }
  }, [state.connectionType]);

  let empty = false;
  empty = selected === 'created-by-me' && !myOpportunities.length;
  empty = selected !== 'created-by-me' && !subscribedOpportunities.length;

  const emptyTitle =
    selected === 'created-by-me'
      ? 'Quando você tiver oportunidades elas vão aparecer aqui!'
      : 'Quando você estiver inscrito em oportunidades elas vão aparecer aqui!';

  return (
    <DashboardContainer>
      <Header logged={!!state.user} />
      <DashboardHeader
        toCreateOpportunity={() => router.push('/opportunity')}
        selected={selected}
        setSelected={setSelected}
        connectionType={state.connectionType}
      />
      {!empty ? (
        <DashboardOpportunityList>
          {selected === 'created-by-me' ? renderMyOpporunities(myOpportunities) : renderSubscribedOpportunities(subscribedOpportunities)}
        </DashboardOpportunityList>
      ) : (
        <EmptyWrapper>
          <EmptyTitle>{emptyTitle}</EmptyTitle>
          {renderEmptyText(selected)}
        </EmptyWrapper>
      )}
      <OverlayWrapper>
        <PrimaryButton color="darkGray" onClick={() => router.push('/opportunity')}>
          + Adicionar nova oportunidade
        </PrimaryButton>
      </OverlayWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
