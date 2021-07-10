import styled from 'styled-components';
import { black } from '../../../settings/colors';

export const ArtistWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${black};
  color: white;
  text-align: center;

  @media (min-width: 1024px) {
    padding-bottom: 30px;
  }
`;

export const CoverWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 0;
  margin-top: 51px;

  @media (min-width: 1024px) {
    position: fixed;
    top: 53px;
    margin-top: 0px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
`;

export const Content = styled.div`
  width: 100%;
  display: inline-block;
  padding-top: 64px;
  position: relative;
  max-width: 1024px;

  @media (min-width: 1024px) {
    padding-top: 150px;
    display: inline-flex;
    justify-content: space-between;
  }
`;

export const ColumnWrapper = styled.div`
  display: inline-block;
  width: 100%;
  vertical-align: top;

  @media (min-width: 1024px) {
    max-width: calc(100% - 454px);
  }
`;
