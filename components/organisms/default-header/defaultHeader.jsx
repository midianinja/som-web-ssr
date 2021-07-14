import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import BurgerButton from '../../atoms/burger-button/burgerButton';
import IDALoginButton from '../../atoms/ida-login-button/idaLoginButton';
import DropdownHeader from '../../molecules/dropdown-header/dropdownHeader';
import Store from '../../../store/Store';
import { blockBodyScroll } from '../../../utils/scroll.utils';
import {
  HeaderComponent,
  Wrapper,
  Group,
  RightGroup,
  Avatar,
  Name,
  ProfileWrapper,
  Logo,
  Type
} from './defaultHeader.style';

/**
 * This render the default header component. The header is variable, it change of according to
 * logged status. There are 4 states unlogged, public, artist and productor
 */
const Header = ({ customStyle }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const [dropdown, setDropdown] = useState(false);
  const completed =
    state.user && state.user.productor && state.user.productor.status !== 'INCOMPLETE';

  useEffect(() => {
    setDropdown(false);
  }, [state.auth]);

  const getAvatarIcon = () => {
    if (state.connectionType === 'artist' && state.user && state.user.artist) {
      return state.user.artist.avatar_image.mimified;
    }

    if (state.connectionType === 'productor' && state.user && state.user.productor) {
      return state.user.productor.photo;
    }

    return '';
  };

  const getSOMBrand = () => {
    if (state.connectionType === 'artist' || state.connectionType === 'productor') {
      return '/icons/SOM_WHITE.svg';
    }

    return '/icons/SOM.svg';
  };

  const getName = () => {
    if (state.connectionType === 'artist' && state.user.artist) {
      return state.user.artist.name;
    }

    if (state.connectionType === 'productor' && state.user.productor) {
      return state.user.productor.name;
    }

    return state.auth?.first_name || 'Não nomeado';
  };

  const types = {
    artist: 'ARTISTA',
    productor: 'PRODUTOR',
    public: ''
  };

  return (
    <HeaderComponent type={state.connectionType} customStyle={customStyle}>
      <Wrapper>
        <Group>
          <BurgerButton
            onClick={() => {
              blockBodyScroll();
              setDropdown(false);
              dispatch({ type: 'SHOW_NAVIGATION_MODAL' });
            }}
            dark={state.connectionType === 'public'}
          />
        </Group>
        <Logo
          src={getSOMBrand()}
          onClick={() => router.push('/opportunities')}
          alt="Som, Sistema Operacional da Música"
        />
        <RightGroup hide={!state.auth || !state.auth._id}>
          <ProfileWrapper onClick={() => setDropdown(!dropdown)}>
            <Type dark={state.connectionType === 'public'}>{types[state.connectionType]}</Type>
            <Name dark={state.connectionType === 'public'}>{getName()}</Name>
            <Avatar src={getAvatarIcon()} alt="" />
          </ProfileWrapper>
          <DropdownHeader
            hide={!dropdown}
            name={getName()}
            completed={completed}
            avatar={getAvatarIcon()}
            closeAction={() => setDropdown(false)}
            connectionType={state.connectionType}
            onAccountChange={(type) => {
              if (type === 'artist' && !state.user.artist) {
                router.push('/artist');
              }

              if (type === 'productor' && !state.user.productor) {
                router.push('/producer');
              }
              window.localStorage.setItem('som@type', type);
              dispatch({ type: 'SET_LOGIN_TYPE', data: type });
              setDropdown(false);
            }}
            onLogout={() => {
              state.idaSDK.logout();

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

              setDropdown(false);
              router.push('/');
            }}
            toArtist={() => {
              if (state.user.artist) {
                router.push(`/artist/${state.user.artist.id}`);
              }
            }}
            toProductor={() => {
              if (state.user.productor && state.user.productor.status === 'INCOMPLETE') {
                router.push('/producer');
                return;
              }
              if (state.user.productor) {
                router.push(`/producer/${state.user.productor.id}`);
              }
            }}
          />
        </RightGroup>
        <RightGroup hide={state.auth && state.auth._id}>
          <IDALoginButton
            dark
            onClick={() => {
              if (state.idaSDK) state.idaSDK.signinWithPopup();
            }}
          />
        </RightGroup>
      </Wrapper>
    </HeaderComponent>
  );
};

Header.propTypes = {
  customStyle: PropTypes.string
};

Header.default = {
  customStyle: ''
};

export default Header;
