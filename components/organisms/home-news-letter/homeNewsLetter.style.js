import styled from 'styled-components';
import { secondaryBlack } from '../../../settings/colors';

export const Container = styled.section`
  background-color: ${secondaryBlack};
  padding: 30px 20px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

export const SocialList = styled.div`
  text-align: center;
`;

export const Social = styled.a`
  & + & {
    margin-left: 15px;
  }
`;

export const SocialIcon = styled.img`
  width: 35px;
  height: 35px;
`;
