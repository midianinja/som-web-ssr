import styled from 'styled-components';

export const CarouselContent = styled.ul`
  list-style: none;
  display: grid;

  grid-template-columns: repeat(${({ quantity }) => quantity}, 77vw);
  grid-template-rows: minmax(calc(77vw / 1.2), 1fr);
  gap: 12px;

  transform: translateX(calc(-144vw - 16px));
`;

export const CarouselItem = styled.li`
  background-color: rgba(255, 255, 255, 0.1);
`;
