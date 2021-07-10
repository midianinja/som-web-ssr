import styled from 'styled-components';
import { purple, white } from '../../../settings/colors';

export const Button = styled.button`
  width: calc(50% - 10px);
  height: 90px;
  background-color: ${white};
  border-radius: 10px;
  padding: 15px;
  vertical-align: top;
  opacity: ${(props) => {
    const { selected } = props;
    return selected ? '1' : '0.7';
  }};
  transition-duration: 0.2s;
  ${(props) => {
    const { selected } = props;
    if (!selected) return '';
    return `
      box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
      transform: scale(1.1)
    `;
  }};

  & + & {
    margin-left: 20px;
  }
`;

export const Wrapper = styled.div`
  display: inline-block;
`;

export const Icon = styled.img`
  width: 18px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 0.7142857143em;
  font-weight: 300;
  color: ${purple};
`;
