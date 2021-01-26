import styled from 'styled-components';
import { white } from '../../../../../settings/colors';

export const Fieldset = styled.fieldset`
  padding: 15px;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${white};
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 30px;
`;

export const inputGroup30Style = '';

export const LocationWrapper = styled.div`
  width: 100%;
  display: grid;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px; 
    justify-content: space-between;
    align-items: flex-end;
  }
`;
