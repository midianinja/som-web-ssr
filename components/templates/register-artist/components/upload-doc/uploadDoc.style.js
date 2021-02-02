import styled from 'styled-components';
import { purple, white } from '../../../../../settings/colors';

export const Uploader = styled.label`
  background-color: ${purple};
  color: ${white};
  font-family: CircularStd;
  font-size: 0.937em;
  line-height: 1.25em;
  cursor: pointer;
  padding: 5px 10px;
  letter-spacing: 0.6px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.customStyle}
`;

export const Icon = styled.img`
  margin-left: 5px;
`;

export const Label = styled.label`
  max-width: 90%;
  ${(props) => props.customStyle}
`;

export const Input = styled.input`
  display: none;
`;
