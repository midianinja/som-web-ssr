import styled from 'styled-components';
import { white } from '../../../../../settings/colors';

export const Fieldset = styled.fieldset`
  padding: 15px;
  width: 100%;
`;

export const InputsWrapper = styled.div`
  display: grid;

  @media (min-width: 1024px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  color: ${white};
  font-size: 1.2857142857rem;
  font-weight: 400;
  margin-bottom: 30px;
`;

export const inputGroupStyle = `
  @media (min-width: 768px) {
    display: inline-block;
  }
`;
