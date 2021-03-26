import styled from 'styled-components';
import { white, green, magenta } from '../../../../../settings/colors';

export const Section = styled.section`
  background-color: ${magenta};
  padding: 15px;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row-reverse;
    padding: 100px 30px;
  }
`;

export const Video = styled.div`
  position: relative;
  background-image: url('/images/som-award.svg');
  background-size: cover;
  top: -30px;
  right: -10px;
  background-color: ${green};
  width: 120%;
  max-width: 842px;
  height: calc(65vw - 60px);
  max-height: 406px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  box-shadow: 0px 50px 80px rgba(0, 0, 0, 0.6);
  user-select: none;
  border-radius: 10px;

  @media (min-width: 1024px) {
    right: -5%;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding-top: 10px;
  padding-left: 98px;
  padding-right: 80px;
  padding-bottom: 20px;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 450px;
  }
`;

export const Title = styled.h2`
  font-family: CircularStd;
  font-weight: 400;
  font-size: 28px;
  line-height: 1em;
  color: ${white};

  @media (min-width: 1024px) {
    font-size: 42px;
  }
`;

export const Description = styled.p`
  font-family: CircularStd;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1em;
  color: ${white};
`;
