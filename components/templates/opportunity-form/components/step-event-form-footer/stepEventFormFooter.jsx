import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../../../atoms/primary-button/primaryButton';
import Loading from '../../../../atoms/loading/loading';
import { white } from '../../../../../settings/colors';
import { Footer, Wrapper, LoadingWrapper } from './stepEventFormFooter.style';

const StepEventFormFooter = ({ saveAction, cancelAction, customStyle, loading, actionLabel }) => (
  <Wrapper customStyle={customStyle}>
    {!loading ? (
      <Footer customStyle={customStyle}>
        <PrimaryButton
          color="purple"
          onClick={saveAction}
          customStyle="width: 200px; padding: 20px 0px; margin-right: 30px; height: auto;">
          {actionLabel}
        </PrimaryButton>
        <PrimaryButton
          onClick={cancelAction}
          color="transparent"
          customStyle={`padding: 20px 0; height: auto; color: ${white}`}>
          Descartar alterações
        </PrimaryButton>
        <PrimaryButton
          onClick={() => console.log('heree')}
          color="transparent"
          customStyle={`padding: 20px 0; height: auto; color: ${white}; background-color: #121212; width: 100%; grid-column-start: 1; grid-column-end: 3; &:hover{ background-color: #121212; }`}>
          Excluir oportunidade
        </PrimaryButton>
      </Footer>
    ) : (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    )}
  </Wrapper>
);

StepEventFormFooter.propTypes = {
  saveAction: PropTypes.func.isRequired,
  cancelAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  customStyle: PropTypes.string,
  actionLabel: PropTypes.string
};

StepEventFormFooter.defaultProps = {
  actionLabel: 'CONTINUAR',
  customStyle: ''
};

export default StepEventFormFooter;
