import React, { useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { useRouter } from 'next/router';
import InputGroup from '../../molecules/input-group/inputGroup';
import TagList from '../../molecules/tag-list/tagList';
import ListInput from '../../molecules/list-input/listInput';
import EventCard from '../../molecules/event-card/eventCard';
import DefaultHeader from '../../organisms/default-header/defaultHeader';
import Dialog from '../../modals/dialog/dialog';
import Store from '../../../store/Store';
import {
  fetchEventsData,
  initialLoading,
  fetchMusicalStyleOptions,
  handleMusicalStyleSelect,
  removeTagAction,
  subscribeAction,
  unsubscribeAction,
  fetchCountries,
  fetchStates
} from './wall.controller';
import {
  Container,
  Form,
  EventsContainer,
  Title,
  filterGroupsStyle,
  tagListStyle
} from './wall.style';

const YEARS_MODEL = [
  { name: '2020', id: '2020' },
  { name: '2021', id: '2021' },
  { name: '2022', id: '2022' },
  { name: '2023', id: '2023' },
  { name: '2024', id: '2024' },
  { name: '2025', id: '2025' },
  { name: '2026', id: '2026' },
  { name: '2027', id: '2027' },
  { name: '2028', id: '2028' },
  { name: '2029', id: '2029' },
  { name: '2029', id: '2029' },
  { name: '2029', id: '2029' },
  { name: '2030', id: '2030' }
];

const MONTH_MODEL = [
  { name: 'Janeiro', id: '0' },
  { name: 'Fevereiro', id: '1' },
  { name: 'Março', id: '2' },
  { name: 'Abril', id: '3' },
  { name: 'Maio', id: '4' },
  { name: 'Junho', id: '5' },
  { name: 'Julho', id: '6' },
  { name: 'Agosto', id: '7' },
  { name: 'Outubro', id: '8' },
  { name: 'Setembro', id: '9' },
  { name: 'Novembro', id: '10' },
  { name: 'Dezembro', id: '11' }
];

/**
 * This render the wall components. The wall component, render events, artists, productors
 * and more about S.O.M
 */
const Wall = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const [loading, setLoading] = useState({ ...initialLoading });
  const [events, setEvents] = useState([]);
  const [dialog, setDialog] = useState({});
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [musicalStylesOptions, setMusicalStylesOptions] = useState([]);
  const [musicStyles, setMusicStyles] = useState([]);
  const [years, setYears] = useState([
    {
      color: 'green',
      text: YEARS_MODEL.find((y) => y.id === moment().year().toString()).name,
      id: YEARS_MODEL.find((y) => y.id === moment().year().toString()).id
    }
  ]);
  const [months, setMonths] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState({});
  const [selectedStates, setSelectedStates] = useState({});

  useEffect(() => {
    fetchCountries({
      setCountries
    });
  }, []);

  useEffect(() => {
    if (selectedCountries) {
      fetchStates({
        setStates,
        country: selectedCountries.id
      });
    }
  }, [selectedCountries]);

  useEffect(() => {
    fetchEventsData({
      setEvents,
      loading,
      setLoading,
      setDialog,
      router,
      musicStyles,
      years,
      months
    });
    // if (!countries.length && !states.length &&!cities.length) {
    //   // fetchLocations({ setCountries, setStates, setCities});
    //   console.log("fetchLocation" + cities)

    fetchMusicalStyleOptions(setMusicalStylesOptions);
    // }
  }, [musicStyles, years, months]);

  return (
    <Container>
      <DefaultHeader />
      <Title>Oportunidades</Title>
      <Form>
        <InputGroup customStyle={filterGroupsStyle}>
          <ListInput
            selected={selectedCountries}
            id="countries"
            placeholder="País"
            options={countries}
            onSelect={setSelectedCountries}
          />
        </InputGroup>

        <InputGroup customStyle={filterGroupsStyle}>
          <ListInput
            selected={selectedStates}
            id="states"
            placeholder="Estado"
            options={states}
            onSelect={setSelectedStates}
          />
        </InputGroup>

        <InputGroup customStyle={filterGroupsStyle}>
          <ListInput
            id="musical_style"
            placeholder="Estilo de música"
            options={musicalStylesOptions.map((op) => ({
              label: op.name,
              id: op.id
            }))}
            onSelect={(data) =>
              handleMusicalStyleSelect({
                data,
                musicStyles,
                setMusicStyles,
                musicalStylesOptions
              })
            }
          />
        </InputGroup>
        <InputGroup customStyle={filterGroupsStyle}>
          <ListInput
            id="year"
            placeholder="Ano"
            options={YEARS_MODEL.map((op) => ({
              label: op.name,
              id: op.id
            }))}
            onSelect={(data) =>
              handleMusicalStyleSelect({
                data,
                musicStyles: years,
                setMusicStyles: setYears,
                musicalStylesOptions: YEARS_MODEL
              })
            }
          />
        </InputGroup>
        <InputGroup customStyle={filterGroupsStyle}>
          <ListInput
            id="month"
            placeholder="Mês"
            options={MONTH_MODEL.map((op) => ({
              label: op.name,
              id: op.id
            }))}
            onSelect={(data) =>
              handleMusicalStyleSelect({
                data,
                musicStyles: months,
                setMusicStyles: setMonths,
                musicalStylesOptions: MONTH_MODEL
              })
            }
          />
        </InputGroup>
        <div>
          <TagList
            handleClose={(data) =>
              removeTagAction({
                data,
                YEARS_MODEL,
                MONTH_MODEL,
                musicalStylesOptions,
                musicStyles,
                years,
                months,
                selectedStates,
                selectedCountries,
                setMusicStyles,
                setYears,
                setMonths,
                setCountries,
                setStates
              })
            }
            data={musicStyles.concat(years).concat(months)}
            customStyle={tagListStyle}
          />
        </div>
      </Form>
      <EventsContainer>
        {events.map((evt) => (
          <EventCard
            key={evt.id}
            loggedAs={state.connectionType}
            unsubscribeAction={() => unsubscribeAction(state.user, evt, setEvents, events)}
            subscribeAction={() =>
              subscribeAction(
                state.auth,
                state.user,
                evt,
                dispatch,
                setDialog,
                setEvents,
                router,
                events
              )
            }
            customStyle="margin-bottom: 2px;"
            user={state.user}
            event={evt}
            onClick={() => router.push(`/event/${evt.id}`)}
          />
        ))}
      </EventsContainer>
      <Container>
        {dialog.title ? (
          <Dialog
            isOpen
            title={dialog.title}
            icon={dialog.icon}
            description={dialog.description}
            agreeText={dialog.agreeText}
            disagreeText={dialog.disagreeText}
            confirmAction={dialog.confirmAction}
            disagreeAction={dialog.disagreeAction}
          />
        ) : null}
      </Container>
    </Container>
  );
};

Wall.propTypes = {};

export default Wall;
