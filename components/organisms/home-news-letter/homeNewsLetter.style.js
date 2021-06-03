import styled from 'styled-components';
import { black } from '../../../settings/colors';

export const Footer = styled.footer`
  background-color: #f1f1f1;
  padding: 30px 20px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
`;

export const LogoContainer = styled.div`
  width: 30%;
  width: 60px;
  height: 18px;
  padding-left: 30px;
`;

export const ContentOpenSource = styled.div`
  padding: 50px;

`;

export const SocialList = styled.div`
  padding: 30px;
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

export const FormWrapper = styled.div`
  display: grid;
  gap: 20px;
`;

export const Logo = styled.img`
  opacity: 0.1;
`;

export const Title = styled.h2`
  font-family: CircularStd;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.1em;
  color: ${black};
`;

export const Text = styled.p`
  font-family: CircularStd;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.1em;
  color: ${black};
`;
