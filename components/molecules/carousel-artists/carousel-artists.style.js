import styled from 'styled-components';
import { white } from '../../../settings/colors';

export const CarouselContent = styled.ul`
  display: grid;
  list-style: none;

  grid-template-columns: repeat(${({ quantity }) => quantity}, 77vw);
  grid-template-rows: minmax(calc(77vw / 1.2), 1fr);
  gap: 12px;

  transform: translateX(calc(-144vw - 16px));

  @media (min-width: 1024px) {
    width: 70vw;

    margin-left: auto;
    margin-right: auto;
    overflow-x: hidden;
    grid-template-columns: repeat(${({ quantity }) => quantity}, 16.7vw);
    grid-template-rows: auto;
    transform: translateX(0);
    /* grid-template-rows: auto; */
  }
`;

export const CarouselItem = styled.li`
  background-color: rgba(255, 255, 255, 0.1);

  border-radius: 4px;
  overflow: hidden;

  @media (min-width: 1024px) {
    border-radius: 8px;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: calc(77vw * 0.55);

  object-fit: cover;

  background-color: rgba(255, 255, 255, 0.1);

  @media (min-width: 1024px) {
    height: calc(16.7vw * 0.55);
  }
`;

export const ItemContent = styled.div`
  display: grid;
  gap: 12px;

  background: rgba(146, 128, 169, 0.3);
  backdrop-filter: blur(20px);

  padding: 15px 12px;
`;

export const ItemTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;

  line-height: 1.1em;
  color: ${white};
`;

export const ItemDescription = styled.p`
  font-weight: 200;
  font-size: 16px;
  line-height: 1.1em;
  color: ${white};
`;

export const Tag = styled.span`
  display: inline-block;
  width: auto;
  color: ${white};

  background-color: #f95025;
  border-radius: 15px;

  font-weight: 400;
  font-size: 11px;
  line-height: 1.1em;
  padding: 6px 10px;

  text-transform: uppercase;
`;
