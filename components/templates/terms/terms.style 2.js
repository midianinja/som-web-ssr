import styled from 'styled-components';

export const Page = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;
  padding-top: 80px;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 1024px) {
    padding-top: 120px;
    padding-left: 0;
    padding-right: 0;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 40px;
  }
`;

export const Title = styled.h1`
  position: sticky;
  display: inline-block;
  font-size: 1.25rem;
  line-height: 1.1em;
  color: #ffffff;
  font-weight: 900;
  vertical-align: top;
  margin-right: 40px;
  margin-bottom: 15px;

  @media (min-width: 1024px) {
    font-size: 2.375rem;
  }
`;

export const TermsWrapper = styled.div`
  display: inline-block;
  color: white;
  padding-top: 9px;
`;

export const Paragraph = styled.p`
  color: white;
  font-size: 0.875rem;
  line-height: 1.333em;
  font-weight: 300;
  margin-bottom: 23px;
`;
