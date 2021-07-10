import styled from 'styled-components';
import { white } from '../../../settings/colors';

export const imgStyle = `
  width: 33.33vw;
  height: 33.33vw;
  
  @media (min-width: 1024px) {
    width: calc(195px - 21.6666666667px);
    height: calc(195px - 21.6666666667px);
  }
`;

export const Container = styled.div`
  margin-top: 30px;
  padding: 10px 15px;
`;

export const Row = styled.div`
  display: flex;
`;

export const MobileRow = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    // display: none;
  }
`;

export const Title = styled.h3`
  font-weight: 400;
  line-height: 1em;
  color: ${white};
  text-align: left;
  margin-bottom: 20px;
`;
