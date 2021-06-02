import styled from 'styled-components';
import { white } from '../../../../../settings/colors';

export const Section = styled.section`
  background-color: #7735e5;
  padding-top: 143px;
  padding-bottom: 143px;

  > header {
    text-align: center;
    margin-bottom: 143px;
  }
`;

export const Title = styled.h2`
  position: relative;

  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 1.1em;

  margin-top: 16px;

  color: ${white};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 50vw);

  > div:nth-child(2),
  > div:nth-child(3),
  > div:nth-child(6),
  > div:nth-child(7) {
    background-color: #692fcc;
  }
`;
