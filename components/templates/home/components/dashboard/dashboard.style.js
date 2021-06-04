import styled from 'styled-components';
import {
    white
  } from '../../../../../settings/colors';

export const DashboardContent = styled.div`
    display: flex;
    background: linear-gradient(
    180deg,
    rgba(119, 53, 229),
    rgba(31, 24, 41, 0.5) 
    );
    flex-direction: column;

`;

export const CarouselPrimarySection = styled.div`
    align-self: center;
    margin-top: 30px; 

`;

export const TextOportunidades = styled.h2`
    padding: 60px;
    margin-top: 60px;
    font-family: CircularStd;
    font-size: 26px;
    font-weight: 200;
    line-height: 1.1em;
    color: ${white};
    text-align: center;
`;

export const Section = styled.div`
    align-self: center;
    flex-direction: row;
    align-content: center;
    
`;

