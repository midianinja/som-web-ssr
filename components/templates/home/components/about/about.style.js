import styled from 'styled-components';
import { black, transparent, white } from '../../../../../settings/colors';

export const AboutSection = styled.section`
  background-color: ${white};
  padding-bottom: 122px;
  padding-top: 122px;
  text-align: center;

  @media (min-width: 1024px) {
  }
`;

export const Title = styled.h2`
  position: relative;

  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 1.1em;

  margin-top: 16px;
`;

export const Subtitle = styled.h3`
  position: relative;
  max-width: 500px;

  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.1em;

  margin-left: auto;
  margin-right: auto;
  margin-top: 122px;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  max-width: 340px;

  font-weight: 450;
  font-size: 16px;
  line-height: 1.1em;

  color: #919191;

  margin-left: auto;
  margin-right: auto;
`;

export const Grid = styled.div`
  width: 72vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(20, 6vw);
  gap: 15px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;

  > div {
    position: relative;
    text-align: left;

    border-radius: 8px;
    background-color: #f1f1f1;

    &.__default {
      display: flex;
      align-items: flex-end;

      padding: 51px 40px 80px 40px;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        display: block;

        width: 100%;
        height: 100%;
      }

      > h3 {
        max-width: 420px;

        font-weight: 900;
        font-size: 36px;
        line-height: 1.1em;
        color: #ffffff;
      }
    }

    &:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 3;

      grid-row-start: 1;
      grid-row-end: 5;

      background: linear-gradient(149.62deg, #5451db 14.66%, #52bbb5 50.49%, #51dba9 86.31%);

      display: flex;
      flex-direction: column;
      justify-content: center;

      gap: 20px;

      padding-left: 6vw;

      > h3 {
        font-weight: 900;
        font-size: 48px;
        color: ${white};

        max-width: 397px;

        > svg {
          height: 36px;
          margin-left: 12px;
        }
      }

      > img {
        position: absolute;
        width: 32%;
        right: 6vw;
        bottom: 0;
      }

      > p {
        font-weight: 300;
        font-size: 20px;
        line-height: 1.2em;
        color: ${white};

        max-width: 50%;
      }

      > button {
        width: 167px;
        height: 40px;

        border-radius: 32px;

        font-weight: 400;
        font-size: 16px;

        cursor: pointer;

        background-color: ${white};
        color: #51bcb4;
      }
    }

    &:nth-child(2) {
      grid-column-start: 1;
      grid-column-end: 2;

      grid-row-start: 5;
      grid-row-end: 9;

      background-color: #ffcb16;

      > h3 {
        color: ${black};
      }
    }

    &:nth-child(3) {
      grid-column-start: 2;
      grid-column-end: 3;

      grid-row-start: 5;
      grid-row-end: 11;

      background-color: #f95025;

      align-items: flex-start;
    }

    &:nth-child(4) {
      grid-column-start: 2;
      grid-column-end: 3;

      grid-row-start: 11;
      grid-row-end: 15;

      background-color: #7735e5;
    }

    &:nth-child(5) {
      grid-column-start: 1;
      grid-column-end: 2;

      grid-row-start: 9;
      grid-row-end: 15;

      background-color: #ff2d76;
    }

    &:nth-child(6) {
      grid-column-start: 1;
      grid-column-end: 3;

      grid-row-start: 15;
      grid-row-end: 20;

      background-color: ${transparent};
      border: solid 1px ${black};

      padding-right: 6vw;

      display: flex;
      justify-content: flex-end;

      > div {
        max-width: 40%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 20px;
      }

      > div > h3 {
        font-weight: 900;
        font-size: 40px;
        line-height: 1.1em;
        color: ${black};

        max-width: 367px;
      }

      > img {
        position: absolute;

        width: 36%;
        left: 6vw;
        bottom: -64px;

        box-shadow: 0px 40px 50px rgba(0, 0, 0, 0.3);
      }

      > div > p {
        font-weight: 300;
        font-size: 20px;
        line-height: 1.2em;
        color: ${black};
      }

      > div > button {
        width: 167px;
        height: 40px;

        border-radius: 32px;

        font-weight: 400;
        font-size: 16px;
        color: ${white};

        cursor: pointer;

        background-color: ${black};
      }
    }
  }
`;

export const ToggleButton = styled.svg`
  position: absolute;
  width: 70px;
  bottom: 31px;
  right: 45px;

  z-index: 2;
  transition-duration: 0.5s;

  cursor: pointer;

  &:hover {
    transform: rotate(45deg);
  }
`;
