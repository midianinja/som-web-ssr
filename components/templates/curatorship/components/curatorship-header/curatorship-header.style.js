import styled from 'styled-components';
import { getGradient } from '../../../../../settings/gradients';

export const Header = styled.header`
  margin-top: 80px;

  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

export const BackButtonWrapper = styled.div``;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  font-weight: bold;
  font-size: 16px;

  background-color: transparent;

  color: #ffffff;

  margin-bottom: 16px;

  cursor: pointer;
`;

export const OpportunityWrapper = styled.div`
  width: 100%;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;

    gap: 42px;

    margin-top: 6px;
  }
`;

export const Figure = styled.figure`
  width: 160px;
  height: 160px;

  background: ${getGradient()};

  border-radius: 10px;
  margin-bottom: 16px;

  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const OpportunityImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;

  opacity: ${(props) => {
    const { src } = props;
    return !src ? 0 : 1;
  }};
`;

export const SpanSubscritionToText = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 36px;

  color: rgba(255, 255, 255, 0.5);
`;
export const OpportunityTitle = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 1.1em;

  color: #ffffff;

  margin-top: 11px;

  @media (min-width: 1024px) {
    margin-top: 0;
  }
`;

export const Informations = styled.ul``;

export const Location = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 20px;

  letter-spacing: 0.16px;

  color: #ffffff;

  margin-top: 4px;
`;

export const Date = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 20px;

  letter-spacing: 0.16px;

  color: #ffffff;

  margin-top: 4px;
`;
