import React from 'react';
import {
  Section, Title, OportunityList, Card,
} from './othersOportunities.style';

const renderOportunities = () => [
  '#1', '#2', '#3', '#4' 
].map((id) => <Card key={id} />);

const OthersOportunities = () => (
  <Section>
    <Title>Outras oportunidades</Title>
    <OportunityList>
      { renderOportunities() }
    </OportunityList>
  </Section>
);

export default OthersOportunities;
