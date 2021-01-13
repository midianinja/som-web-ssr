import styled from 'styled-components';
import { white } from '../../../../../settings/colors';

const Fieldset = styled.fieldset`
  padding: 30px 15px;
  width: 100%;
`;

const Title = styled.h2`
  color: ${white};
  font-size: 1.25em;
  font-weight: 300;
  margin-bottom: 30px;
`;

const Row = styled.div`
  width: 100%;
`;

const inputGroup50CustomStyle = `
  @media (min-width: 768px) {
    display: inline-block;
    width: calc(50% - 7px);
    
    & + & {
      margin-left: 14px;
    }
  }
`;
