import styled from 'styled-components';
import { green } from '../../../settings/colors';
import { getGradient } from '../../../settings/gradients';

export const Container = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
`;

export const EventImage = styled.img`
  display: inline-block;
  width: 100px;
  height: 100px;
  background: ${getGradient()};

  &[src=''] {
    content: url('data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');
  }
`;

export const EventInfoWrapper = styled.div`
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 15px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const buttonCustomStyle = `
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 300;
`;

export const Link = styled.a`
  color: ${green};
`;
