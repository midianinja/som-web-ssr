import styled from 'styled-components';
import { white, gray, green } from '../../../settings/colors';

export const Wrapper = styled.div``;

export const Circle = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: ${({ multiple }) => !multiple ? '50%' : '4px'};
  border: solid 2px
    ${(props) => {
      const { checked } = props;
      return checked ? green : gray;
    }};
  vertical-align: middle;
  position: relative;

  ${(props) => {
    const { checked } = props;
    if (!checked) return '';
    return `
      &:after {
        content: '';
        display: inline-block;
        border-radius: ${({ multiple }) => !multiple ? '50%' : '4px'};
        right: 2px; 
        top: 2px;
        position: absolute;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        background-color: ${green};
      }
    `;
  }}
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 300;
  color: ${white};
  margin-left: 10px;
  vertical-align: middle;
`;
