/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CommunityCarrousel from '../../../../organisms/community-carrousel/communityCarrousel';
import { aboutCard } from './about.collection';
import { AboutSection, Title, Subtitle, Text, Grid, ToggleButton, VideoModal } from './about.style';

const About = ({ communityUsers }) => {
  const [aboutSelectedCard, setAboutSelectedCard] = useState(null);
  const [videoOpened, setVideoOpened] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    if (!videoOpened) {
      document.querySelector('#somVideo').pause();
    }
  }, [videoOpened]);

  return (
    <AboutSection id="about">
      <header>
        <svg
          width="68"
          height="20"
          viewBox="0 0 68 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path
              d="M64.9126 2.94788V0H46.9258V19.6535H51.1462V4.72269H53.8393V19.6535H59.672V4.72269H62.1314V19.6535H68.0004V2.94788H64.9126Z"
              fill="#D9D9D9"
            />
            <path
              d="M11.7017 18.2829C10.4022 19.4256 8.78085 20 6.84069 20C4.90052 20 3.27308 19.4165 1.96446 18.2495C0.652795 17.0825 0 15.6207 0 13.8611H4.46026C4.46026 14.4993 4.69405 15.0372 5.16467 15.4749C5.63529 15.9125 6.21218 16.1313 6.89534 16.1313C7.55117 16.1313 8.0977 15.955 8.53795 15.5995C8.97517 15.2439 9.19378 14.8063 9.19378 14.2866C9.19378 13.2199 8.05215 12.3902 5.77496 11.7976C4.16878 11.3873 2.85408 10.7035 1.82783 9.74016C0.801572 8.77982 0.288444 7.44568 0.288444 5.74077C0.288444 4.09968 0.90784 2.73211 2.14967 1.63805C3.38846 0.547029 4.93392 0 6.783 0C8.67155 0 10.2383 0.559186 11.4892 1.6806C12.7371 2.80201 13.3626 4.19997 13.3626 5.87753H8.91748C8.91748 5.30315 8.71709 4.82601 8.31631 4.44309C7.91552 4.06017 7.40543 3.86871 6.78603 3.86871C6.21218 3.86871 5.72942 4.03282 5.3347 4.36104C4.94303 4.68926 4.74567 5.09345 4.74567 5.57666C4.74567 6.62513 5.79925 7.42744 7.90641 7.98359C8.7262 8.21152 9.44579 8.46376 10.0622 8.74335C10.6785 9.01991 11.2736 9.38763 11.8535 9.84349C12.4335 10.2993 12.8768 10.8768 13.1865 11.5788C13.4962 12.2808 13.651 13.0862 13.651 13.9979C13.651 15.7119 13.0012 17.1403 11.7017 18.2829Z"
              fill="#D9D9D9"
            />
            <path
              d="M36.8786 17.1281C34.9263 19.0427 32.4942 20 29.5824 20C26.6707 20 24.2356 19.0427 22.2863 17.1281C20.334 15.2135 19.3594 12.837 19.3594 9.99848C19.3594 7.16001 20.334 4.78347 22.2863 2.86886C24.2356 0.957301 26.6676 0 29.5824 0C32.4973 0 34.9293 0.957301 36.8786 2.8719C38.8309 4.78651 39.8055 7.16305 39.8055 10.0015C39.8055 12.84 38.8309 15.2165 36.8786 17.1281ZM25.4562 14.1559C26.5583 15.2621 27.9307 15.8152 29.5733 15.8152C31.216 15.8152 32.5883 15.2621 33.6905 14.1559C34.7927 13.0497 35.3453 11.6639 35.3453 9.99848C35.3453 8.33612 34.7927 6.94727 33.6905 5.83498C32.5883 4.72269 31.216 4.16654 29.5733 4.16654C27.9307 4.16654 26.5583 4.72269 25.4562 5.83498C24.354 6.94727 23.8014 8.33308 23.8014 9.99848C23.8014 11.6639 24.354 13.0497 25.4562 14.1559Z"
              fill="#D9D9D9"
            />
            <path
              d="M19.0113 18.8821C18.483 19.3957 17.8302 19.654 17.0469 19.654C16.2666 19.654 15.6168 19.3957 15.0976 18.8821C14.5784 18.3685 14.3203 17.7181 14.3203 16.9371C14.3203 16.1712 14.5784 15.53 15.0976 15.0133C15.6168 14.4937 16.2666 14.2354 17.0469 14.2354C17.8272 14.2354 18.483 14.4937 19.0113 15.0133C19.5396 15.533 19.8038 16.1743 19.8038 16.9371C19.8038 17.7181 19.5396 18.3685 19.0113 18.8821Z"
              fill="#D9D9D9"
            />
            <path
              d="M44.6168 18.8821C44.0885 19.3957 43.4357 19.654 42.6523 19.654C41.872 19.654 41.2223 19.3957 40.7031 18.8821C40.1839 18.3685 39.9258 17.7181 39.9258 16.9371C39.9258 16.1712 40.1839 15.53 40.7031 15.0133C41.2223 14.4937 41.872 14.2354 42.6523 14.2354C43.4327 14.2354 44.0885 14.4937 44.6168 15.0133C45.1451 15.533 45.4093 16.1743 45.4093 16.9371C45.4062 17.7181 45.1421 18.3685 44.6168 18.8821Z"
              fill="#D9D9D9"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="68" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <Title>Quem somos</Title>
      </header>

      <CommunityCarrousel communityUsers={communityUsers} />

      <div>
        <Subtitle>Movimente a cena e construa circuitos musicais!</Subtitle>
        <Text>
          Participe de uma rede de trocas e conexões com artistas e produtores de todo o Brasil.
          Pense sua carreira coletivamente!
        </Text>
      </div>

      <Grid open={aboutSelectedCard}>
        <div>
          <h3>
            {aboutCard[0].title}
            <svg
              width="120"
              height="36"
              viewBox="0 0 120 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M114.55 5.30618V0H82.8086V35.3764H90.2564V8.50084H95.009V35.3764H105.302V8.50084H109.642V35.3764H119.999V5.30618H114.55Z"
                fill="white"
              />
              <path
                d="M20.6501 32.9093C18.3568 34.9661 15.4956 36 12.0718 36C8.64797 36 5.77603 34.9497 3.46669 32.8491C1.15199 30.7485 0 28.1173 0 24.95H7.87105C7.87105 26.0988 8.28362 27.067 9.11413 27.8547C9.94463 28.6425 10.9627 29.0363 12.1682 29.0363C13.3256 29.0363 14.2901 28.719 15.067 28.079C15.8385 27.439 16.2243 26.6513 16.2243 25.7159C16.2243 23.7958 14.2097 22.3024 10.1911 21.2357C7.35667 20.4972 5.03661 19.2664 3.22558 17.5323C1.41454 15.8037 0.509019 13.4022 0.509019 10.3334C0.509019 7.37943 1.60207 4.91779 3.79353 2.94849C5.97964 0.984653 8.70691 0 11.97 0C15.3027 0 18.0675 1.00653 20.275 3.02507C22.4772 5.04361 23.581 7.55995 23.581 10.5795H15.7367C15.7367 9.54566 15.3831 8.68683 14.6758 7.99757C13.9686 7.30831 13.0684 6.96368 11.9754 6.96368C10.9627 6.96368 10.1107 7.25908 9.41418 7.84987C8.72299 8.44066 8.37471 9.16821 8.37471 10.038C8.37471 11.9252 10.234 13.3694 13.9525 14.3705C15.3992 14.7807 16.669 15.2348 17.7567 15.738C18.8444 16.2358 19.8946 16.8977 20.918 17.7183C21.9414 18.5388 22.7237 19.5782 23.2702 20.8418C23.8168 22.1055 24.09 23.5551 24.09 25.1962C24.09 28.2814 22.9434 30.8525 20.6501 32.9093Z"
                fill="white"
              />
              <path
                d="M65.0764 30.8306C61.6311 34.2769 57.3393 36 52.2009 36C47.0625 36 42.7653 34.2769 39.3254 30.8306C35.8801 27.3843 34.1602 23.1065 34.1602 17.9973C34.1602 12.888 35.8801 8.61024 39.3254 5.16396C42.7653 1.72314 47.0571 0 52.2009 0C57.3446 0 61.6365 1.72314 65.0764 5.16943C68.5216 8.61571 70.2416 12.8935 70.2416 18.0027C70.2416 23.112 68.5216 27.3898 65.0764 30.8306ZM44.9192 25.4806C46.8642 27.4718 49.2861 28.4674 52.1848 28.4674C55.0835 28.4674 57.5054 27.4718 59.4504 25.4806C61.3954 23.4894 62.3705 20.995 62.3705 17.9973C62.3705 15.005 61.3954 12.5051 59.4504 10.503C57.5054 8.50084 55.0835 7.49977 52.1848 7.49977C49.2861 7.49977 46.8642 8.50084 44.9192 10.503C42.9742 12.5051 41.9991 14.9995 41.9991 17.9973C41.9991 20.995 42.9742 23.4894 44.9192 25.4806Z"
                fill="white"
              />
              <path
                d="M33.5517 33.9871C32.6194 34.9116 31.4674 35.3766 30.085 35.3766C28.708 35.3766 27.5613 34.9116 26.6451 33.9871C25.7289 33.0627 25.2734 31.892 25.2734 30.4861C25.2734 29.1076 25.7289 27.9534 26.6451 27.0234C27.5613 26.088 28.708 25.623 30.085 25.623C31.462 25.623 32.6194 26.088 33.5517 27.0234C34.484 27.9589 34.9502 29.1131 34.9502 30.4861C34.9502 31.892 34.484 33.0627 33.5517 33.9871Z"
                fill="white"
              />
              <path
                d="M78.7314 33.9871C77.7991 34.9116 76.6471 35.3766 75.2647 35.3766C73.8877 35.3766 72.741 34.9116 71.8248 33.9871C70.9086 33.0627 70.4531 31.892 70.4531 30.4861C70.4531 29.1076 70.9086 27.9534 71.8248 27.0234C72.741 26.088 73.8877 25.623 75.2647 25.623C76.6417 25.623 77.7991 26.088 78.7314 27.0234C79.6637 27.9589 80.1299 29.1131 80.1299 30.4861C80.1245 31.892 79.6584 33.0627 78.7314 33.9871Z"
                fill="white"
              />
            </svg>
          </h3>
          <p>{aboutCard[0].description}</p>
          <button onClick={() => setVideoOpened(true)}>{aboutCard[0].action}</button>
          <img alt="" src="/images/home/som-example.png" />
        </div>
        <div className="__default">
          <h3>{aboutCard[1].title}</h3>
          <p>{aboutCard[1].description}</p>
          <ToggleButton
            onClick={() => {
              if (aboutSelectedCard === 'yellow') setAboutSelectedCard(null);
              else setAboutSelectedCard('yellow');
            }}
            open={aboutSelectedCard === 'yellow'}
            width="68"
            height="68"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58 34C58 47.2548 47.2548 58 34 58C20.7451 58 9.99996 47.2548 9.99996 34C9.99996 20.7452 20.7451 10 34 10C47.2548 10 58 20.7452 58 34ZM35.504 35.5V46.0019L32.504 46.0019L32.504 35.5L22.0007 35.5L22.0007 32.5H32.504L32.504 21.9988L35.504 21.9988L35.504 32.5H46.0039L46.0039 35.5H35.504Z"
              fill="black"
            />
          </ToggleButton>
        </div>
        <div className="__default __big">
          <h3>{aboutCard[2].title}</h3>
          <p>{aboutCard[2].description}</p>
          <ToggleButton
            onClick={() => {
              if (aboutSelectedCard === 'orange') setAboutSelectedCard(null);
              else setAboutSelectedCard('orange');
            }}
            open={aboutSelectedCard === 'orange'}
            width="68"
            height="68"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58 34C58 47.2548 47.2548 58 34 58C20.7451 58 9.99996 47.2548 9.99996 34C9.99996 20.7452 20.7451 10 34 10C47.2548 10 58 20.7452 58 34ZM35.504 35.5V46.0019L32.504 46.0019L32.504 35.5L22.0007 35.5L22.0007 32.5H32.504L32.504 21.9988L35.504 21.9988L35.504 32.5H46.0039L46.0039 35.5H35.504Z"
              fill="white"
            />
          </ToggleButton>
        </div>
        <div className="__default">
          <h3>{aboutCard[3].title}</h3>
          <p>{aboutCard[3].description}</p>
          <ToggleButton
            onClick={() => {
              if (aboutSelectedCard === 'purple') setAboutSelectedCard(null);
              else setAboutSelectedCard('purple');
            }}
            open={aboutSelectedCard === 'purple'}
            width="68"
            height="68"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58 34C58 47.2548 47.2548 58 34 58C20.7451 58 9.99996 47.2548 9.99996 34C9.99996 20.7452 20.7451 10 34 10C47.2548 10 58 20.7452 58 34ZM35.504 35.5V46.0019L32.504 46.0019L32.504 35.5L22.0007 35.5L22.0007 32.5H32.504L32.504 21.9988L35.504 21.9988L35.504 32.5H46.0039L46.0039 35.5H35.504Z"
              fill="white"
            />
          </ToggleButton>
        </div>
        <div className="__default __big">
          <h3>{aboutCard[4].title}</h3>
          <p>{aboutCard[4].description}</p>
          <ToggleButton
            onClick={() => {
              if (aboutSelectedCard === 'pink') setAboutSelectedCard(null);
              else setAboutSelectedCard('pink');
            }}
            open={aboutSelectedCard === 'pink'}
            width="68"
            height="68"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58 34C58 47.2548 47.2548 58 34 58C20.7451 58 9.99996 47.2548 9.99996 34C9.99996 20.7452 20.7451 10 34 10C47.2548 10 58 20.7452 58 34ZM35.504 35.5V46.0019L32.504 46.0019L32.504 35.5L22.0007 35.5L22.0007 32.5H32.504L32.504 21.9988L35.504 21.9988L35.504 32.5H46.0039L46.0039 35.5H35.504Z"
              fill="white"
            />
          </ToggleButton>
        </div>
        <div>
          <div>
            <h3>{aboutCard[5].title}</h3>
            <p>{aboutCard[5].description}</p>
            <button
              onClick={() => {
                window.location.href = 'http://conteudo.som.vc';
              }}>
              {aboutCard[5].action}
            </button>
          </div>
          <img alt="" src="/images/home/ajude-a-cena.png " />
        </div>
      </Grid>
      <VideoModal hide={!videoOpened} onClick={() => setVideoOpened(false)}>
        <video
          ref={videoRef}
          id="somVideo"
          width="320"
          height="240"
          controls
          onClick={(e) => e.stopPropagation()}>
          <source
            src="https://som-assets.s3.us-west-2.amazonaws.com/Render+total+-+No+sound_3.mp4"
            type="video/mp4"
          />
        </video>
      </VideoModal>
    </AboutSection>
  );
};

const imageShape = {
  mimified: PropTypes.string
};

const artistShape = {
  avatar_image: PropTypes.shape(imageShape),
  name: PropTypes.string
};

const productorShape = {
  photo: PropTypes.string,
  name: PropTypes.string
};

const communityUserShape = {
  id: PropTypes.string,
  artist: PropTypes.shape(artistShape),
  productor: PropTypes.shape(productorShape)
};

About.propTypes = {
  communityUsers: PropTypes.arrayOf(PropTypes.shape(communityUserShape))
};

export default About;
