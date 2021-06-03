import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import {awesomeSLiderStyle} from './carouselPrimary.style'

export const CarouselPrimary = () => {
    return (
        <AwesomeSlider
            customStyle={awesomeSLiderStyle}
            media={[
                {
                    source: '/images/Group 461.svg',
                },
                {
                    source: '/images/Rectangle 137.svg',
                },
                {
                    source: '/images/mapa 1.png',
                },
            ]}

        />
    )
}