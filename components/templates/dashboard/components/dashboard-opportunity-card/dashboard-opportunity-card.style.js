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
