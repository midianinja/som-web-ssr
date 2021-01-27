import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import Loading from '../../atoms/loading/loading';
import { gray } from '../../../settings/colors';
import { Footer, Wrapper, Icon, LoadingWrapper, LoadingText } from './stepFormFooter.style';

const StepFormFooter = ({
  nextAction,
  skipAction,
  customStyle,
  loading,
  loadingText,
  noShowSkip
}) => (
  <Wrapper customStyle={customStyle}>
    {!loading ? (
      <Footer customStyle={customStyle}>
        <PrimaryButton
          onClick={nextAction}
          customStyle="padding: 20px 0; height: auto; letter-spacing: 3px;">
          CONTINUAR
        </PrimaryButton>
        {!noShowSkip ? (
          <PrimaryButton
            onClick={skipAction}
            color="transparent"
            customStyle={`padding: 20px 0; height: auto; color: ${gray}`}>
            Pular etapa
            <Icon src="/icons/right_arrow.svg" />
          </PrimaryButton>
        ) : null}
      </Footer>
    ) : (
      <LoadingWrapper>
        <Loading />
        {loadingText ? <LoadingText>{loadingText}</LoadingText> : null}
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
  noShowSkip: PropTypes.bool
};

StepFormFooter.defaultProps = {
  customStyle: '',
  loadingText: '',
  noShowSkip: false
};

export default StepFormFooter;
