import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
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
  users.map(({ id }) => (
    <CommunityUser key={id}>
      <LazyLoad placeholder={<PlaceholderAvatar></PlaceholderAvatar>} height={147} offset={500}>
        <Avatar alt="" />
      </LazyLoad>
      <Info>
        <Name>Nome exemplo</Name>
        <Label>Produtor Musical</Label>
        <Locale>Maceio, AL</Locale>
      </Info>
    </CommunityUser>
  ));

/**
 *
 * @returns
 */
const CommunityCarrousel = () => {
  const [scroll, setScroll] = useState(0);
  const variation = 147 * 8;
  const dummyUsers = [];

  for (let count = 0; count < 100; count += 1) {
    dummyUsers.push({ id: `#${count + 1}` });
  }

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
        <Row>{renderRowUsers(dummyUsers, 1)}</Row>
        <Row>{renderRowUsers(dummyUsers, 2)}</Row>
        <Row>{renderRowUsers(dummyUsers, 3)}</Row>
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

CommunityCarrousel.propTypes = {};

CommunityCarrousel.defaultProps = {};

export default CommunityCarrousel;
