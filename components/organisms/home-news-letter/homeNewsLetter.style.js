import styled from 'styled-components';
import { black } from '../../../settings/colors';

export const Footer = styled.footer`
  background-color: #f1f1f1;
  padding: 30px 16px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;

  width: 77vw;
  max-width: 768px;

  margin-left: auto;
  margin-right: auto;

  padding: 30px 0px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const LogoContainer = styled.div`
  display: none;
  width: 60px;
  height: 18px;
  padding-left: 30px;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const ContentOpenSource = styled.div`
  @media (min-width: 768px) {
    padding: 50px;
  }
`;

export const SocialList = styled.div`
  margin-top: 12px;

  @media (min-width: 768px) {
  }
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
  gap: 8px;
`;

export const Logo = styled.img`
  opacity: 0.2;
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

  margin-bottom: 12px;
`;
