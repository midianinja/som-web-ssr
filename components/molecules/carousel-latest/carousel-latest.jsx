import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
import { AwesomeSliderContent } from './carouselLatest.style';
import { allHighlightedOpportunities } from './carousel-latest.collection';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1592: { items: 4 }
  // 2160: { items: 5},
};

export const CarouselLatest = () =>
  allHighlightedOpportunities.map((e) => (
    <AwesomeSliderContent key={e.image}>
      {/* <AliceCarousel
        disableButtonsControls
        disableDotsControls
        items={e.image}
        responsive={responsive}
      /> */}
    </AwesomeSliderContent>
  ));
