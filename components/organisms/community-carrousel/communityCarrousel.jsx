import React from 'react';
import {
  Container,
  Row,
  CommunityUser,
  Avatar,
  Info,
  Name,
  Label,
  Locale
} from './communityCarrousel.style';

/**
 *
 * @param {*} users
 * @returns
 */
const renderRowUsers = (users) =>
  users.map(({ id }) => (
    <CommunityUser key={id}>
      <Avatar />
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
  const dummyUsers = [];

  for (let count = 0; count < 100; count += 1) {
    dummyUsers.push({ id: `#${count + 1}` });
  }

  return (
    <Container>
      <Row>{renderRowUsers(dummyUsers)}</Row>
      <Row>{renderRowUsers(dummyUsers)}</Row>
      <Row>{renderRowUsers(dummyUsers)}</Row>
    </Container>
  );
};

CommunityCarrousel.propTypes = {};

CommunityCarrousel.defaultProps = {};

export default CommunityCarrousel;
