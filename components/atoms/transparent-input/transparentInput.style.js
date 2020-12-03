import styled from 'styled-components';
import { white50, white30 } from '../../settings/colors';

export const TransparentInputStyle = styled.input`
  width: 100%;
  height: 38px;
  color: ${white50};
  background-color: rgba(0,0,0,0);
  padding-left: 15px;
  padding-right: 15px;

  border: none;
  outline: none;
  -webkit-box-shadow: 0 2px 0px 0px ${white30};
  box-shadow: 0 2px 0px 0px ${white30};

  /* necessário para sobrescrever o :focus do componente Input*/
  :focus {
    border: none;
    outline: none;
    -webkit-box-shadow: 0 2px 0px 0px ${white30};
    box-shadow: 0 2px 0px 0px ${white30};
    padding-left: 15px;
    padding-right: 15px;
    ${props => props.customStyle}
  }


  ${props => props.customStyle}
`;