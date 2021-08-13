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
