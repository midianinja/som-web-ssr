import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

import {
  AwesomeSliderContent,
} from './carousel-artists.style'

const items = [
  <div className="item" data-value="1">
    <img style={{width: 360, height: 360}} src='/images/Group 467.svg'  />
  </div>,
  <div className="item" data-value="2">
    <img style={{width: 360, height: 360}} src='/images/Group 498.svg'  />
  </div>,
  <div className="item" data-value="3">
    <img style={{width: 360, height: 360}} src='/images/Group 499.svg'  />
  </div>,
  <div className="item" data-value="4">
    <img style={{width: 360, height: 360}} src='/images/Group 500.svg'  />
  </div>,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1592: { items: 4 },
  // 2160: { items: 5},
};

export const CarouselArtists = () => {
  return (
    <>
        <AwesomeSliderContent>
            <AliceCarousel
              disableButtonsControls
              disableDotsControls
              items={items}
              responsive={responsive}
            />
        </AwesomeSliderContent>
    </>
  )
}