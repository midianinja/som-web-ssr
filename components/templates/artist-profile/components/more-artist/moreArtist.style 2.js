import styled from 'styled-components';
import { black, white } from '../../../../../settings/colors';

export const Wrapper = styled.section`
  text-align: left;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: ${white};
  color: ${black};

  @media (min-width: 1024px) {
    background-color: transparent;
    color: ${white};
  }
`;

export const Card = styled.div`
  display: inline-block;
  width: 20%;
  text-align: center;
  cursor: pointer;

  & + & {
    margin-left: 15px;
  }

  @media (min-width: 1024px) {
    width: calc(20% - 20px);

    & + & {
      margin-left: 20px;
    }
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 10px 0;
`;

export const Title = styled.h3`
  font-weight: 400;
  line-height: 1em;
  font-size: 1em;
  text-align: left;
  margin-bottom: 20px;
`;

export const avatarCustomStyle = `
  width: 67px;
  height: 67px;
`;

export const ArtistName = styled.h4`
  font-size: 0.8571428571em;
  font-weight: 300;
  margin-top: 10px;
  overflow: hidden;
`;
