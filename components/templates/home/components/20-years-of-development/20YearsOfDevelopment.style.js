import styled from 'styled-components';
import { white, black } from '../../../../../settings/colors';

export const Section = styled.section`
  background-color: ${black};
  padding-top: 60px;
  padding-bottom: 166px;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 1024px) {
    background-image: url('/images/20years-cover.png');
    background-size: cover;
    background-position: center;
    margin-top: 120px;
    height: 506px;
    overflow: initial;
    display: flex;
    justify-content: flex-end;

    &:after {
      content: '';
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9;
      background: linear-gradient(153.07deg, #000000 41.56%, rgba(0, 0, 0, 0) 97.57%);
    }
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;
  padding-top: 15px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: calc(10vw + 60px);
  z-index: 11;
  
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

export const Title = styled.h2`
  font-family: CircularStd;
  font-weight: 900;
  font-size: 28px;
  line-height: 1em;
  color: ${white};

  @media (min-width: 1024px) {
    font-size: 42px;
    max-width: 400px;
  }
`;

export const StarsWrapper = styled.div`
  display: inline-flex;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const ActionWrapper = styled.div``;

export const Star = styled.img``;

export const Illustration = styled.img`
  width: 100%;
  max-width: 500px;

  @media (min-width: 1024px) {
    position: absolute;
    left: 120px;
    top: -190px;
    z-index: 13;
  }
`;

export const Twenty = styled.img`
  position: absolute;
  display: block;
  height: 350px;
  line-height: 1em;
  letter-spacing: -0.05em;
  left: calc(-50% + 27vw);
  bottom: -40px;
  z-index: 10;


  @media (min-width: 1024px) {
    left: 0;
    height: calc(100% + 140px);
    top: -122px;
  }
`;
