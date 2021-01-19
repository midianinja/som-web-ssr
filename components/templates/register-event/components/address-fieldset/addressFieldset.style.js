import styled from 'styled-components';
import { white } from '../../../../../settings/colors';

export const Fieldset = styled.fieldset`
  grid-area: address;
  width: 100%;
  padding: 30px 15px;
`;

export const Title = styled.h2`
  color: ${white};
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
    align-items: end;
  }
`;

export const customNumberStyle = `
  @media (min-width: 1024px) {
    width: 100px;
  }
`;