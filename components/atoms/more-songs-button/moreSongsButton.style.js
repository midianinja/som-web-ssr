import styled from 'styled-components';
import { gray, gray02 } from '../../settings/colors';

export const Button = styled.button`
  height: 38px;
  width: 100%;
  background-color: transparent;
  color: ${gray02};
  border: dashed 1px ${gray02};
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 38px;
  cursor: pointer;
  transition-duration: 0.3s;
  font-size: 0.8571428571em;
  font-weight: 300;

  :focus {
    outline: none;
  }

  :disabled {
    background-color: ${gray};
    cursor: not-allowed;
  }
`;
