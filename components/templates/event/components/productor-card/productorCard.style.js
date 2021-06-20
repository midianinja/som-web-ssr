import styled from 'styled-components';
import { black, white, white30 } from '../../../../../settings/colors';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 420px;
  padding: 20px 15px;
  border-radius: 20px;
  background: ${white};
  border: 1px solid ${white30};
  text-align: left;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 55px;
  margin-right: 15px;
  text-align: center;
`;

export const ProductorTitle = styled.span`
  margin-top: 10px;
  font-size: 0.8571428571em;
  width: 100%;
  color: ${black};
  font-size: 13px;
  font-weight: 300;
`;

export const ProfileWrapper = styled.div`
  height: 100%;

`;

export const ProductorName = styled.h3`
  font-size: 1.2857142857em;
  line-height: 1.2em;
  font-weight: 400;

`;

export const ProductorCity = styled.h4`
  margin-top: 5px;
  font-size: 0.8571428571em;
  font-weight: 300;
  line-height: 1.2em;
`;

export const ProductorText = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 0.8571428571em;
  font-weight: 300;
  line-height: 1.5em;
`;

export const avatarStyle = `
  width: 55px;
  height: 55px;
`;
