import styled from 'styled-components';
import { white } from '../../../settings/colors';

export const Wrapper = styled.div`
  position: relative;
`;

export const CarouselWrapper = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 70vw;
    overflow-x: hidden;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CarouselContent = styled.ul`
  display: grid;
  list-style: none;

  grid-template-columns: repeat(${({ quantity }) => quantity}, 77vw);
  grid-template-rows: minmax(calc(77vw / 1.2), 1fr);
  gap: 12px;

  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.51, 0.58, 0.55, 0.95);
  transform: translateX(calc(${({ card }) => card} * -77vw + 11vw - ${({ card }) => card} * 12px));

  @media (min-width: 1024px) {
    width: 100%;

    grid-template-columns: repeat(${({ quantity }) => quantity}, 17vw);
    grid-template-rows: auto;

    transform: translateX(
      ${({ card }) => {
        return `calc((${card} * -70vw - ${card} * 12px))`;
      }}
    );
  }
`;

export const CarouselItem = styled.li`
  background-color: rgba(255, 255, 255, 0.1);

  border-radius: 6px;
  overflow: hidden;

  cursor: pointer;

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
    height: calc(23vw * 0.55);
  }
`;

export const ItemContent = styled.div`
  display: grid;
  gap: 12px;

  margin-top: -4px;

  background: rgba(146, 128, 169, 0.3);
  backdrop-filter: blur(20px);

  padding: 15px 12px;
`;

export const ItemTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;

  line-height: 1.1em;
  color: ${white};
`;

export const ItemDescription = styled.p`
  font-weight: 200;
  font-size: 16px;
  line-height: 1.1em;
  color: ${white};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
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

export const Controls = styled.div`
  display: none;

  position: absolute;
  top: 9vw;
  left: 15.1vw;
  margin-left: auto;
  margin-right: auto;

  width: 70vw;
  justify-content: space-between;

  z-index: 1;

  @media (min-width: 1024px) {
    display: flex;
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
