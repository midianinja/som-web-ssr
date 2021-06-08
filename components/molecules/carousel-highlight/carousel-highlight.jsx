import React, {useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselContent } from './carouselHighlight.style';

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
export const CarouselHighlight = () => {
    const [ opportunity ] = useState(null);
    console.log(opportunity);

    return (
        <CarouselContent id="opportunity">
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
}