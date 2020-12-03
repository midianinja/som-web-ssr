import styled from 'styled-components';
import { white50, white10, white } from '../../settings/colors';

export const InputStyle = styled.input`
  width: 100%;
  height: 38px;
  color: ${white};
  background-color: ${white10};
  border-radius: 38px;
  padding-left: 15px;
  padding-right: 15px;

  :focus {
    outline: none;
    box-shadow: none;
    padding-left: 14px;
    padding-right: 14px;
  }

  ::placeholder {
    color: ${white50};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${white50};
  }

  ::-ms-input-placeholder {
    color: ${white50};
  }

  ${props => props.customStyle}
`;
