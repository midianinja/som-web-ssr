import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import { AwesomeSliderContent, AwesomeSliderContent1, 
  AwesomeSliderContent3, AwesomeSliderContentPai,
AwesomeSliderContent4, AwesomeSliderContent5 } from './styles'

export const Slider = () => {
  return (
    <>
      <AwesomeSliderContentPai>
        <AwesomeSliderContent>
          <AwesomeSlider
            media={[
              {
                source: '/images/djonga2.png',
              },
              {
                source: '/images/lp-video-cover.png',
              },
              {
                source: '/images/20years-cover.png',
              },
            ]}

          />
        </AwesomeSliderContent>

        <AwesomeSliderContent1>
          <AwesomeSlider
            media={[
              {
                source: '/images/djonga2.png',
              },
              {
                source: '/images/lp-video-cover.png',
              },
              {
                source: '/images/20years-cover.png',
              },
            ]}

          />
        </AwesomeSliderContent1>
        <AwesomeSliderContent3>
          <AwesomeSlider
            media={[
              {
                source: '/images/djonga2.png',
              },
              {
                source: '/images/lp-video-cover.png',
              },
              {
                source: '/images/20years-cover.png',
              },
            ]}

          />
        </AwesomeSliderContent3>
        <AwesomeSliderContent4>
          <AwesomeSlider
            media={[
              {
                source: '/images/djonga2.png',
              },
              {
                source: '/images/lp-video-cover.png',
              },
              {
                source: '/images/20years-cover.png',
              },
            ]}

          />
        </AwesomeSliderContent4>
        <AwesomeSliderContent5>
          <AwesomeSlider
            media={[
              {
                source: '/images/djonga2.png',
              },
              {
                source: '/images/lp-video-cover.png',
              },
              {
                source: '/images/20years-cover.png',
              },
            ]}

          />
        </AwesomeSliderContent5>
      </AwesomeSliderContentPai>
    </>
  )
}