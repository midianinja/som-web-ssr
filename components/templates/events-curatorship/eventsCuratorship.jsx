import React, { useState, useEffect, useContext } from 'react';
import Store from '../../../store/Store';
import ArtistCurationshipModal from '../../modals/artist-curationship/artistCurationship';
import Header from '../../organisms/default-header/defaultHeader';
import Avatar from '../../atoms/avatar/avatar';
import {
  getArtsts,
  approveArtist,
  reproveArtist,
  resetSubscriptionAction
} from './eventsCuratorship.controller';
import {
  CuratorshiptWrapper,
  Title,
  Main,
  Menu,
  MenuOption,
  Table,
  Head,
  HSmallCol,
  HBigCol,
  SmallCol,
  BigCol,
  Body,
  Line,
  Name,
  Profile,
  EventName,
  SubscriptionStatus,
  ArtistiInfos,
  SubscriptionLabel
} from './eventsCuratorship.style';

const renderArtistLines = ({ artists, setHover, setArtist, hover }) =>
  artists.map((art) => (
    <Line
      key={art.uniqueId}
      hover={hover === art.id}
      onClick={() => setArtist(art)}
      onMouseEnter={() => setHover(art.id)}
      onMouseLeave={() => setHover('')}>
      <BigCol hover={hover === art.id}>
        <ArtistiInfos>
          <Avatar
            customStyle={`
            max-width: 42px;
            max-height: 42px;
            margin-right: 10px;
          `}
            src={art.avatar.mimified}
          />
          <Name>{art.name}</Name>
          <Profile>artista</Profile>
        </ArtistiInfos>
        <SubscriptionStatus approved={art.approved} hidde={!art.approved}>
          <SubscriptionLabel>{art.approved}</SubscriptionLabel>
        </SubscriptionStatus>
      </BigCol>
      <SmallCol hover={hover === art.id}>
        <EventName>{art.event.name}</EventName>
      </SmallCol>
    </Line>
  ));

function EventCuratorshipPage() {
  const [menu, setMenu] = useState('open');
  const [artists, setArtists] = useState([]);
  const [ratedArtists, setRatedArtists] = useState([]);
  const [hover, setHover] = useState('');
  const [artist, setArtist] = useState(null);
  const { state } = useContext(Store);

  useEffect(() => {
    if (state.user && state.user.productor) {
      getArtsts({ setArtists, productor: state.user.productor, setRatedArtists });
    }
  }, [state.user]);

  return (
    <CuratorshiptWrapper>
      <Header />
      <Title>Avaliar inscrições</Title>
      <Main>
        <Menu>
          <MenuOption selected={menu === 'open'} onClick={() => setMenu('open')}>
            Em Aberto
          </MenuOption>
          <MenuOption selected={menu === 'admitted'} onClick={() => setMenu('admitted')}>
            Já avaliados
          </MenuOption>
        </Menu>
        <Table>
          <Head>
            <HBigCol>Artista</HBigCol>
            <HSmallCol>Evento</HSmallCol>
          </Head>
          <Body>
            {renderArtistLines({
              artists: menu === 'open' ? artists : ratedArtists,
              setHover,
              setArtist,
              hover,
              menu
            })}
          </Body>
        </Table>
      </Main>
      <ArtistCurationshipModal
        reproveAction={() =>
          reproveArtist({
            artist,
            artists,
            ratedArtists,
            setArtists,
            setArtist,
            setRatedArtists
          })
        }
        approveAction={() =>
          approveArtist({
            artist,
            artists,
            ratedArtists,
            setArtists,
            setArtist,
            setRatedArtists
          })
        }
        resetSubscriptionAction={() =>
          resetSubscriptionAction({
            artist,
            artists,
            ratedArtists,
            setArtists,
            setArtist,
            setRatedArtists
          })
        }
        artist={artist}
        closeModal={() => setArtist(null)}
      />
    </CuratorshiptWrapper>
  );
}

export default EventCuratorshipPage;
