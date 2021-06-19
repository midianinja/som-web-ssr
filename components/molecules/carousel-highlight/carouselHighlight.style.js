import styled from 'styled-components';
import { white } from '../../../settings/colors';

export const CarouselContent = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(${({ quantity }) => quantity}, 90vw);
  grid-template-rows: minmax(calc(90vw / 1.2), 1fr);
  gap: 12px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(${({ quantity }) => quantity}, 70vw);
    grid-template-rows: calc(70vw * 0.559);

    gap: 7.6vw;

    transform: translateX(calc(-70vw + 7.6vw));
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

  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);

  @media (min-width: 1024px) {
    border-radius: 6px;
  }
`;

export const ItemContent = styled.div`
  display: grid;
  gap: 12px;

  width: 77vw;

  justify-content: end;

  padding-top: 24px;
  padding-bottom: 24px;

  @media (min-width: 1024px) {
    position: absolute;
    width: 245px;
    height: 100%;

    gap: 24px;

    left: calc(7.6vw / 2);

    justify-content: start;
    align-content: center;
  }
`;

export const ItemTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;

  max-width: 80%;

  line-height: 1.1em;
  color: ${white};
`;

export const ItemDescription = styled.p`
  max-width: 80%;

  font-weight: 200;
  font-size: 16px;
  line-height: 1.1em;
  color: ${white};
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
  line-height: 1.1em;
  padding: 6px 10px;

  text-transform: uppercase;
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
