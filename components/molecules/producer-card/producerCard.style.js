import styled from 'styled-components';
import { getGradient } from '../../../settings/gradients';
import { white, white30, purple } from '../../../settings/colors';

export const Container = styled.div`
  padding: 20px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 159px;
  height: 159px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 50px;
  margin-bottom: 20px;
  background: ${getGradient()};
  ${(props) => props.customStyle}
`;

export const Image = styled.img`
  ${(props) => `
    background-image: url('${props.image}');
  `}
  border-radius: 50%;
  // margin-bottom: 50px;
`;

export const followButtonCustomStyled = `
  width: 150px;
  border: solid 1px ${purple};
  color: ${white};
  background-color: transparent;
  vertical-align: middle;
  
  @media (min-width: 1024px) {
    margin-right: 15px;
  }
`;

export const buttonCustomStyled = `
  width: 150px;
  margin-right: 15px;
  vertical-align: middle;
  padding: 10px;

`;

export const ActionWrapper = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    padding-right: 40px;
    text-align: left;
  }
`;

export const EditIcon = styled.img`
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin-right: 5px;
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
  padding: 10px;

`;

export const Title = styled.h2`
  color: rgba(81, 219, 169, 1);
  font-weight: 300;
  font-size: 24px;
  line-height: 110%;
  text-align: left;
  padding: 10px;
`;
