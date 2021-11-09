import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../../../atoms/primary-button/primaryButton';
import { Header, HeaderWrapper, Title, Tabs, Tab } from './dashboard-header.style';

const DashboardHeader = ({ selected, setSelected, toCreateOpportunity, connectionType }) => (
  <Header>
    <HeaderWrapper>
      <Title>Minhas Oportunidades</Title>
      <div>
        <Tabs>
          <Tab hide={connectionType !== 'productor'} onClick={() => setSelected('created-by-me')} selected={selected === 'created-by-me'}>
            Criadas por mim
          </Tab>
          <Tab onClick={() => setSelected('subscribe-myself')} selected={selected === 'subscribe-myself'}>
            Me inscrevi
          </Tab>
        </Tabs>
        <PrimaryButton
          customStyle={`
            display: none;
            
            @media (min-width: 1024px) {
              display: ${connectionType !== 'productor' ? 'none' : 'inline-block'};
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

DashboardHeader.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  toCreateOpportunity: PropTypes.func.isRequired
};

export default DashboardHeader;
