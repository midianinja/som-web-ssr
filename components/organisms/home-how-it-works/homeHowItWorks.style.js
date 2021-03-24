import styled from 'styled-components';
import { purple, white, white50 } from '../../../settings/colors';

export const Container = styled.section`
  background-color: ${purple};
  position: relative;
  padding: 60px 30px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 1.1em;
  color: ${white};
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    width: 100%;
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
`;

export const Content = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
`;

export const ScrollIndicatorWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const scrollLineWidth = 120;
export const scrollIndicatorWidth = 48;

export const ScrollIndicator = styled.div`
  position: relative;
  display: inline-block;
  width: ${scrollLineWidth}px;
  height: 2px;
  background-color: ${white50};
  border-radius: 2px;

  :before {
    content: '';
    position: absolute;
    top: -2px;
    left: 0;
    transition-duration: 0.5s;
    transform: translateX(
      ${({ position, scrollWidth }) =>
        ((scrollLineWidth - scrollIndicatorWidth) * position) / scrollWidth + 2.5}px
    );
    will-change: transform;
    width: ${scrollIndicatorWidth}px;
    height: 6px;
    background-color: ${white};
    border-radius: 6px;
  }
`;
