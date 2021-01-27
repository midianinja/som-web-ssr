import styled from 'styled-components';
import { orange } from '../../../settings/colors';

export const PlayPauseButtonStyle = styled.button`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.color || orange};
  border-radius: 50%;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;

  :before {
    content: '';
    width: 18px;
    height: 18px;
    position: relative;
    left: 2px;
    background-image: url(${({ shouldPlay }) =>
      shouldPlay ? '/icons/pause.svg' : '/icons/play.svg'});
    background-repeat: no-repeat;
    background-size: auto 100%;
  }
`;
