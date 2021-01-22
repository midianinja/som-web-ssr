import styled from 'styled-components';
import { white, theBestColor, black, purple } from '../../../../../settings/colors';

export const Fieldset = styled.fieldset`
  padding: 30px;
  width: 100%;
  background-color: ${white};
  color: ${black};
`;

export const InputsWrapper = styled.div`
@media (min-width: 1024px) {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
`;

export const Title = styled.h2`
  font-size: 1.2857142857rem;
  margin-bottom: 10px;
`;

export const inputGroupStyle = `
  @media (min-width: 768px) {
    display: inline-block;
    width: calc(50% - 7px);
    
    & + & {
      margin-left: 14px;
    }
  }
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
  justify-content: space-around;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
`;

export const Card = styled.div`
  max-width: 250px;
  @media (max-width: 768px) {
    margin: 30px 0 0 20px;
    width: 100%;
    max-width: 100%;
  } 
`;

export const CardTitle = styled.label`
  font-family: CircularStd;
  font-size: 1em;
  line-height: 1.25em;
  font-weight: bold;
`;

export const CardDescription = styled.p`
  font-family: CircularStd;
  font-size: 0.9em;
  line-height: 1.25em;
  font-weight: 200;
`;

export const Actions = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
`;

export const SeeExempleButton = styled.a`
  color: ${purple};
  font-family: CircularStd;
  font-size: 0.812em;
  cursor: pointer;
  line-height: 1.25em;
`;

export const UploadButton = styled.button`
  background-color: ${purple};
  color: ${white};
  font-family: CircularStd;
  font-size: 0.937em;
  line-height: 1.25em;
  cursor: pointer;
  padding: 5px 10px;
  letter-spacing: 0.6px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ButtonIcon = styled.img`
  margin-left: 5px;
`;