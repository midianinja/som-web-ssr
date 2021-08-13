import React from 'react';
import PrimaryButton from '../../../../atoms/primary-button/primaryButton';
import { Header, HeaderWrapper, Title, Tabs, Tab } from './dashboard-header.style';

const DashboardHeader = () => (
  <Header>
    <HeaderWrapper>
      <Title>Minhas Oportunidades</Title>
      <div>
        <Tabs>
          <Tab selected>Criadas por mim</Tab>
          <Tab>Me inscrevi</Tab>
        </Tabs>
        <PrimaryButton
          customStyle={`
            display: none;
            @media (min-width: 1024px) {
              display: inline-block
            }
          `}
          color="darkGray">
          + Adicionar nova oportunidade
        </PrimaryButton>
      </div>
    </HeaderWrapper>
  </Header>
);

export default DashboardHeader;
