import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getAllHighlightedOportunities } from '../../templates/home/home.controller';
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
    const [allHighlightedOportunities, setAllHighlightedOportunities] = useState([]);
    console.log(allHighlightedOportunities);

    useEffect(() => {
        getAllHighlightedOportunities({
            setAllHighlightedOportunities
        })
    }, []);

    return (
        <CarouselContent>
            {
                CarouselHighlightItems({allHighlightedOportunities})
            }
        </CarouselContent>

    )

}
const CarouselHighlightItems = ({ allHighlightedOportunities }) => {
    let itemsToRender;
    if(allHighlightedOportunities){
        itemsToRender = allHighlightedOportunities.map(item => {
            return (
                        <AliceCarousel
                            // disableDotsControls
                            paddingLeft
                            paddingRight
                            disableButtonsControls
                            mouseTracking
                            items={item[0].image}
                        />
                    )
        });
    }
}
