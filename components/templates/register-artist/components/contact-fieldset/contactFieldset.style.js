import styled from 'styled-components';
import { white } from '../../../../../settings/colors';

export const Fieldset = styled.fieldset`
  padding: 30px 15px;
  width: 100%;
`;

export const Title = styled.h2`
  color: ${white};
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 30px;
`;

export const Row = styled.div`
  width: 100%;
`;

export const inputGroup50CustomStyle = `
  @media (min-width: 768px) {
    display: inline-block;
    width: calc(50% - 20px);
`;
