import styled from 'styled-components';
import { white, black } from '../../../../../settings/colors';

export const Fieldset = styled.fieldset`
  padding: 30px;
  width: 100%;
  background-color: ${white};
  color: ${black};
`;

export const Content = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  font-size: 1.2857142857rem;
  margin-bottom: 10px;
`;

export const FirstLegend = styled.p`
  font-size: 1em;
  line-height: 1.35em;
  font-family: CircularStd;
  font-weight: 400;
  margin-bottom: 3px;
`;

export const SecondLegend = styled.p`
  font-size: 0.68em;
  line-height: 1.15em;
  font-family: CircularStd;
  margin-bottom: 30px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const UploadNewSongButton = styled.button`
  background-color: transparent;
  color: rgba(0, 0, 0, 0.15);
  font-family: CircularStd;
  font-size: 1em;
  line-height: 1.25em;
  cursor: pointer;
  padding: 5px 10px;
  letter-spacing: 0.6px;
  border-radius: 25px;
  border: 2px dashed rgba(0, 0, 0, 0.15);
  width: 100%;
`;

export const LabelPlus = styled.label`
  font-size: 1.5em;
  vertical-align: middle;
  margin-left: 5px;
  font-weight: bold;
`;
