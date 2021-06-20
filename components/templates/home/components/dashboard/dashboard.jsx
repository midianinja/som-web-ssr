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

const DashBoard = ({
  highlightedOportunities,
  news,
  artistOportunities,
  productorOportunities,
  latestOpportunities
}) => (
  <DashboardContent>
    <CarouselPrimarySection>
      <CarouselHighlight opportunities={highlightedOportunities} />
    </CarouselPrimarySection>

    <TextOportunidades big>
      Oportunidades em destaque{' '}
      <span role="img" aria-label="ícone de um foquete">
        🚀
      </span>
    </TextOportunidades>

    <Section>
      <CarouselLatest opportunities={latestOpportunities} />
    </Section>

    <TextOportunidades>
      Oportunidades para artistas{' '}
      <span role="img" aria-label="ícone de uma guitarra">
        🎸
      </span>
    </TextOportunidades>
    <Section>
      <CarouselArtists opportunities={artistOportunities} />
    </Section>

    <TextOportunidades>
      Oportunidades para produtores{' '}
      <span role="img" aria-label="ícone de um computador">
        💻
      </span>
    </TextOportunidades>
    <Section>
      <CarouselProducers opportunities={productorOportunities} />
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
  highlightedOportunities: PropTypes.array.isRequired,
  news: PropTypes.array.isRequired,
  artistOportunities: PropTypes.array.isRequired,
  productorOportunities: PropTypes.array.isRequired,
  latestOpportunities: PropTypes.array.isRequired
};

export default DashBoard;
