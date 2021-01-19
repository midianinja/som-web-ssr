import styled from 'styled-components';
import { white } from '../../../../../settings/colors';

export const Fieldset = styled.fieldset`
  grid-area: conditions;
  padding: 30px 15px;
  width: 100%;
`;

export const CheckboxWrapper = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 15px;
`;

export const Title = styled.h2`
  color: ${white};
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 30px;
`;
