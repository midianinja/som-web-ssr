import React from 'react';
import PrimaryButton from '../../../../atoms/primary-button/primaryButton';
import { Header, HeaderWrapper, Title, Tabs, Tab } from './dashboard-header.style';

<<<<<<< Updated upstream
const DashboardHeader = () => (
=======
const DashboardHeader = ({ selected, setSelected, toCreateOpportunity }) => (
>>>>>>> Stashed changes
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
          onClick={toCreateOpportunity}
          color="darkGray">
          + Adicionar nova oportunidade
        </PrimaryButton>
      </div>
    </HeaderWrapper>
  </Header>
);

<<<<<<< Updated upstream
=======
DashboardHeader.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  toCreateOpportunity: PropTypes.func.isRequired
};

>>>>>>> Stashed changes
export default DashboardHeader;
