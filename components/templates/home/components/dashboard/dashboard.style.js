import styled from 'styled-components';
import { white } from '../../../../../settings/colors';

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgba(119, 53, 229), rgba(31, 24, 41, 0.5));

  padding-top: 55px;

  @media (min-width: 1024px) {
    padding-bottom: 192px;
  }
`;

export const CarouselPrimarySection = styled.div`
  margin-top: 30px;
`;

export const TextOportunidades = styled.h2`
  width: 77vw;

  margin-left: auto;
  margin-right: auto;
  margin-top: 54px;
  margin-bottom: 16px;

  font-size: ${({ big }) => (big ? '20px' : '18px')};
  font-weight: 700;
  line-height: 1.2em;

  color: ${white};
  padding-right: 15vw;

  @media (min-width: 1024px) {
    max-width: 70vw;
    font-size: ${({ big }) => (big ? '30px' : '20px')};
    text-align: center;
    padding-right: 0;
    padding-bottom: 25px;
  }
`;

export const Section = styled.div`
  flex-direction: row;
`;
