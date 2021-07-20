import styled from 'styled-components';
import { black } from '../../../settings/colors';

export const ProductorWrapper = styled.div`
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
  margin-top: 50px;

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
  display: inline-grid;
  padding-top: 64px;
  position: relative;
  max-width: 1024px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    padding-top: 150px;
    justify-content: space-between;
  }
`;

export const ColumnWrapper = styled.div`
  display: inline-block;
  width: 100%;

  @media (min-width: 1024px) {
    margin-top: 130px;
  }
`;

export const EventsTitle = styled.h2`
  text-align: left;
  font-size: 1.3rem;
  font-weight: 400;
  margin-top: 40px;
  margin-left: 30px;
`;

export const NotEvents = styled.span`
  display: inline-block;
  padding: 30px;
  font-weight: 200;
`;

export const EventsContainer = styled.div`
  display: grid;
  padding: 15px 30px;

  @media (min-width: 1024px) {
    grid-template-columns:  1fr 1fr 1fr;
    grid-gap: 30px;
  }
`;
