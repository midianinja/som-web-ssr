import styled from 'styled-components';
import { getGradient } from '../../../../../settings/gradients';

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 196px;
  gap: 24px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 196px 1fr;
    grid-template-rows: 196px;
  }
`;

export const Figure = styled.figure`
  background: ${getGradient()};
  max-width: 70vw;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 24px;
`;

export const InfoWrapper = styled.div`
  display: grid;
  align-content: start;
  gap: 8px;
`;

export const OpportunityName = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2em;

  color: #ffffff;
`;

export const SubscriptionText = styled.p`
  color: #ffffff;

  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  letter-spacing: 0.16px;
`;

const statusColors = {
  refused: '#7735e5',
  subscribed: '#5a5a5a',
  approved: '#20a676'
};

export const StatusTag = styled.span`
  padding: 6px 10px;

  font-weight: 450;
  font-size: 12px;

  letter-spacing: 0.16px;

  color: #ffffff;

  background-color: ${({ status }) => statusColors[status]};

  border-radius: 7px;
`;
