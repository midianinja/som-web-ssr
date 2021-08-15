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
  Type,
  MobileLoginIcon,
  MiddleWrapper
} from './defaultHeader.style';
import Input from '../../atoms/input-icon/InputIcon';

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
  let searchTimeout = null;

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
          <Input
            id="somSearch"
            placeholder="Buscar"
            icon={state.connectionType === 'public' ? 'dark-search' : 'search'}
            customStyle={`
              background-color:rgba(0, 0, 0, 0.3);
              height: 30px;
              width: 100%;
              display: none;
              
              @media (min-width: 1024px) {
                display: inline-flex;
                width: 250px;
                margin-left:16px;
                margin-right: 10px;
              }

              ${
                state.connectionType === 'public'
                  ? `
                background-color:rgba(0, 0, 0, 0.1);
                input {
                  color: #000000;
                }
                
                input::placeholder{
                  color: rgba(0, 0, 0, 0.5);
                  font-weight: 400;
                }
              `
                  : `
                    input::placeholder{
                      color: rgba(255, 255, 255, 0.6);
                      font-weight: 200;
                    }
                  `
              }
            `}
            onChange={(e) => {
              if (searchTimeout) {
                clearTimeout(searchTimeout);
              }
              searchTimeout = setTimeout(() => {
                router.push(`/search?q=${e.target.value}`);
              }, 1000);
            }}
          />
        </Group>
        <MiddleWrapper>
          <Input
            id="somSearch"
            placeholder="Buscar"
            icon="search"
            customStyle={`
              background-color:rgba(0, 0, 0, 0.1);
              color: #000;
              height: 30px;
              width: 100%;
              display: flex;
              
              @media (min-width: 1024px) {
                display: none;
              }

              ${
                state.connectionType === 'public'
                  ? `
                background-color:rgba(0, 0, 0, 0.1);
                input {
                  color: #000;
                }

                input::placeholder{
                  color: rgba(0, 0, 0, 0.5);
                  font-weight: 400;
                }
              `
                  : `
                    input::placeholder{
                      color: rgba(255, 255, 255, 0.6);
                      font-weight: 200;
                    }
                  `
              }
            `}
            onChange={(e) => {
              if (searchTimeout) {
                clearTimeout(searchTimeout);
              }
              searchTimeout = setTimeout(() => {
                router.push(`/search?q=${e.target.value}`);
              }, 1000);
            }}
          />
          <Logo
            src={getSOMBrand()}
            onClick={() => router.push('/')}
            alt="Som, Sistema Operacional da Música"
          />
        </MiddleWrapper>
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
            customStyle={`
              display: none;
              @media (min-width: 1024px) {
                display: inline-flex;
              }
            `}
            onClick={() => {
              if (state.idaSDK) state.idaSDK.signinWithPopup();
            }}
          />
          <MobileLoginIcon
            onClick={() => {
              if (state.idaSDK) state.idaSDK.signinWithPopup();
            }}
            width="30"
            height="30"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM10.6052 27.42C11.2502 26.07 15.1802 24.75 18.0002 24.75C20.8202 24.75 24.7652 26.07 25.3952 27.42C23.3552 29.04 20.7902 30 18.0002 30C15.2102 30 12.6452 29.04 10.6052 27.42ZM18 21.75C20.19 21.75 25.395 22.635 27.54 25.245C29.07 23.235 30 20.73 30 18C30 11.385 24.615 6 18 6C11.385 6 6 11.385 6 18C6 20.73 6.93 23.235 8.46 25.245C10.605 22.635 15.81 21.75 18 21.75ZM18 9C15.09 9 12.75 11.34 12.75 14.25C12.75 17.16 15.09 19.5 18 19.5C20.91 19.5 23.25 17.16 23.25 14.25C23.25 11.34 20.91 9 18 9ZM15.75 14.25C15.75 15.495 16.755 16.5 18 16.5C19.245 16.5 20.25 15.495 20.25 14.25C20.25 13.005 19.245 12 18 12C16.755 12 15.75 13.005 15.75 14.25Z"
              fill="black"
            />
          </MobileLoginIcon>
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
