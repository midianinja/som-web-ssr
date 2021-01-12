import styled from 'styled-components';
import { white10, white, gray02 } from '../../../settings/colors';

export const Input = styled.input`
  height: 38px;
  position: absolute;
  color: ${white};
  border-radius: 38px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  background-color: transparent;

  :focus {
    outline: none;
    box-shadow: none;
    padding-left: 14px;
    padding-right: 14px;
  }
  ${props => props.customStyle}
`;

export const Wrapper = styled.div`
  position: relative;
  height: 38px;
`;
