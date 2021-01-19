import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import {
  ModalWrapper, Modal, IconWrapper, Icon,
  Content, Title, Message, Actions,
  BackButton, CloseIcon,
} from './dialog.style';

const DialogModal = ({
  title, description, confirmAction,
  disagreeAction, agreeText, disagreeText,
  isOpen, closeAction,
  icon,
}) => (
  <ModalWrapper isOpen={isOpen}>
    <Modal>
      {
        closeAction
          ? (
            <CloseIcon
              color="#000"
              src="/icons/x.svg"
              alt="botão de cancelar"
              onClick={() => closeAction()}
            />
          )
          : null
      }
      <IconWrapper>
        <Icon src={icon} alt={title} />
      </IconWrapper>
      <Content>
        <Title>{title}</Title>
        <Message>
          {description}
        </Message>
        <Actions>
          {disagreeAction ? <BackButton type="button" onClick={disagreeAction}>{disagreeText}</BackButton> : null}
          {confirmAction ? <PrimaryButton type="button" onClick={confirmAction}>{agreeText}</PrimaryButton> : null}
        </Actions>
      </Content>
    </Modal>
  </ModalWrapper>
);

DialogModal.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.node,
  agreeText: PropTypes.string,
  disagreeText: PropTypes.string,
  confirmAction: PropTypes.func.isRequired,
  closeAction: PropTypes.func.isRequired,
  disagreeAction: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

DialogModal.defaultProps = {
  icon: '/icons/guita-error.svg',
  title: 'Title',
  description: 'Description',
  agreeText: '',
  disagreeText: '',
  isOpen: false,
};

export default DialogModal;
