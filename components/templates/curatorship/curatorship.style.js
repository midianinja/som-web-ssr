import styled from 'styled-components';

export const Page = styled.section`
  padding-left: 22px;
  padding-right: 22px;
`;

export const Main = styled.main`
  display: flex;
  align-items: flex-start;

  max-width: 768px;

  margin-top: 42px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    gap: 80px;
  }
`;

export const FilterWrapper = styled.ul`
  position: fixed;
  bottom: 33px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 1024px) {
    position: static;
    width: 160px;
  }
`;

export const FilterItem = styled.li``;
