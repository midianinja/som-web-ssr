import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  CuratorshipListWrapper,
  CuratorshipTabs,
  CuratorshipTab,
  List,
  SubscriptionCard,
  SubscriberAvatar,
  SubscriberName,
  SubscriberType,
  // SubscriptionDate,
  InfoWrapper
} from './curatorship.style';

const renderSubscriptions = (subscriptions, setSelectedArtist, setSelectedProducer) =>
  subscriptions.map(({ name, type, photo, avatar_image }, index) => (
    <SubscriptionCard
      key=""
      onClick={() => {
        if (type === 'producer') {
          setSelectedArtist(null);
          setSelectedProducer(subscriptions[index]);
        } else {
          setSelectedProducer(null);
          setSelectedArtist(subscriptions[index]);
        }
      }}>
      <SubscriberAvatar>
        <img src={type === 'producer' ? photo : avatar_image?.mimified} alt="" />
      </SubscriberAvatar>
      <InfoWrapper>
        <SubscriberName>{name}</SubscriberName>
        <div>
          <SubscriberType>{type === 'producer' ? 'produtor' : 'artista'}</SubscriberType>
          {/* <SubscriptionDate>Inscrito ás 18h32, 11.06.21</SubscriptionDate> */}
        </div>
      </InfoWrapper>
    </SubscriptionCard>
  ));

const CuratorshipList = ({
  openedSubscriptions,
  evaluatedSubscriptions,
  setSelectedArtist,
  setSelectedProducer
}) => {
  const [selectedType, setSelectedType] = useState('openedSubscriptions');

  return (
    <CuratorshipListWrapper>
      <CuratorshipTabs>
        <CuratorshipTab
          selected={selectedType === 'openedSubscriptions'}
          onClick={() => setSelectedType('openedSubscriptions')}>
          Em aberto ({openedSubscriptions.length})
        </CuratorshipTab>
        <CuratorshipTab
          selected={selectedType === 'evaluatedSubscriptions'}
          onClick={() => setSelectedType('evaluatedSubscriptions')}>
          Já avaliados
        </CuratorshipTab>
      </CuratorshipTabs>
      <List>
        {renderSubscriptions(
          selectedType === 'openedSubscriptions' ? openedSubscriptions : evaluatedSubscriptions,
          setSelectedArtist,
          setSelectedProducer
        )}
      </List>
    </CuratorshipListWrapper>
  );
};

CuratorshipList.propTypes = {
  openedSubscriptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  evaluatedSubscriptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setSelectedArtist: PropTypes.func.isRequired,
  setSelectedProducer: PropTypes.func.isRequired
};

export default CuratorshipList;
