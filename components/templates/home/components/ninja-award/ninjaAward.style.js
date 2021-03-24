import styled from 'styled-components';
import { white, green, magenta } from '../../../../../settings/colors';

export const Section = styled.section`
  background-color: ${magenta};
  padding: 15px;
`;

export const Video = styled.div`
  position: relative;
  top: -30px;
  right: -10px;
  background-color: ${green};
  width: 120%;
  height: calc(65vw - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  box-shadow: 0px 50px 80px rgba(0, 0, 0, 0.6);
  user-select: none;
  border-radius: 10px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

export const Title = styled.h2`
  font-family: CircularStd;
  font-weight: 400;
  font-size: 28px;
  line-height: 1em;
  color: ${white};
`;

export const Description = styled.p`
  font-family: CircularStd;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1em;
  color: ${white};
`;
