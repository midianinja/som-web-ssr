import styled from 'styled-components';
import { black } from '../../../settings/colors';

export const Container = styled.div`
  background-color: ${black};
  width: 100%;
  text-align: center;
`;

export const ProductorCardWrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 1024px) {
    padding-bottom: 40px;
  }
`;

export const CoverWrapper = styled.div`
  width: 100%;
  z-index: 0;
  margin-top: 51px;

  @media (min-width: 1024px) {
    top: 51px;
    position: fixed;
    margin-top: 0px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 45vh;
`;

export const Content = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
  max-width: 1024px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: -60px;
  z-index: 2;

  @media (min-width: 1024px) {
    margin-top: 0px;
    padding-top: 250px;
  }
`;

export const ColumnWrapper = styled.div`
  display: inline-block;
  width: 100%;
  vertical-align: top;
  @media (min-width: 1024px) {
    max-width: calc(100% - 484px);
    margin-left: 484px;
  }
`;

export const EventImage = styled.img`
  width: 0;
  height: 0;
  visibility: hidden;
`;
