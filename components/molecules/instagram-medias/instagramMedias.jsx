import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from '../../atoms/link-button/LinkButton';
// import ProgresiveImage from '../atoms/ProgressiveImage.atom';
import { imgStyle, Container, Row, MobileRow, Title } from './instagramMedias.style';

const InstagramMedia = ({ images, navigateToInstagram }) => (
  <Container>
    {/* <Title> Instagram </Title>
    <Row>
      <ProgresiveImage src={images[0]} customStyle={imgStyle} />
      <ProgresiveImage src={images[1]} customStyle={imgStyle} />
      <ProgresiveImage src={images[2]} customStyle={imgStyle} />\
    </Row>
    <Row>
      <ProgresiveImage src={images[3]} customStyle={imgStyle} />
      <ProgresiveImage src={images[4]} customStyle={imgStyle} />
      <ProgresiveImage src={images[5]} customStyle={imgStyle} />
    </Row>
    <MobileRow>
      <ProgresiveImage src={images[6]} customStyle={imgStyle} />
      <ProgresiveImage src={images[7]} customStyle={imgStyle} />
      <ProgresiveImage src={images[8]} customStyle={imgStyle} />
    </MobileRow> */}
    <LinkButton onClick={navigateToInstagram} color="white">
      {' '}
      Abrir Instagram{' '}
    </LinkButton>
  </Container>
);

InstagramMedia.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.required),
  navigateToInstagram: PropTypes.func.isRequired
};

InstagramMedia.defaultProps = {
  images: []
};

export default InstagramMedia;
