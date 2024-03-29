import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import PrimaryButton from '../../atoms/primary-button/primaryButton';
import Cover from '../../atoms/cover/cover';
import Header from '../../organisms/default-header/defaultHeader';
import InstagramMedia from '../../molecules/instagram-medias/instagramMedias';
import Eventcard from '../../molecules/event-card/eventCard';
import DialogModal from '../../modals/dialog/dialog';
import ProductorBasicInfo from './components/productor-basic-information/productorBaseInformation';
import Store from '../../../store/Store';
import { fetchProductorData, follow, unfollow } from './productorProfile.controller';
import {
  ProductorWrapper,
  CoverWrapper,
  HeaderWrapper,
  Content,
  ColumnWrapper,
  EventsTitle,
  NotEvents,
  EventsContainer
} from './productorProfile.style';

/**
 * This render the edition form of productor.
 * @param {array} events this is a list of events that the productor created
 * @param {boolean} more this is flag if is showed more event or not
 * @param {function} setMore this is a function to toggle if show more events or not
 * @param {function} onSuccess function that run when the artist request subscription
 * in the event in the list
 * @returns contains React.Component
 */
const renderEvents = (events, more, setMore, onSuccess, loggedAs, router) => {
  let sortedEvents = events.sort((a, b) =>
    new Date(+a.event_date) > new Date(+b.event_date) ? 1 : -1
  );

  if (!more) sortedEvents = sortedEvents.slice(0, 3);

  return (
    <EventsContainer>
      {sortedEvents.map((event) => (
        <Eventcard
          loggedAs={loggedAs}
          key={event.id}
          event={event}
          onClick={() => router.push(`/event/${event.id}`)}
          onSubscribe={onSuccess}
        />
      ))}
      {events.length > 3 ? (
        <PrimaryButton
          customStyle={`
              background-color: #191919;
              width: 200px;
              margin-top: 10px;
            `}
          onClick={() => setMore(!more)}>
          {more ? 'Carregar menos oportunidades' : 'Carregar mais oportunidades'}
        </PrimaryButton>
      ) : null}
    </EventsContainer>
  );
};

/**
 * This render the edition form of productor.
 * @param {object} props component props
 * @param {stirng} props.label this is a productor reference
 * @returns contains React.Component
 */
const ProductorPage = () => {
  const router = useRouter();
  const { label } = router.query;
  const { state } = useContext(Store);
  const [productorLoading, setProductorLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [more, setMore] = useState(false);
  const [follows, setFollows] = useState();
  const [productor, setProductor] = useState(null);
  const [instagramPhotos] = useState([]);
  const [alertModal, setAlertModal] = useState({
    title: '',
    icon: '',
    description: '',
    agreeText: '',
    disagreeText: '',
    confirmAction: '',
    disagreeAction: '',
    isOpen: false
  });
  useEffect(() => {
    if (label) {
      fetchProductorData(label, setProductor, setProductorLoading, setAlertModal);
    }
  }, []);

  useEffect(() => {
    if (label) {
      fetchProductorData(label, setProductor, setProductorLoading, setAlertModal);
    }
  }, [label]);

  useEffect(() => {
    if (productor) fetchProductorData(productor.id, setProductor, () => '', setAlertModal);
  }, [update]);

  useEffect(() => {
    if (productor?.follows) {
      setFollows(productor?.follows.map((id) => id));
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

  const isMyProductor =
    state.user && state.user.productor && state.user.productor.id === productor.id;

  const handleFollow = () => {
    if (!state.user) {
      state.idaSDK.signinWithPopup();
    } else if (state.user && follows.some((obj) => obj?.id === state.user.id)) {
      unfollow(productor, state.user, follows, setFollows);
    } else {
      follow(productor, state.user, follows, setFollows);
    }
  };

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
          occupations={productor.occupations}
          musicalStyles={productor.musical_styles}
          address={productor.location}
          email={productor.contact_email}
          isMyProductor={isMyProductor}
          history={router}
          followToggle={handleFollow}
          isFollowing={
            state.user && productor.follows
              ? follows.some((obj) => obj.id === state.user.id)
              : false
          }
        />
        <ColumnWrapper>
          <EventsTitle>Oportunidades</EventsTitle>
          {productor.events.length ? (
            renderEvents(
              productor.events,
              more,
              setMore,
              () => setUpdate(!update),
              state.connectionType,
              router
            )
          ) : (
            <NotEvents>Nenhuma oportunidade cadastrada</NotEvents>
          )}
          {instagramPhotos.length ? (
            <InstagramMedia
              images={instagramPhotos}
              navigateToInstagram={() => {
                if (productor.instagram) {
                  window.open(productor.instagram, '_blank');
                }
              }}
            />
          ) : null}
        </ColumnWrapper>
      </Content>
    </ProductorWrapper>
  );
};

ProductorPage.propTypes = {};

export default ProductorPage;
