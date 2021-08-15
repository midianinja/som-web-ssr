import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import Loading from '../../atoms/loading/loading';
import { gray } from '../../../settings/colors';
import { Footer, Wrapper, Icon, LoadingWrapper, LoadingText } from './stepFormFooter.style';

const colors = {
  productor: 'purple',
  artist: 'magenta'
};

const StepFormFooter = ({
  nextAction,
  skipAction,
  customStyle,
  loading,
  loadingText,
  noShowSkip,
  formType,
  lastStep,
  disabled,
  dark
}) => (
  <Wrapper customStyle={customStyle}>
    {!loading ? (
      <Footer customStyle={customStyle}>
        <PrimaryButton
          disabled={disabled}
          onClick={nextAction}
          color={colors[formType]}
          customStyle="padding: 20px 0; height: auto; letter-spacing: 3px;">
          {lastStep ? 'SALVAR' : 'SALVAR & CONTINUAR'}
        </PrimaryButton>
        {!noShowSkip ? (
          <PrimaryButton
            onClick={skipAction}
            color="transparent"
            customStyle={`
              padding: 20px 0;
              height: auto;
              color: ${gray};

              &:hover,
              &:active {
                color: ${gray};
                background-color: transparent;
              }
            `}>
            Pular etapa
            <Icon src="/icons/right_arrow.svg" />
          </PrimaryButton>
        ) : null}
      </Footer>
    ) : (
      <LoadingWrapper>
        <Loading loadingIcon={!dark ? '/icons/white-loading.svg' : '/icons/dark-loading.svg'} />
        {loadingText ? <LoadingText dark={dark}>{loadingText}</LoadingText> : null}
      </LoadingWrapper>
    )}
  </Wrapper>
);

StepFormFooter.propTypes = {
  nextAction: PropTypes.func.isRequired,
  skipAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  customStyle: PropTypes.string,
  loadingText: PropTypes.string,
  formType: PropTypes.string,
  noShowSkip: PropTypes.bool,
  lastStep: PropTypes.bool,
  disabled: PropTypes.bool,
  dark: PropTypes.bool
};

StepFormFooter.defaultProps = {
  customStyle: '',
  loadingText: '',
  noShowSkip: false,
  disabled: false,
  dark: false
};

export default StepFormFooter;
