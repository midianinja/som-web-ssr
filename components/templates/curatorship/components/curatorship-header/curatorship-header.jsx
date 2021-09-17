import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import {
  Header,
  BackButtonWrapper,
  BackButton,
  OpportunityWrapper,
  Figure,
  OpportunityImage,
  SpanSubscritionToText,
  OpportunityTitle,
  Informations,
  Location,
  Date
} from './curatorship-header.style';
import moment from 'moment';

const CuratorshipHeader = ({ title, city, state, eventDate, subscribeClosingDate, image }) => {
  const router = useRouter();

  return (
    <Header>
      <BackButtonWrapper>
        <BackButton onClick={() => router.push('/dashboard')}>
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1L2.00046 6.99954L8 12.9991" stroke="white" strokeWidth="2" />
          </svg>
          Voltar
        </BackButton>
        <OpportunityWrapper>
          <Figure>
            <OpportunityImage src={image} alt="" />
          </Figure>
          <Informations>
            <SpanSubscritionToText>Inscrições para</SpanSubscritionToText>
            <OpportunityTitle>{title}</OpportunityTitle>
            <div>
              <Location>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.99935 1.16602C4.74185 1.16602 2.91602 2.99185 2.91602 5.24935C2.91602 8.31185 6.99935 12.8327 6.99935 12.8327C6.99935 12.8327 11.0827 8.31185 11.0827 5.24935C11.0827 2.99185 9.25685 1.16602 6.99935 1.16602ZM4.08268 5.24935C4.08268 3.63935 5.38935 2.33268 6.99935 2.33268C8.60935 2.33268 9.91602 3.63935 9.91602 5.24935C9.91602 6.92935 8.23602 9.44352 6.99935 11.0127C5.78602 9.45518 4.08268 6.91185 4.08268 5.24935ZM5.54102 5.24935C5.54102 4.44393 6.19393 3.79102 6.99935 3.79102C7.52036 3.79102 8.0018 4.06897 8.2623 4.52018C8.52281 4.97139 8.52281 5.52731 8.2623 5.97852C8.0018 6.42973 7.52036 6.70768 6.99935 6.70768C6.19393 6.70768 5.54102 6.05476 5.54102 5.24935Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
                <span>
                  {city}, {state}
                </span>
              </Location>
              <Date>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.25 11.666V3.49935C12.25 2.85768 11.725 2.33268 11.0833 2.33268H10.5V1.16602H9.33333V2.33268H4.66667V1.16602H3.5V2.33268H2.91667C2.26917 2.33268 1.75583 2.85768 1.75583 3.49935L1.75 11.666C1.75 12.3077 2.26917 12.8327 2.91667 12.8327H11.0833C11.725 12.8327 12.25 12.3077 12.25 11.666ZM5.25 7.58268V6.41602H4.08333V7.58268H5.25ZM2.91667 4.66602H11.0833V3.49935H2.91667V4.66602ZM11.0833 5.83268V11.666H2.91667V5.83268H11.0833ZM9.91667 7.58268V6.41602H8.75V7.58268H9.91667ZM7.58333 7.58268H6.41667V6.41602H7.58333V7.58268Z"
                    fill="white"
                    fillOpacity="0.5"
                  />
                </svg>
                <span>
                  Realização: {moment(eventDate || 0).format('DD.MM.YYYY')} / Fim da curadoria:{' '}
                  {moment(subscribeClosingDate || 0).format('DD.MM.YYYY')}
                </span>
              </Date>
            </div>
          </Informations>
        </OpportunityWrapper>
      </BackButtonWrapper>
    </Header>
  );
};

CuratorshipHeader.propTypes = {
  title: PropTypes.string.isRequired,
  city: PropTypes.string.isRequried,
  state: PropTypes.string.isRequried,
  eventDate: PropTypes.number.isRequired,
  subscribeClosingDate: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};

export default CuratorshipHeader;
