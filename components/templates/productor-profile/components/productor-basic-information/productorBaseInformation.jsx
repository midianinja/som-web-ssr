import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../../atoms/avatar/avatar';
import PrimaryButton from '../../../../atoms/primary-button/primaryButton';
import TagList from '../../../../molecules/tag-list/tagList';
import Socials from '../../../../organisms/social/social';
import {
  Wrapper,
  ProductorReference,
  Title,
  TitleAndFollowWrapper,
  avatarCustomStyled,
  About,
  LocationWrapper,
  LocationText,
  LerMoreBio
} from './productorBasicInformation.style';


const renderFollowsActions = (isFollowing, followToggle) => (
    
);

/**
 * This render the component that show basic information about
 * the productor.
 * @param {object} props informations about the productor
 * @returns contains React.Component
 */
const ProductorBasicInfo = ({
  name,
  avatar,
  occupations,
  address,
  about,
  facebook,
  instagram,
  twitter,
  email,
  isMyProductor,
  history,
  followToggle,
  isFollowing,
}) => {
  const [lerMoreBio, setLerMoreBio] = useState(false);
  const [stateOccupations, setStateOccupations] = useState([]);
  const colors = ['green', 'orange', 'magenta', 'yellow'];

  useEffect(() => {
    console.log(occupations);
    setStateOccupations(
      occupations.map(({ id, label }) => ({
        id,
        text: label,
        color: colors[Math.floor(Math.random() * colors.length)]
      }))
    );
  }, []);

  return (
    <Wrapper id="infos">
      <Avatar customStyle={avatarCustomStyled} src={avatar} alt={name} />
      <TitleAndFollowWrapper>
        <ProductorReference>Produtor</ProductorReference>
        <Title>{name}</Title>
        {address ? (
          <LocationWrapper>
            <LocationText>
              {`${address.city}, ${address.state}`} / {address.country}
            </LocationText>
          </LocationWrapper>
        ) : null}
      </TitleAndFollowWrapper>
      <About>
        {!lerMoreBio ? about.slice(0, 200) : about}
        {!lerMoreBio && about.length > 200 ? '...' : ''}
        &nbsp;
        {about.length > 200 ? (
          <LerMoreBio onClick={() => setLerMoreBio(!lerMoreBio)}>
            {!lerMoreBio ? 'Ler mais' : 'Ler menos'}
          </LerMoreBio>
        ) : null}
      </About>
      <TagList
        data={stateOccupations}
        customStyle={`
          padding-left: 30px;
          padding-right: 30px;
          margin-bottom: 20px;
          display: flex;

          @media (min-width: 1024px) {
            padding-left: 0;
            padding-right: 0;
          }
        `}
      />

      {isMyProductor ? (
        <PrimaryButton
          customStyle={`
        width: 200px;
        `}
          onClick={() => {
            history.push('/producer');
          }}>
          Editar Perfil
        </PrimaryButton>
      ) : (
        <div>
          {isFollowing ? (
            <PrimaryButton onClick={followToggle}  
            customStyle={`width: 200px;`}>
              Deixar de seguir
            </PrimaryButton>
          ) : (
            <PrimaryButton onClick={followToggle}  
            customStyle={`width: 200px;`}>
              Seguir
            </PrimaryButton>
          )}
          
          <PrimaryButton
            color="transparent"
            hoverColors="transparent"
            customStyle={`
   width: 200px;
   `}
            onClick={() => {
              window.open(`mailto:${email}`, '_blank');
            }}>
            Enviar e-mail
          </PrimaryButton>
        </div>
      )}

      <Socials facebook={facebook} instagram={instagram} twitter={twitter} />
    </Wrapper>
  );
};

const occupationShape = {
  label: PropTypes.string,
  id: PropTypes.string
};

const locationShape = {
  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string
};

const historyShape = {
  push: PropTypes.func.isRequired
};

ProductorBasicInfo.propTypes = {
  history: PropTypes.shape(historyShape).isRequired,
  isMyProductor: PropTypes.bool.isRequired,
  occupations: PropTypes.arrayOf(PropTypes.shape(occupationShape)).isRequired,
  address: PropTypes.shape(locationShape),
  email: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  followToggle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

ProductorBasicInfo.defaultProps = {
  address: null
};

export default ProductorBasicInfo;
