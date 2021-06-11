import styled from 'styled-components';
import { white } from '../../../../../settings/colors';

export const Section = styled.section`
  position: relative;
  background-color: #7735e5;
  padding-top: 35px;
  padding-bottom: 35px;

  > header {
    text-align: center;
    margin-bottom: 35px;

    @media (min-width: 768px) {
      margin-bottom: 286px;
    }
  }

  > svg {
    display: none;
    position: absolute;
    z-index: 1;

    top: 320px;
    width: 100%;

    @media (min-width: 768px) {
      display: block;
    }
  }

  @media (min-width: 768px) {
    padding-top: 143px;
    padding-bottom: 143px;
  }
`;

export const Title = styled.h2`
  position: relative;

  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.1em;

  margin-top: 16px;

  color: ${white};

  @media (min-width: 768px) {
    font-size: 56px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(4, 50vw);

  > div {
    position: relative;
    z-index: 2;
  }

  > div.content {
    color: ${white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
      padding: 16px;
    }

    > div > span {
      font-weight: 400;
      font-size: 36px;
      line-height: 1.2em;
      letter-spacing: 0.16px;
    }

    > div > h3 {
      margin-top: 16px;
      font-weight: 700;
      font-size: 16px;
      line-height: 1.2em;
      letter-spacing: 0.16px;
      max-width: calc(100% - 16px);

      @media (min-width: 768px) {
        font-size: 48px;
        max-width: 319px;
      }
    }
  }

  @media (min-width: 768px) {
    > div:nth-child(1) > div {
      position: relative;
      left: 9%;
    }

    > div:nth-child(4) > div {
      position: relative;
      left: -12%;
      top: -2%;
    }

    > div:nth-child(5) > div {
      position: relative;
      left: -2%;
      top: 1%;
    }

    > div:nth-child(8) > div {
      position: relative;
      top: -18%;
    }
  }

  > div:nth-child(2),
  > div:nth-child(3),
  > div:nth-child(6),
  > div:nth-child(7) {
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
  position: relative;
  z-index: 2;
  padding: 16px;

  display: grid;
  grid-template-columns: repeat(3, 311px) 16px;
  gap: 13px;
  overflow-x: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &:after {
    content: '';
    display: block;
  }

  margin-top: 72px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-top: 144px;
  }
`;
