import styled from 'styled-components';
import { white } from '../../../settings/colors';

export const Card = styled.div`
  &:nth-child(even) {
    text-align: right;
    justify-items: right;
  }

  @media (min-width: 1024px) {
    display: flex;
    width: 100%;
    text-align: right;
    justify-items: right;

    > div {
      right: -10vw;
      z-index: 13;
    }

    &:nth-child(even) {
      flex-direction: row-reverse;
      text-align: left;
      justify-items: left;

      > div {
        right: auto;
        left: -10vw;
        z-index: 13;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 1024px) {
    display: flex;
    max-width: 400px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Cover = styled.div`
  position: relative;
  width: 100%;
  max-width: 557px;
  height: 64vw;
  max-height: 300px;
  border-radius: 10px;
  margin-bottom: 16px;
  background-image: url("${({ src }) => src}");
  background-size: cover; 

  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: linear-gradient(270deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
    z-index: 10;
  }
`;

export const ActionWrapper = styled.div``;

export  const Title = styled.h3`
  font-family: CircularStd;
  font-weight: 400;
  font-size: 26px;
  line-height: 1em;
  color: ${white};
`;

export const Text = styled.p`
  font-family: CircularStd;
  font-weight: 200;
  font-size: 16px;
  line-height: 1em;
  color: ${white};
`;
