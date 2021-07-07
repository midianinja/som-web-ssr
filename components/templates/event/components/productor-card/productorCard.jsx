import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../../atoms/avatar/avatar';
import {
  Container,
  ImageWrapper,
  ProductorTitle,
  ProfileWrapper,
  ProductorName,
  ProductorCity,
  ProductorText,
  avatarStyle
} from './productorCard.style';

const ProductorCard = ({ productor, router }) => (
  <Container onClick={() => router.push(`/producer/${productor.id}`)}>
    <ImageWrapper>
      <Avatar customStyle={avatarStyle} src={productor.photo} />
      <ProductorTitle>Produtor</ProductorTitle>
    </ImageWrapper>
    <ProfileWrapper>
      <ProductorName>{productor.name}</ProductorName>
      {productor.location ? (
        <ProductorCity>{`${productor.location.city}, ${productor.location.state}`}</ProductorCity>
      ) : null}
      <ProductorText>{productor.description}</ProductorText>
      {/*
        <FollowersAndFollowing
          nFollowers={productor.followers.length}
          nFollowing={productor.following.length}
        />
        <ButtonsWrapper>
        <PrimaryButton color='green'>seguir</PrimaryButton>
        <LinkButton customStyle="margin-left: 10px" color="black">ver mais eventos</LinkButton>
        </ButtonsWrapper>
      */}
    </ProfileWrapper>
  </Container>
);

const locationShape = {
  city: PropTypes.string,
  state: PropTypes.string
};

const productorShape = {
  description: PropTypes.string,
  photo: PropTypes.string,
  location: PropTypes.shape(locationShape),
  name: PropTypes.string,
  followers: PropTypes.array,
  following: PropTypes.array
};

const routerShape = {
  push: PropTypes.func
};

ProductorCard.propTypes = {
  productor: PropTypes.shape(productorShape).isRequired,
  router: PropTypes.shape(routerShape).isRequired
};

export default ProductorCard;
