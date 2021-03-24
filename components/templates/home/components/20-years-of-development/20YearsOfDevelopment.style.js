import styled from 'styled-components';
import { white, magenta } from '../../../../../settings/colors';

export const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 166px;
  position: relative;
  overflow: hidden;
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
  padding-right: 30px;
  z-index: 2;
`;

export const Title = styled.h2`
  font-family: CircularStd;
  font-weight: 900;
  font-size: 28px;
  line-height: 1em;
  color: ${white};
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
`;

export const Twenty = styled.img`
  position: absolute;
  display: block;
  height: 350px;
  line-height: 1em;
  letter-spacing: -0.05em;
  left: calc(-50% + 27vw);
  bottom: -40px;
  z-index: 1;
`;
