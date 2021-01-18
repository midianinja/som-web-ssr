import React from 'react';
import PropTypes from 'prop-types';
import EventDate from '../../atoms/event-date/EventDate';
import EventPlace from '../../atoms/event-place/EventPlace';
import PrimaryButton from '../../atoms/primary-button/PrimaryButton';
import {
  Container, EventImage, EventInfoWrapper,
  ButtonWrapper, buttonCustomStyle, Link,
} from './eventCard.style';

const Eventcard = ({ eventImageSrc }) => (
  <Container>
    <EventImage src={eventImageSrc} />
    <EventInfoWrapper>
      <Link href='link'>Nome do Festival</Link>
      <div>
        <EventDate />
        <EventPlace city='Rio de Janeiro' state='RJ' />
      </div>
      <ButtonWrapper>
        <PrimaryButton size='small' customStyle={buttonCustomStyle}>
          Quero me inscrever
        </PrimaryButton>
      </ButtonWrapper>
    </EventInfoWrapper>
  </Container>
);

Eventcard.propTypes = {
  eventImageSrc: PropTypes.string,
};

Eventcard.defaultProps = {
  eventImageSrc: '',
};


export default Eventcard;
