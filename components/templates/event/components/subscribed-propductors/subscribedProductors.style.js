import styled from 'styled-components';
import { white, secondaryBlack, purple } from '../../../../../settings/colors';

export const Wrapper = styled.section`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
  color: ${white};
  position: relative;
  z-index: 2;
`;

export const Card = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: top;
  flex-direction: column;
  align-items: center;
  width: 110px;
  padding: 15px 12px;
  background-color: ${secondaryBlack};
  border-radius: 15px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;

  & + & {
    margin-left: 10px;
  }

  @media (min-width: 1024px) {
    padding: 15px 7px;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 10px 0;
  text-align: left;
`;

export const Title = styled.h3`
  font-weight: 400;
  line-height: 1em;
  font-size: 1em;
  text-align: left;
  margin-bottom: 20px;
`;

export const avatarCustomStyle = `
  width: 60px;
  height: 60px;

  @media (min-width: 1024px) {
    width: 70px;
    height: 70px;
  }
`;

export const ProductorNameWrapper = styled.h4`
  display: flex;
  height: 25px;
  align-items: center;
`;

export const ProductorName = styled.h4`
  display: -webkit-box;
  width: 100%;
  align-items: center;
  text-align: center;
  font-size: 0.6875em;
  line-height: 1.1em;
  font-weight: 400;
  margin-top: 10px;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 25px;
`;

export const ApprovedTag = styled.label`
  display: ${(props) => {
    const { show } = props;
    return show ? 'block' : 'none';
  }};
  position: absolute;
  top: 0px;
  width: 100%;
  background-color: ${purple};
  color: ${white};
  font-size: 0.625em;
  padding: 7px 5px;
  font-weight: 200;
  letter-spacing: 2px;
  z-index: 2;
`;
