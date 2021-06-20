import styled from 'styled-components';
import { black, transparent, white } from '../../../../../settings/colors';

export const AboutSection = styled.section`
  background-color: ${white};
  padding-bottom: 48px;
  padding-top: 48px;
  text-align: center;

  @media (min-width: 768px) {
    padding-top: 122px;
  }
`;

export const Title = styled.h2`
  position: relative;

  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.1em;

  margin-top: 16px;

  @media (min-width: 768px) {
    font-size: 56px;
  }
`;

export const Subtitle = styled.h3`
  width: 77vw;
  position: relative;

  font-weight: 900;
  font-size: 24px;
  line-height: 1.1em;

  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 48px;
    width: calc(77vw * 0.6);
    margin-bottom: 16px;
    margin-top: 170px;
  }
`;

export const Text = styled.p`
  width: 77vw;

  font-weight: 300;
  font-size: 16px;
  line-height: 1.2em;

  color: #919191;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: calc(77vw * 0.5);
    font-size: 20px;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding-left: 16px;
  padding-right: 16px;

  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;

  @media (min-width: 768px) {
    display: grid;
    width: 72vw;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(20, 6vw);

    margin-top: 170px;

    padding-left: 0;
    padding-right: 0;
  }

  svg {
    user-select: none;
  }

  h3 {
    margin-top: 16px;
    letter-spacing: -1px;
  }

  > div {
    position: relative;
    text-align: left;

    border-radius: 8px;
    background-color: #f1f1f1;

    &.__default {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;

      padding: 16px;
      padding-bottom: 80px;

      @media (max-width: 768px) {
        width: calc(100vw - 32px);
        min-height: calc(100vw - 32px);

        &.__big {
          min-height: calc(100vw + 30vw - 32px);
        }
      }

      @media (min-width: 768px) {
        width: auto;
        max-height: auto;

        padding: 51px 40px 80px 40px;
      }

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
        max-width: 280px;
        font-weight: 900;
        font-size: 36px;
        line-height: 1.1em;
        color: #ffffff;

        @media (min-width: 768px) {
          max-width: 420px;
        }
      }
    }

    &:nth-child(1) {
      background: linear-gradient(149.62deg, #5451db 14.66%, #52bbb5 50.49%, #51dba9 86.31%);

      display: flex;
      flex-direction: column;
      justify-content: center;

      gap: 20px;

      padding-left: 6vw;
      padding-top: 170px;
      padding-bottom: 30px;

      @media (min-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 3;

        grid-row-start: 1;
        grid-row-end: 5;

        padding-top: 0px;
        padding-bottom: 0px;
        width: auto;
      }

      > h3 {
        font-weight: 900;
        font-size: 48px;
        line-height: 1.2em;
        color: ${white};

        max-width: 200px;

        @media (min-width: 767px) {
          max-width: 397px;
        }

        > svg {
          height: 36px;
          margin-left: 12px;
        }
      }

      > img {
        position: absolute;

        width: 32%;
        min-width: 191px;

        @media (max-width: 767px) {
          display: none;
          top: 0;
        }

        @media (min-width: 768px) {
          display: block;

          bottom: 0;
          right: 6vw;
        }
      }

      > p {
        font-weight: 300;
        font-size: 20px;
        line-height: 1.2em;
        color: ${white};

        @media (min-width: 768px) {
          max-width: 50%;
        }
      }

      > button {
        width: 167px;
        height: 40px;

        border-radius: 32px;

        font-weight: 300;
        font-size: 16px;

        cursor: pointer;

        font-family: CircularStd;
        background-color: ${white};
        color: #51bcb4;
      }
    }

    &:nth-child(2) {
      background-color: #ffcb16;

      > h3 {
        color: ${black};
      }

      > p {
        z-index: 1;

        font-weight: 300;
        font-size: 20px;
        line-height: 1.2em;

        margin-top: 16px;
        margin-bottom: 8px;
        max-width: 480px;
        color: ${black};

        overflow-y: hidden;

        max-height: ${({ open }) => (open === 'yellow' ? '100vh' : '0px')};
      }

      @media (min-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 5;
        grid-row-end: 9;
      }
    }

    &:nth-child(3) {
      justify-content: flex-start;

      overflow-y: hidden;

      background-image: url('/images/home/about-1.png');
      background-position: top center;
      background-size: cover;

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;

        display: block;
        width: 100%;
        height: 200%;

        transition-duration: 0.8s;
        background: linear-gradient(180deg, #f95025 50%, rgba(249, 80, 37, 0) 100%);
        transform: translateY(${({ open }) => (open === 'orange' ? '50%' : 0)});
      }

      > h3 {
        margin-top: 16px;
        z-index: 1;
      }

      > p {
        z-index: 1;

        font-weight: 300;
        font-size: 20px;
        line-height: 1.2em;

        margin-top: 16px;
        margin-bottom: 8px;
        max-width: 480px;

        color: ${white};
        overflow-y: hidden;

        max-height: ${({ open }) => (open === 'orange' ? '100vh' : '0px')};
      }

      @media (min-width: 768px) {
        grid-column-start: 2;
        grid-column-end: 3;

        grid-row-start: 5;
        grid-row-end: 11;
      }
    }

    &:nth-child(4) {
      background-color: #7735e5;

      > p {
        z-index: 1;

        font-weight: 300;
        font-size: 20px;
        line-height: 1.2em;

        margin-top: 16px;
        margin-bottom: 8px;
        max-width: 480px;

        color: ${white};
        overflow-y: hidden;

        max-height: ${({ open }) => (open === 'purple' ? '100vh' : '0px')};
      }

      @media (min-width: 768px) {
        grid-column-start: 2;
        grid-column-end: 3;

        grid-row-start: 11;
        grid-row-end: 15;
      }
    }

    &:nth-child(5) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;

      overflow-y: hidden;

      background-image: url('/images/home/about-2.png');
      background-position: top center;
      background-size: cover;

      &:before {
        display: block;
        width: 100%;
        height: 200%;
        background: linear-gradient(180deg, rgba(255, 45, 118, 0) 0%, #ff2d76 34%);

        transform: translateY(${({ open }) => (open === 'pink' ? '-40%' : 0)});
      }

      > h3 {
        z-index: 1;
      }

      > p {
        z-index: 1;

        font-weight: 300;
        font-size: 20px;
        line-height: 1.2em;

        margin-top: 16px;
        margin-bottom: 8px;
        max-width: 480px;

        color: ${white};
        overflow-y: hidden;

        max-height: ${({ open }) => (open === 'pink' ? '100vh' : '0px')};
      }

      @media (min-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 2;

        grid-row-start: 9;
        grid-row-end: 15;
      }
    }

    &:nth-child(6) {
      background-color: ${transparent};
      border: solid 1px ${black};

      display: flex;
      justify-content: flex-end;

      @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 90px;
        padding: 30px;
      }

      @media (min-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 3;

        grid-row-start: 15;
        grid-row-end: 20;

        padding-right: 6vw;
      }

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 300px;
        gap: 20px;

        @media (min-width: 768px) {
          padding-top: 0px;
          max-width: 40%;
          flex-direction: column;
        }
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
        width: calc(100% - 60px);
        top: -80px;

        box-shadow: 0px 40px 50px rgba(0, 0, 0, 0.3);

        @media (min-width: 768px) {
          width: 36%;
          top: auto;
          left: 6vw;
          bottom: -6vw;
        }
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

        font-family: CircularStd;
        font-weight: 300;
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
  cursor: pointer;

  ${({ open }) => {
    if (open) {
      return `
        transform: rotate(45deg);
      `;
    }
  }}
`;
