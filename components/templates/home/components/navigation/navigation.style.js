import styled from 'styled-components';
import { white, purple, black, black15 } from '../../../../../settings/colors';

export const NavigationWrapper = styled.nav`
  position: absolute;
  top: 18px;
  left: 30px;
  z-index: 40;

  @media (min-width: 1024px) {
    position: fixed;
    display: grid;
    grid-template-rows: 14px 1fr;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 18px;
    background-color: ${white};

    span {
      background-color: ${black};
    }
  }
`;

export const Indicators = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-top: -14px;
  align-self: center;
  align-items: center;
`;

export const Ball = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ selected }) => selected ? purple : black15};
  }
`;
