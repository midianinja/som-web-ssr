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
    position: relative;
    background-color: #692fcc;
    background-size: cover;
  }

  > div:nth-child(2) {
    background-image: url('/images/home/how-it-works-1.png');

    > img {
      width: 130%;
      position: absolute;

      top: 4vw;
      right: 0;
    }
  }

  > div:nth-child(3) {
    background-image: url('/images/home/how-it-works-2.png');

    > img {
      height: 100%;
      position: absolute;

      top: 0;
      right: 0;
    }
  }

  > div:nth-child(6) {
    background-image: url('/images/home/how-it-works-3.png');
  }

  > div:nth-child(7) {
    background-image: url('/images/home/how-it-works-4.png');
  }
`;

export const IDAContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 144px;
  gap: 13px;
`;
