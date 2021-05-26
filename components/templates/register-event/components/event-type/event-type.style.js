import styled from 'styled-components';
import { white } from '../../../../../settings/colors';

export const Fieldset = styled.fieldset`
  width: 100%;
  margin-bottom: 20px;
`;

export const CheckboxWrapper = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  color: ${white};
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 30px;
`;
