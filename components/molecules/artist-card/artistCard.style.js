import styled from 'styled-components';
import { getGradient } from '../../../settings/gradients';
import { white, white30, purple } from '../../../settings/colors';

export const Container = styled.div`
  display: flex;
  width: 160px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  overflow: hidden;
  background: ${getGradient()};
  ${(props) => props.customStyle}
`;

export const Image = styled.img`
  ${(props) => `
    background-image: url('${props.image}');
  `}
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
`;

export const followButtonCustomStyled = `
  width: 120px;
  border: solid 1px ${purple};
  color: ${white};
  background-color: transparent;
  vertical-align: middle;

`;

export const buttonCustomStyled = `
  width: 120px;
  vertical-align: middle;
  padding: 10px;

`;

export const ActionWrapper = styled.div`
  text-align: center;
`;

export const EditIcon = styled.img`
  width: 15px;
  height: 15px;
  vertical-align: middle;
`;

export const FollowText = styled.label`
  color: ${white30};
  font-size: 0.8571428571em;
  font-weight: 300;
  padding: 10px;
  padding-bottom: 10px;
`;

export const FollowNumber = styled.span`
  margin-right: 10px;
  font-size: 1.3333333333em;
  font-weight: 500;
  color: ${white};
  vertical-align: middle;
`;

export const Title = styled.h2`
  color: rgba(81, 219, 169, 1);
  font-weight: 700;
  font-size: 16px;
  margin-top: 20px;
`;
