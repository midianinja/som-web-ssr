import React from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  Avatar,
  Wrapper,
  Name,
  LoginStatus,
  ChagingAccount,
  ExitLink,
  ExitWrapper,
  ExitButton
} from './dropDownHeader.style';

const getLoginType = (connectionType, completed) => {
  if (connectionType === 'productor' && completed) {
    return 'Produtor';
  }

  if (connectionType === 'productor' && !completed) {
    return 'Finalizar seu cadastro';
  }

  if (connectionType === 'artist' && completed) {
    return 'Artista';
  }

  if (connectionType === 'artist' && !completed) {
    return 'Finalizar seu cadastro';
  }

  return 'Público';
};

const DropdownHeader = ({
  hide,
  connectionType,
  avatar,
  name,
  completed,
  onLogout,
  onAccountChange,
  toArtist,
  toProductor,
  closeAction
}) => (
  <Dropdown hide={hide}>
    <Wrapper>
      <ExitWrapper>
        <ExitButton src="/icons/close.svg" onClick={() => closeAction()} />
      </ExitWrapper>
      <Avatar src={avatar} alt="" />
      <Name>{name}</Name>
      <LoginStatus
        onClick={connectionType === 'artist' ? toArtist : toProductor}
        type={connectionType}>
        {getLoginType(connectionType, completed)}
      </LoginStatus>
      <ChagingAccount
        type="productor"
        hide={connectionType === 'productor'}
        onClick={() => onAccountChange('productor')}>
        Usar como&nbsp;
        <span>produtor</span>
      </ChagingAccount>
      <ChagingAccount
        type="artist"
        hide={connectionType === 'artist'}
        onClick={() => onAccountChange('artist')}>
        Usar como&nbsp;
        <span>artista</span>
      </ChagingAccount>
    </Wrapper>
    <Wrapper>
      {/* <Navigation>
        <Link href="/" onClick={e => e.preventDefault()}>
          Configurações da conta
        </Link>
        <Link href="/" onClick={e => e.preventDefault()}>
          <Alert />
          Notificações
        </Link>
      </Navigation> */}
    </Wrapper>
    <Wrapper>
      <ExitLink
        onClick={(e) => {
          e.preventDefault();
          onLogout();
        }}>
        Sair
      </ExitLink>
    </Wrapper>
  </Dropdown>
);

DropdownHeader.propTypes = {
  hide: PropTypes.bool.isRequired,
  completed: PropTypes.bool,
  connectionType: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  onAccountChange: PropTypes.func.isRequired,
  toArtist: PropTypes.func.isRequired,
  toProductor: PropTypes.func.isRequired,
  closeAction: PropTypes.func.isRequired
};

DropdownHeader.defaultProps = {
  completed: true
};

export default DropdownHeader;
