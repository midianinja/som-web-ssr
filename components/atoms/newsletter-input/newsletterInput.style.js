import styled from 'styled-components';
import {
  white, black, black30,
} from '../../settings/colors';

export const Input = styled.input`
  width: calc(100% - 22px);
  height: 100%;
  color: ${black};
  background: transparent;
  padding-right: 10px;

  :focus {
    outline: none;
    box-shadow: none;
    padding-right: 10px;
  }
`;

export const Icon = styled.img`
  width: 22px;
  height: 22px;
  vertical-align: middle;
`;

export const NewsletterInputWrapper = styled.div`
  width: ${props => props.width};
  height: 50px;
  background-color: ${white};
  border-radius: 38px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const inputStyle = `
  ::placeholder {
    color: ${black30};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${black30};
  }

  ::-ms-input-placeholder {
    color: ${black30};
  }
`;
