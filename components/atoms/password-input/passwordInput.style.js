import styled from 'styled-components';
import {
  white10, white, secondaryRed, secondaryYellow, terciaryGreen,
  transparent,
} from '../../settings/colors';

const getColor = (point) => {
  if (point <= 0) return transparent;
  if (point < 60) return secondaryRed;
  if (point < 90) return secondaryYellow;
  return terciaryGreen;
}

export const Input = styled.input`
  width: calc(100% - 18px);
  height: 100%;
  color: ${white};
  background: transparent;
  padding-right: 10px;

  :focus {
    outline: none;
    box-shadow: none;
    padding-right: 10px;
  }
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  vertical-align: middle;
`;

export const PasswordInputWrapper = styled.div`
  width: ${props => props.width};
  height: 38px;
  background-color: ${white10};
  border-radius: 38px;
  padding-left: 15px;
  padding-right: 15px;

  :focus-within {
    border: solid 2px ${props => getColor(props.point)};
  }
`;