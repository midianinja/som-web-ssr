import styled from 'styled-components';
import { white, theBestColor, black, purple } from '../../../../../settings/colors';

export const Fieldset = styled.fieldset`
  padding: 30px;
  width: 100%;
  background-color: ${theBestColor};
  color: ${black};
`;

export const Content = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

export const InputsWrapper = styled.div`
  @media (min-width: 1024px) {
    width: 100%;
  }
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
  display: grid;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: space-between;
    grid-gap: 30px;
  }
`;

export const Card = styled.div`
  @media (max-width: 768px) {
    width: 100%;
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
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const SeeExempleButton = styled.a`
  display: inline-block;
  width: 100%;
  max-width: 200px;
  font-family: CircularStd;
  font-size: 0.812em;
  cursor: pointer;
  color: ${purple};
  line-height: 1.25em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 16px;
  margin-top: 16px;
  
  ${({ name }) => name ? `
    opacity: .3;
    color: #000; 
  ` : ''}
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
