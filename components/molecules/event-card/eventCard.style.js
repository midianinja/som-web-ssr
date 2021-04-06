import styled from 'styled-components';
import { green } from '../../../settings/colors';
import { getGradient } from '../../../settings/gradients';

export const Wrapper = styled.div`
  display: inline-block;
  ${(props) => props.customStyle}
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  text-align: start;
  width: 100%;
  flex-direction: column;
  min-height: 290px;
  justify-content: space-between;
  vertical-align: top;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const View = styled.div`
  max-width: 220px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Image = styled.div`
  height: 140px;
  width: 140px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ce;
  cursor: pointer;
  object-position: center;
  object-fit: cover;
  background-image: ${({ gradient }) => (gradient ? gradient : getGradient())};

  @media (max-width: 768px) {
    width: 50vw;
    height: 50vw;
  }

  ${(props) => (props.image ? ` background-image: url('${props.image}');` : '')}
`;
export const Title = styled.label`
  color: ${green};
  font-size: 1em;
  margin-bottom: 10px;
  display: block;
  cursor: pointer;
`;
export const customButtomStyl = `
  width: 120px;
  height: 25;
  padding-left: 5px
  padding-right: 5px
`;

export const buttonStyl = `
  height: 30px;
`;

export const tagListStyl = `
  margin: 10px 0;
`;

export const eventDetailsStyl = `
  height: 100px;
`;

export const Space = styled.div`
  height: 8px;
`;
