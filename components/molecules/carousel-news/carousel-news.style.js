import styled from 'styled-components';

export const CarouselContent = styled.ul`
  list-style: none;
  display: grid;

  grid-template-columns: repeat(${({ quantity }) => quantity}, 55vw);
  grid-template-rows: minmax(calc(55vw / 1.2), 1fr);
  gap: 12px;

  transform: translateX(calc(-110vw + 24px));
`;

export const CarouselItem = styled.li`
  background-color: rgba(255, 255, 255, 0.1);
`;
