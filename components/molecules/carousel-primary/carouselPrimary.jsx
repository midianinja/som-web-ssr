import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselContent } from './carouselPrimary.style';

const items = [
    <div className="item" data-value="1">
        <img src='/images/Group 461.svg'></img>
    </div>,
    <div className="item" data-value="2">
        <img src='/images/Group 461.svg'></img>
    </div>,
    <div className="item" data-value="2">
        <img src='/images/Group 461.svg'></img>
</div>,
];
export const CarouselPrimary = () => (
    <CarouselContent>
        <AliceCarousel
        // disableDotsControls
        paddingLeft
        paddingRight
        disableButtonsControls
            mouseTracking
            items={items}
            />
    </CarouselContent>
    
);