import React from 'react';
import HowItsWorkCard from '../../../../molecules/how-it-works/howItWorks';
import { Section, Grid, Title, IDAContent } from './howItWorks.style';

const HowItWorks = () => (
  <Section id="how-it-works">
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
          />16
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="68" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <Title>Como funciona</Title>
    </header>
    <Grid>
      <div className="content">
        <div>
          <span className="number">1</span>
          <h3>Crie sua conta IDA</h3>
        </div>
      </div>
      <div>
        <img alt="" src="/images/home/how-it-works-1-1.png" />
      </div>
      <div>
        <img alt="" src="/images/home/how-it-works-2-1.png" />
      </div>
      <div className="content">
        <div>
          <span className="number">2</span>
          <h3>Preencha seu perfil</h3>
        </div>
      </div>
      <div className="content">
        <div>
          <span className="number">3</span>
          <h3>Aproveite oportunidades</h3>
        </div>
      </div>
      <div></div>
      <div></div>
      <div className="content">
        <div>
          <span className="number">4</span>
          <h3>Participe da comunidade da Música</h3>
        </div>
      </div>
    </Grid>

    <svg viewBox="0 0 1441 3192" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1441 25H539C373.315 25 239 159.315 239 325V480.041C239 559.426 270.464 635.574 326.5 691.804L726 1092.7C782.036 1148.93 813.5 1225.07 813.5 1304.46V1569V1569C813.5 1688.29 716.793 1785 597.5 1785H301C221.471 1785 157 1849.47 157 1929V1929V2137C157 2302.69 291.315 2437 457 2437H719H759C831.902 2437 891 2496.1 891 2569V2569V2867C891 3032.69 756.685 3167 591 3167H0"
        stroke="white"
        strokeWidth="50"
      />
    </svg>

    <IDAContent>
      <HowItsWorkCard
        title="Conta IDA"
        description="Com o login IDA você tem acesso ao SOM e a todo universo NINJA"
      />
      <HowItsWorkCard
        iconNumber={1}
        title="Tenha personalidade"
        description="Customize seu perfil, suba suas músicas, conte sua história!"
      />
      <HowItsWorkCard
        iconNumber={2}
        title="Oportunidades"
        description="Vagas em shows e festivais, aulas e oficinas, editais e muito mais"
      />
    </IDAContent>
  </Section>
);

export default HowItWorks;
