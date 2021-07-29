import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  CommunityUser,
  Avatar,
  PlaceholderAvatar,
  Info,
  Name,
  Label,
  Locale,
  IconWrapper,
  RowsWrapper
} from './communityCarrousel.style';

/**
 *
 * @param {*} users
 * @returns
 */
const renderRowUsers = (users) =>
  users.map(({ id, user }) => (
    <CommunityUser key={id}>
      <LazyLoad placeholder={<PlaceholderAvatar></PlaceholderAvatar>} height={147} offset={500}>
        <Avatar src={user?.artist?.avatar_image?.mimified || user?.productor?.photo} alt="" />
      </LazyLoad>
      <Info>
        <Name>{user?.name}</Name>
        <Label>Produtor Musical</Label>
        <Locale>Maceio, AL</Locale>
      </Info>
    </CommunityUser>
  ));

/**
 *
 * @returns
 */
const CommunityCarrousel = ({ communityUsers }) => {
  const [scroll, setScroll] = useState(0);
  const variation = 147 * 8;
  const dummyUsers = [];

  for (let count = 0; count < 100; count += 1) {
    dummyUsers.push({ id: `#${count + 1}` });
  }

  const line1 = communityUsers.filter((communityUser, index) => index % 3 === 1);
  const line2 = communityUsers.filter((communityUser, index) => index % 3 === 2);
  const line3 = communityUsers.filter((communityUser, index) => index % 3 === 0);

  console.log(line3);
  console.log(communityUsers);

  return (
    <Container>
      <IconWrapper
        onClick={() => {
          if (scroll + variation < variation) setScroll(scroll + variation);
        }}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" fill="#C1C1C1" fillOpacity="0.4" />
          <path d="M27.0004 14.0006L17 24.001L27.0004 34.0013" stroke="white" strokeWidth="3" />
        </svg>
      </IconWrapper>
      <RowsWrapper id="cr-wrapper" translate={scroll}>
        <Row>
          {renderRowUsers(
            line1.concat([...dummyUsers].splice(0, dummyUsers.length - line1.length)),
            1
          )}
        </Row>
        <Row>
          {renderRowUsers(
            line2.concat([...dummyUsers].splice(0, dummyUsers.length - line2.length)),
            2
          )}
        </Row>
        <Row>
          {renderRowUsers(
            line3.concat([...dummyUsers].splice(0, dummyUsers.length - line3.length)),
            3
          )}
        </Row>
      </RowsWrapper>
      <IconWrapper
        onClick={() => {
          const wrapper = document.querySelector('#cr-wrapper');

          if (Math.abs(scroll) < wrapper.scrollWidth - variation) {
            setScroll(scroll - variation);
          }
        }}>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="24"
            cy="24"
            r="24"
            transform="rotate(-180 24 24)"
            fill="#C1C1C1"
            fillOpacity="0.4"
          />
          <path d="M20.9996 33.9994L31 23.999L20.9996 13.9987" stroke="white" strokeWidth="3" />
        </svg>
      </IconWrapper>
    </Container>
  );
};

const imageShape = {
  mimified: PropTypes.string
};

const artistShape = {
  avatar_image: PropTypes.shape(imageShape),
  name: PropTypes.string
};

const productorShape = {
  photo: PropTypes.string,
  name: PropTypes.string
};

const communityUserShape = {
  id: PropTypes.string,
  artist: PropTypes.shape(artistShape),
  productor: PropTypes.shape(productorShape)
};

CommunityCarrousel.propTypes = {
  communityUsers: PropTypes.arrayOf(PropTypes.shape(communityUserShape))
};

CommunityCarrousel.defaultProps = {};

export default CommunityCarrousel;
