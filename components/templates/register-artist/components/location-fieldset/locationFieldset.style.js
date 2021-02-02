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

export const inputGroup30Style = `
  @media (min-width: 1024px) {
    width: calc(30% - 10px);

    & + & {
      // margin-left: 15px;
    }
  }
`;

export const LocationWrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
