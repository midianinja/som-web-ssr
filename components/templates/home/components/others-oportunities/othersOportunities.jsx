import React from 'react';
import {
  Section, Title, OportunityList, Card,
} from './othersOportunities.style';

const oportunities = [
  {
    link: '#1',
    cover: '/images/som-oportunidades-comunidade.png',
  },
  {
    link: '#2',
    cover: '/images/som-oportunidades-ninja.png',
  },
  {
    link: '#3',
    cover: '/images/som-oportunidades-playlist.png',
  },
  {
    link: '#4',
    cover: '/images/som-oportunidades-dosolselo.png',
  },
];

const renderOportunities = () => oportunities.map(({ link, cover }) => (
  <Card
    key={link}
    background={cover}
  />
));

const OthersOportunities = () => (
  <Section id="oportunities">
    <Title>Oportunidades já disponíveis</Title>
    <OportunityList>
      { renderOportunities() }
    </OportunityList>
  </Section>
);

export default OthersOportunities;
