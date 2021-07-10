import styled from 'styled-components';
import { green, red } from '../../../settings/colors';

export const Container = styled.div`
  display: ${(props) => {
    const { checked } = props;
    return checked ? 'inline-flex' : 'none';
  }};
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-bottom: 5px;
`;

export const ECondition = styled.label`
  display: block;
  color: white;
  font-size: 1em;
  line-height: 1.4em;
  margin-bottom: 5px;
`;

export const Status = styled.div`
  margin-left: 5px;
  color: ${(props) => {
    const { checked } = props;
    return checked ? green : red;
  }};
  font-size: 1em;
  line-height: 1.4em;
`;
