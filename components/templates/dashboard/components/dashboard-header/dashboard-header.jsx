import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../../../atoms/primary-button/primaryButton';
import { Header, HeaderWrapper, Title, Tabs, Tab } from './dashboard-header.style';

const DashboardHeader = ({ selected, setSelected, toCreateOpportunity, connectionType }) => {
  const headerMyOportunities = () => {
    return connectionType === 'artist' ? (
      <div>
        <Tabs>
          <Tab onClick={() => setSelected('i-subscribe')} selected={selected === 'i-subscribe'}>
            Me inscrevi
          </Tab>
        </Tabs>
      </div>
    ) : (
      <div>
        <Tabs>
          <Tab onClick={() => setSelected('created-by-me')} selected={selected === 'created-by-me'}>
            Criadas por mim
          </Tab>
          <Tab onClick={() => setSelected('i-subscribe')} selected={selected === 'i-subscribe'}>
            Me inscrevi
          </Tab>
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
    );
  };
  return (
    <Header>
      <HeaderWrapper>
        <Title>Minhas Oportunidades</Title>
        {headerMyOportunities()}
      </HeaderWrapper>
    </Header>
  );
};

DashboardHeader.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  toCreateOpportunity: PropTypes.func.isRequired,
  connectionType: PropTypes.bool
};

export default DashboardHeader;
