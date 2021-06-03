import React, { useState } from 'react';

import AwesomeSlider from 'react-awesome-slider';
import AliceCarousel from 'react-alice-carousel';

import 'react-awesome-slider/dist/styles.css';
import 'react-alice-carousel/lib/alice-carousel.css';


import {
  AwesomeSliderContent, AwesomeSliderContent1,
  AwesomeSliderContent3, AwesomeSliderContentPai,
  AwesomeSliderContent4, AwesomeSliderContent5, awesomeSLiderStyle,
  AliceCarouselStyle, TextOportunidades, AliceCarouselBtn, Thumb
} from './styles'


const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="item" data-value="1">
    <img src='/images/Group 473.svg' onDragStart={handleDragStart} />
  </div>,
  <div className="item" data-value="2">
    <img src='/images/Group 473.svg' onDragStart={handleDragStart} />

  </div>,
  <div className="item" data-value="3">
    <img src='/images/Group 473.svg' onDragStart={handleDragStart} />

  </div>,
  <div className="item" data-value="4">
    <img src='/images/Group 473.svg' onDragStart={handleDragStart} />

  </div>,
  <div className="item" data-value="5">
    <img src='/images/Group 473.svg' onDragStart={handleDragStart} />

  </div>,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
      {item}
    </div>
  ));
};

export const Slider = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncMainBeforeChange = (e) => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e) => {
    setMainAnimation(false);

    if (e.type === 'action') {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  return (
    <>
      <AwesomeSliderContentPai>
        <AwesomeSliderContent>
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
        </AwesomeSliderContent>

        <AwesomeSliderContent1>
          <TextOportunidades> Ultimas oportunidades adicionadas </TextOportunidades>
          <Thumb>
            <AliceCarousel
              activeIndex={mainIndex}
              items={items}
              responsive={responsive}
              controlsStrategy="alternate"
              style={AliceCarouselStyle}
              mouseTracking={!thumbAnimation}
              onSlideChange={syncMainBeforeChange}
              onSlideChanged={syncMainAfterChange}
              touchTracking={!thumbAnimation}
            />
            <AliceCarouselBtn className="btn-prev" onClick={slidePrev}></AliceCarouselBtn>
            <AliceCarouselBtn className="btn-next" onClick={slideNext}></AliceCarouselBtn>
          </Thumb>

        </AwesomeSliderContent1>
        <AwesomeSliderContent3>
          <AliceCarousel
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            style={AliceCarouselStyle}


          />
        </AwesomeSliderContent3>
        <AwesomeSliderContent4>
          <AliceCarousel
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            style={AliceCarouselStyle}
          />
        </AwesomeSliderContent4>

        <AwesomeSliderContent5>
          <AliceCarousel
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            style={AliceCarouselStyle}


          />
        </AwesomeSliderContent5>

      </AwesomeSliderContentPai>

    </>
  )
}