import styled from 'styled-components';
import { white, black } from '../../../settings/colors';

export const BurgerButton = styled.div`
  width: 20px;
  cursor: pointer;

  ${(props) => {
    const { hide } = props;
    return hide ? 'display: none;' : '';
  }}
`;

export const Line = styled.span`
  display: block;
  width: 100%;
  height: 2px;
  background-color: ${white};

  & + & {
    margin-top: 4px;
  }

  ${(props) => {
    if (props.dark) {
      return `
        background-color: ${black};
      `;
    }

    return '';
  }}
`;
