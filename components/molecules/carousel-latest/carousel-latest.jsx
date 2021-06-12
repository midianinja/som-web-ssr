import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

import {
  AwesomeSliderContent,
} from './carouselLatest.style'

import { getNews } from '../../templates/home/home.controller'

const items = [
  <div className="item" style={{
    position: 'absolute',
    background: 'rgba(146, 128, 169, 0.3)',
    backdropFilter: 'blur(20px)',
/* Note: backdrop-filter has minimal browser support */
    borderRadius: '0px 0px 6px 6px',
    width: '310px',
    height: '310px'
     
     }} data-value="1">
    <img style={{}} src='/images/Rectangle 138.svg'  />
    <h4 style={{ 
      fontFamily: 'Circular Std',
      fontStyle: 'normal',
      fontWeight: 450,
      fontSize: '24px',
      lineHeight: '120%',
      color: 'fff'
  
      }} >
      Nome da oportunidade exemplo zero</h4>
  </div>,
  <div className="item" data-value="2">
    <img style={{width: 360, height: 360}} src='/images/Group 504.svg'  />
  </div>,
  <div className="item" data-value="3">
    <img style={{width: 360, height: 360}} src='/images/Group 503.svg'  />
  </div>,
  // <div className="item" data-value="4">
  //   <img style={{width: 360, height: 360}} src='/images/Group 467.svg'  />
  // </div>,
  // <div className="item" data-value="5">
  //   <img style={{width: 360, height: 360}} src='/images/Group 498.svg'  />
  // </div>,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
  1592: { items: 4 },
  // 2160: { items: 5},
};

export const CarouselLatest = ({ opportunity }) => {
  const [ latestOpportunity, setLatestOpportunity ] = useState(null);

  useEffect(() => {
    getNews({
      setLatestOpportunity
    })
  });
return (
  opportunity.map((op) => (
    <AwesomeSliderContent>
                <AliceCarousel
                  disableButtonsControls
                  disableDotsControls
                  items={items}
                  responsive={responsive}
                />
                <h2>{op.name}</h2>
            </AwesomeSliderContent>
  )));
}