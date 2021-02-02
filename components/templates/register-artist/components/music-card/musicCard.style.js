import styled from 'styled-components';
import { white, theBestColor, black, purple, red, gray, green } from '../../../../../settings/colors';

export const Wrapper = styled.div`
  padding: 10px;
  background-color: ${white};
  color: ${black};
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h4`
  width: 100%;
  font-size: 0.75em;
  font-family: CircularStd;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: .4em;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

`;

export const Icon = styled.img`
`;

export const uploaderGroupLabelCustomStyle = `
  color: ${gray};
  font-size: .68em;
`;

export const uploaderGroupCustomStyle = `
  margin-bottom: 0;
  margin-top: 10px;
`;

export const uploaderCustomStyle = (file) => `
  background-color: ${red};
  ${file ? (`
    background-color: ${white};
    border: 2px solid ${green};
    display: flex;
    justify-content: space-between;
    color: #000;
  `) : null}
`;

export const uploaderLabelCustomStyle = (file) => `
  ${file ? (`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-line-clamp: 1;
  `) : null
}`;
