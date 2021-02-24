import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Store from '../../../store/Store';
import { allowBodyScroll } from '../../../utils/scroll.utils';
import {
  openModalKeyframes,
  openMObileModalKeyframes,
  Wrapper,
  Nav,
  Link,
  Logout,
  Terms,
  ExitButton
} from './navigation.style';

const getLinks = (user, connectionType) => {
  const links = [
    {
      href: '/wall',
      label: 'Início'
    },
    {
      href:
        user && user.artist && user.artist.id ? `/artist/${user.artist.id}` : '/register-artist',
      label: 'Meu perfil',
      hide: !user || connectionType !== 'artist'
    },
    {
      href:
        user && user.productor && user.productor.id
          ? `/productor/${user.productor.id}`
          : '/register-productor',
      label: 'Meu perfil',
      hide: !user || connectionType !== 'productor'
    },
    {
      href: '/wall',
      label: 'Mural'
    },
    {
      href: '/my-events',
      label: 'Meus eventos',
      hide: !user || connectionType !== 'productor'
    },
    {
      href: '/events-curatorship',
      label: 'Avaliar inscrições',
      hide: !user || connectionType !== 'productor'
    }
  ];

  return links;
};

const renderLinks = (user, connectionType, router) =>
  getLinks(user, connectionType).map(({ href, label, hide }, index) => (
    <Link
      key={index}
      type={connectionType}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        router.push(href);
      }}
      hide={hide}>
      {label}
    </Link>
  ));

const closeAction = (dispatch) => {
  allowBodyScroll();
  dispatch({ type: 'CLOSE_MODAL' });
};

const Navigation = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  return (
    <Wrapper isOpen={state.modals.navigation} onClick={() => closeAction(dispatch)}>
      <Nav>
        <ExitButton src="/icons/close.svg" onClick={() => closeAction(dispatch)} />
        {renderLinks(state.user, state.connectionType, router)}
        <Terms
          type={state.connectionType}
          onClick={() => {
            allowBodyScroll();
            dispatch({ type: 'CLOSE_MODAL' });
            window.open('/terms', '_blank');
          }}>
          Termos de uso
        </Terms>
        {state.user ? (
          <Logout
            type={state.connectionType}
            onClick={() => {
              window.localStorage.setItem('som@ida', '');
              window.localStorage.setItem('som@token', '');
              dispatch({
                type: 'SET_USER',
                user: null
              });

              dispatch({
                type: 'RESET_AUTH'
              });

              dispatch({
                type: 'SET_LOGIN_TYPE',
                data: 'public'
              });

              allowBodyScroll();
              dispatch({ type: 'CLOSE_MODAL' });

              router.push('/');
            }}>
            Sair
          </Logout>
        ) : null}
      </Nav>
    </Wrapper>
  );
};

export default Navigation;
