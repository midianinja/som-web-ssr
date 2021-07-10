import styled from 'styled-components';
import { secondaryOrange } from '../../../settings/colors';

export const PlayPauseButtonStyle = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color || secondaryOrange};
  border-radius: 50%;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  :before {
    content: '';
    width: 18px;
    height: 18px;
    position: relative;
    background-image: url(${({ shouldPlay }) =>
      shouldPlay ? '/icons/pause.svg' : '/icons/play.svg'});
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
`;
