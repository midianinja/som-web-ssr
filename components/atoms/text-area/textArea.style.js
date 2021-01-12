import styled from 'styled-components';
import { white10, white } from '../../../settings/colors';

export const Wrapper = styled.div`
  position: relative;
`;
export const Cont = styled.label`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 0.875em;
  color: ${white10};
`;

export const TextAreaComp = styled.textarea`
  width: 100%;
  height: 139px;
  color: ${white};
  background-color: ${white10};
  border-radius: 19px;
  padding: 15px;
  resize: none;
  font-size: 0.875em;
  font-family: inherit;
  font-weight: 200;

  :focus {
    outline: none;
    box-shadow: none;
    padding: 15px;
    font-size: 1rem;
  }
`;