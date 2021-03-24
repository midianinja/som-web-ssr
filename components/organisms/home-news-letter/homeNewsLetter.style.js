import styled from 'styled-components';
import { black } from '../../../settings/colors';

export const Footer = styled.footer`
  background-color: #f1f1f1;
  padding: 30px 20px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

export const SocialList = styled.div``;

export const Social = styled.a`
  & + & {
    margin-left: 15px;
  }
`;

export const SocialIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export const FormWrapper = styled.form`
  display: grid;
  gap: 20px;
  margin-bottom: 30px;
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
