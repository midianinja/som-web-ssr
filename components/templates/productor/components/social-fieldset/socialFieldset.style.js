import styled from 'styled-components';
import { white } from '../../../../../settings/colors';

export const Fieldset = styled.fieldset`
  padding: 30px;
`;

export const InputsWrapper = styled.div`
@media (min-width: 1024px) {
  width: 100%;
  display: flex;
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
    width: calc(50% - 7px);
    
    & + & {
      margin-left: 14px;
    }
  }
`;
