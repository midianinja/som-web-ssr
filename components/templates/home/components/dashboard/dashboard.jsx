import React from 'react';
import PropTypes from 'prop-types';
import CarouselHighlight from '../../../../molecules/carousel-highlight/carousel-highlight';
import CarouselLatest from '../../../../molecules/carousel-latest/carousel-latest';
import CarouselProducers from '../../../../molecules/carousel-producers/carousel-producers';
import CarouselArtists from '../../../../molecules/carousel-artists/carousel-artists';
import CarouselNews from '../../../../molecules/carousel-news/carousel-news';

import {
  DashboardContent,
  CarouselPrimarySection,
  TextOportunidades,
  Section
} from './dashboard.style';
import { dummyHighlights, dummyOpportunities } from './dummys';

const DashBoard = ({ news }) => (
  <DashboardContent>
    <CarouselPrimarySection>
      <CarouselHighlight opportunities={dummyHighlights} />
    </CarouselPrimarySection>

    <TextOportunidades big>
      Oportunidades em destaque{' '}
      <span role="img" aria-label="ícone de um foquete">
        🚀
      </span>
    </TextOportunidades>

    <Section>
      <CarouselLatest opportunities={dummyOpportunities} />
    </Section>

    <TextOportunidades>
      Oportunidades para artistas{' '}
      <span role="img" aria-label="ícone de uma guitarra">
        🎸
      </span>
    </TextOportunidades>
    <Section>
      <CarouselArtists opportunities={dummyOpportunities} />
    </Section>

    <TextOportunidades>
      Oportunidades para produtores{' '}
      <span role="img" aria-label="ícone de um computador">
        💻
      </span>
    </TextOportunidades>
    <Section>
      <CarouselProducers opportunities={dummyOpportunities} />
    </Section>

    <TextOportunidades>
      Notícias{' '}
      <span role="img" aria-label="ícone de 3 estrelas">
        ✨
      </span>
    </TextOportunidades>
    <Section>
      <CarouselNews opportunities={news} />
    </Section>
  </DashboardContent>
);

DashBoard.propTypes = {
  news: PropTypes.array.isRequired
};

export default DashBoard;
