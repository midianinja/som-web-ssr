import styled from 'styled-components';

export const DashboardContainer = styled.div`
  position: relative;
`;

export const OverlayWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;

  padding: 32px;

  > button {
    width: 100%;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const DashboardOpportunityList = styled.ul`
  display: grid;
  gap: 64px 48px;

  width: 100%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;

  margin-top: 280px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const EmptyWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 120px;

  @media (min-width: 992px) {
    padding-top: 0;
  }
`;

export const EmptyTitle = styled.h3`
  max-width: 290px;
  font-style: normal;
  font-weight: 450;
  font-size: 24px;
  line-height: 1.3em;

  text-align: center;

  color: #ffffff;

  @media (min-width: 992px) {
    max-width: 100%;
  }
`;

export const EmptyText = styled.p`
  max-width: 290px;
  font-style: normal;
  font-weight: 450;
  font-size: 18px;
  line-height: 1.3em;
  text-align: center;
  margin-top: 8px;

  color: #ffffff;

  @media (min-width: 992px) {
    max-width: 100%;
  }

  a {
    color: #51dba9;
  }
`;
