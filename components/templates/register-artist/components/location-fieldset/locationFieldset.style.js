import styled from 'styled-components';
import { white } from '../../../../../settings/colors';

export const Fieldset = styled.fieldset`
  padding: 15px;
  width: 100%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  color: ${white};
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 30px;
`;

export const LocationWrapper = styled.div`
  display: grid;
  width: 100%;
  gap: 16px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
  }
`;
