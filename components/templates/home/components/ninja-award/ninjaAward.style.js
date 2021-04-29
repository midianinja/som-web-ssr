import styled from 'styled-components';
import { white, green, purple, darkGray, black, gray } from '../../../../../settings/colors';

export const Section = styled.section`
  background-color: ${purple};
  padding: 15px;

  > div {
    display: flex;
    align-items: center;
    gap: 48px;
    border-radius: 20px;

    width: 100%;
    height: 510px;
    max-width: 1142px;

    background-color: ${white};
    padding: 60px;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    padding-top: 300px;
  }
`;

export const Video = styled.div`
  position: relative;
  background-image: url('/images/som-award.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${black};
  width: 555px;
  height: 480px;
  margin-top: 16px;
  box-shadow: 0px 50px 80px rgba(0, 0, 0, 0.6);
  user-select: none;
  border-radius: 10px;

  @media (min-width: 1024px) {
    top: -100px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 1024px) {
    padding: 0;
    max-width: 400px;
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
    color: ${darkGray};
  }
`;

export const Description = styled.p`
  font-family: CircularStd;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.1em;
  color: ${gray};
`;
