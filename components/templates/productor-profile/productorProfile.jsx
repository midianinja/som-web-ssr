import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import PrimaryButton from '../../atoms/primary-button/PrimaryButton';
import Cover from '../../atoms/cover/Cover';
import Header from '../../organisms/default-header/defaultHeader';
import InstagramMedia from '../../molecules/intagram-medias/intagramMedias';
import Eventcard from '../../molecules/event-card/eventCard';
import DialogModal from '../../modals/dialog/dialog';
import ProductorBasicInfo from './components/productor-basic-information/productorBaseInformation';
import Store from '../../../store/Store';
import { fetchProductorData, fetchProductorInstaImages } from './productorProfile.controller';
import {
  ProductorWrapper, CoverWrapper, HeaderWrapper, Content,
  ColumnWrapper, EventsTitle, NotEvents, EventsContainer,
} from './productorProfile.style';

const renderEvents = (events, more, setMore, onSuccess) => {
  let sortedEvents = events.sort((a, b) => (
    new Date(+a.event_date) > new Date(+b.event_date) ? 1 : -1));

  if (!more) sortedEvents = sortedEvents.slice(0, 2);

  return (
    <EventsContainer>
      {
        sortedEvents.map(event => (
          <Eventcard
            key={event.id}
            customStyle="margin: 40px 0;"
            event={event}
            onSubscribe={onSuccess}
          />
        ))
      }
      {
        events.length > 2 ? (
          <PrimaryButton
            customStyle={`
              background-color: ${tertiaryBlack};
              width: 200px;
            `}
            onClick={() => setMore(!more)}
          >
            {more ? 'Carregar menos eventos' : 'Carregar mais eventos'}
          </PrimaryButton>
        ) : null
      }
    </EventsContainer>
  );
};

const ProductorPage = ({ label }) => {
  const router = useRouter();
  const { state } = useContext(Store);
  const [productorLoading, setProductorLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [more, setMore] = useState(false);
  const [productor, setProductor] = useState(null);
  const [instagramPhotos, setInstagramPhotos] = useState([]);
  const [alertModal, setAlertModal] = useState({
    title: '',
    icon: '',
    description: '',
    agreeText: '',
    disagreeText: '',
    confirmAction: '',
    disagreeAction: '',
    isOpen: false,
  });

  useEffect(() => {
    if (label) {
      fetchProductorData(label, setProductor, setProductorLoading, setAlertModal);
    }
  }, []);

  useEffect(() => {
    if (productor) fetchProductorData(productor.id, setProductor, () => '', setAlertModal);
  }, [update]);

  useEffect(() => {
    if (productor && productor.instagram) {
      fetchProductorInstaImages(productor.instagram, setInstagramPhotos);
    }
  }, [productor]);

  if (!productor || productorLoading) return null;

  if (alertModal.isOpen) {
    return (
      <DialogModal
        title={alertModal.title}
        description={alertModal.description}
        agreeText={alertModal.agreeText}
        disagreeText={alertModal.disagreeText}
        confirmAction={alertModal.confirmAction}
        disagreeAction={alertModal.disagreeAction}
        isOpen={alertModal.isOpen}
      />
    );
  }

  const isMyProductor = state.user
    && state.user.productor && state.user.productor.id === productor.id;

  return (
    <ProductorWrapper>
      <Header />
      <CoverWrapper>
        <Cover cover={productor.cover}>
          <HeaderWrapper />
        </Cover>
      </CoverWrapper>
      <Content>
        <ProductorBasicInfo
          avatar={productor.photo ? productor.photo : ''}
          about={productor.description}
          name={productor.name}
          facebook={productor.facebook}
          twitter={productor.twitter}
          instagram={productor.instagram}
          musicalStyles={productor.musical_styles}
          address={productor.location}
          email={productor.contact_email}
          isMyProductor={isMyProductor}
          history={router}
        />
        <ColumnWrapper>
          <EventsTitle>Eventos</EventsTitle>
          {
            productor.events.length ? (
              renderEvents(
                productor.events,
                more,
                setMore,
                () => setUpdate(!update),
              )
            ) : <NotEvents>Nenhum evento cadastrado</NotEvents>
          }
          {
            instagramPhotos.length ? (
              <InstagramMedia
                images={instagramPhotos}
                navigateToInstagram={() => {
                  if (productor.instagram) {
                    window.open(productor.instagram, '_blank');
                  }
                }}
              />
            ) : null
          }
        </ColumnWrapper>
      </Content>
    </ProductorWrapper>
  );
}

ProductorPage.propTypes = {};

export default ProductorPage;
