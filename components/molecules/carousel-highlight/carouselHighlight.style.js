import styled from 'styled-components';
import { white } from '../../../settings/colors';

export const CarouselContent = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(${({ quantity }) => quantity}, 90vw);
  grid-template-rows: minmax(calc(90vw / 1.2), 1fr);
  gap: 12px;

  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.51, 0.58, 0.55, 0.95);
  transform: translateX(
    ${({ card }) => {
      return `calc(${card} * -90vw - ${card} * 13px)`;
    }}
  );

  @media (min-width: 1024px) {
    grid-template-columns: repeat(${({ quantity }) => quantity}, 70vw);
    grid-template-rows: calc(70vw * 0.559);

    gap: 7.6vw;

    transform: translateX(
      ${({ card }) => {
        return `calc((${card} * -70vw) + (${card - 2} * -7.6vw))`;
      }}
    );
  }

  margin-top: 56px;
`;

export const CarouselItem = styled.li`
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
`;

export const ItemImageWrapper = styled.figure`
  display: flex;
  align-items: center;

  width: 100%;
  height: calc(90vw / 1.2);

  @media (min-width: 1024px) {
    height: calc(70vw * 0.559);
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.1);

  @media (min-width: 1024px) {
    border-radius: 8px;
  }
`;

export const ItemContent = styled.div`
  display: grid;
  gap: 8px;

  width: 80vw;

  justify-content: end;

  padding-top: 24px;
  padding-bottom: 24px;

  @media (min-width: 1024px) {
    display: none;
  }

  @media (min-width: 1400px) {
    gap: 24px;
  }
`;

export const ItemTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;

  line-height: 1.1em;
  color: ${white};

  @media (min-width: 1024px) {
    font-size: 28px;
  }

  @media (min-width: 1400px) {
    font-size: 36px;
  }
`;

export const ItemDescription = styled.p`
  font-weight: 200;
  font-size: 16px;
  line-height: 1.2em;
  color: ${white};

  @media (min-width: 1024px) {
    font-size: 16px;
  }

  @media (min-width: 1400px) {
    font-size: 20px;
  }
`;

export const Tag = styled.span`
  display: inline-block;
  width: auto;
  color: ${white};

  background: rgba(130, 130, 130, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 15px;

  font-weight: 400;
  font-size: 11px;
  line-height: 11px;
  padding: 6px 10px;

  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  > span {
    position: relative;
    top: 2px;
  }
`;

export const Indicators = styled.ul`
  display: flex;
  justify-content: center;

  gap: 20px;

  margin-top: 32px;

  @media (min-width: 1024px) {
    margin-top: 59px;
    margin-bottom: 59px;
  }
`;

export const IndicatorBall = styled.li`
  width: 6px;
  height: 6px;
  border-radius: 50%;

  background: ${white};
  opacity: 0.3;

  transition-duration: 0.4s;

  ${({ actived }) => {
    if (actived) {
      return `
        opacity: 1;
        transform: scale(1.8);
      `;
    }
  }}
`;

export const Controls = styled.div`
  display: none;

  position: absolute;
  top: 28vw;
  left: 15.1vw;
  margin-left: auto;
  margin-right: auto;

  width: 70vw;
  justify-content: space-between;

  z-index: 1;

  @media (min-width: 1024px) {
    display: flex;
  }

  @media (min-width: 1400px) {
    top: 26vw;
  }
`;

export const IconWrapper = styled.div`
  position: relative;

  &:first-child {
    left: -5vw;
  }

  &:last-child {
    right: -5vw;
  }

  > svg {
    border-radius: 50%;
    cursor: pointer;
  }
`;
