/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../../atoms/loading/loading';
import StepFormHeader from '../../organisms/step-form-header/stepFormHeader';
import AvatarFieldset from './components/avatar-fieldset/avatarFieldset';
import CoverFieldset from './components/cover-fieldset/coverFieldset';
import StepEventFormFooter from './components/step-event-form-footer/stepEventFormFooter';
import GeneralInformationFieldset from './components/general-information-fieldset/generalInformationFieldset';
import AddressFieldset from './components/address-fieldset/addressFieldset';
import ConditionsFieldset from './components/conditions-fieldset/conditionsFieldset';
import Store from '../../../store/Store';
import { orange } from '../../../settings/colors';
import {
  fetchCountries,
  handleCountrySelect,
  handleStateSelect,
  handleCreateEvent
} from './registerEvent.controller';
import { Form, FormWrapper, LoadingWrapper } from './registerEvent.style';

const steps = [
  {
    title: 'Criar evento',
    description: 'Preencha os campos abaixo com as informações do seu evento',
    small: false
  }
];

const renderAvatarFieldset = ({ values, setAvatar, errors }) => (
  <AvatarFieldset
    onChange={({ target }) =>
      setAvatar({
        url: URL.createObjectURL(target.files[0]),
        urls: null,
        file: target.files[0]
      })
    }
    values={values}
    eventErrors={errors}
  />
);

const renderCoverFieldset = ({ values, setCover, errors }) => (
  <CoverFieldset
    onChange={({ target }) =>
      setCover({
        url: URL.createObjectURL(target.files[0]),
        urls: null,
        file: target.files[0]
      })
    }
    values={values}
    eventErrors={errors}
  />
);

const renderConditionsFieldset = ({
  values,
  setHasAccomodation,
  setHasFood,
  setHasCityTransportation,
  setHasLocalTransportation,
  setHasInterstateTransportation,
  setHasMoneyPaid,
  setHasInternationalTransportation,
  errors
}) => (
  <ConditionsFieldset
    values={values}
    handleAccomodationChange={() => setHasAccomodation(!values.hasAccomodation)}
    handleHasFoodChange={() => setHasFood(!values.hasFood)}
    handleMoneyPaidChange={() => setHasMoneyPaid(!values.hasMoneyPaid)}
    handleCityTransportationChange={() => setHasCityTransportation(!values.hasCityTransportation)}
    handleLocalTransportationChange={() =>
      setHasLocalTransportation(!values.hasLocalTransportation)
    }
    handleInterstateTransportationChange={() =>
      setHasInterstateTransportation(!values.hasInterstateTransportation)
    }
    handleInternationalTransportationChange={() =>
      setHasInternationalTransportation(!values.hasInternationalTransportation)
    }
    eventErrors={errors}
  />
);

const renderGeneralInformationFieldset = ({
  values,
  setClosingDate,
  setDescription,
  setEventDate,
  setOpeningsNumber,
  setTitle,
  errors,
  setEndEventDate
}) => {
  const handleOpeningsNumberChange = ({ target }) => {
    const validationNumber = /^[0-9]*$/;
    if (validationNumber.test(target.value)) {
      setOpeningsNumber(target.value);
    }
  };

  return (
    <GeneralInformationFieldset
      values={values}
      descriptionMaxLength={2000}
      eventStepErrors={{}}
      handleTitleChange={({ target }) => setTitle(target.value)}
      handleEventDateChange={({ target }) => setEventDate(target.value)}
      handleEndEventDateChange={({ target }) => setEndEventDate(target.value)}
      handleClosingSubscribeDateChange={({ target }) => setClosingDate(target.value)}
      handleDescriptionChange={({ target }) =>
        target.value.length < 2000 ? setDescription(target.value) : null
      }
      handleOpeningsNumberChange={handleOpeningsNumberChange}
      eventErrors={errors}
    />
  );
};

const renderAddressFieldset = ({
  values,
  setAddress,
  setCity,
  states,
  countries,
  setStates,
  setCountry,
  setState,
  setZipcode,
  setComplement,
  setDistrict,
  setNumber,
  errors
}) => (
  <AddressFieldset
    values={values}
    eventStepErrors={{}}
    handleAddressChange={({ target }) => setAddress(target.value)}
    handleCityChange={({ target }) => setCity(target.value)}
    handleDistrictChange={({ target }) => setDistrict(target.value)}
    handleZipcodeChange={({ target }) => setZipcode(target.value)}
    handleComplementChange={({ target }) => setComplement(target.value)}
    handleNumberChange={({ target }) => setNumber(target.value)}
    states={states}
    countries={countries}
    handleCountrySelect={(data) => handleCountrySelect({ data, setStates, setCountry })}
    handleStateSelect={(data) => handleStateSelect({ data, setState })}
    eventErrors={errors}
  />
);

const RegisterEvent = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const [address, setAddress] = useState('');
  const [avatar, setAvatar] = useState({ url: '' });
  const [city, setCity] = useState('');
  const [complement, setComplement] = useState('');
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [cover, setCover] = useState({ url: '' });
  const [closingSubscribeDate, setClosingDate] = useState('');
  const [description, setDescription] = useState('');
  const [district, setDistrict] = useState('');
  const [errors, setErrors] = useState({});
  const [eventDate, setEventDate] = useState('');
  const [endEventDate, setEndEventDate] = useState('');
  const [hasAccomodation, setHasAccomodation] = useState(false);
  const [hasFood, setHasFood] = useState(false);
  const [hasLocalTransportation, setHasLocalTransportation] = useState(false);
  const [hasCityTransportation, setHasCityTransportation] = useState(false);
  const [hasInterstateTransportation, setHasInterstateTransportation] = useState(false);
  const [hasInternationalTransportation, setHasInternationalTransportation] = useState(false);
  const [hasMoneyPaid, setHasMoneyPaid] = useState(false);
  const [locationState, setState] = useState({});
  const [number, setNumber] = useState('');
  const [locationId, setLocationId] = useState('');
  const [openingsNumber, setOpeningsNumber] = useState('');
  const [title, setTitle] = useState('');
  const [states, setStates] = useState([]);
  const [zipcode, setZipcode] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCountries({
      setCountries,
      setStates,
      setState
    });
  }, []);

  if (!state.user) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  if (
    !state.user.productor ||
    !state.user.productor.id ||
    state.user.productor.status !== 'ACTIVE'
  ) {
    router.push('/register-productor');
  }

  const values = {
    avatar,
    closingSubscribeDate,
    cover,
    description,
    eventDate,
    openingsNumber,
    title,
    state: locationState,
    countries,
    states,
    country,
    city,
    address,
    zipcode,
    district,
    complement,
    hasMoneyPaid,
    hasAccomodation,
    hasFood,
    hasLocalTransportation,
    hasCityTransportation,
    hasInterstateTransportation,
    hasInternationalTransportation,
    number,
    locationId,
    endEventDate
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <StepFormHeader color={orange} items={steps} index={0} />
      <FormWrapper>
        {renderAvatarFieldset({ values, setAvatar, errors })}
        {renderCoverFieldset({ values, setCover, errors })}
        {renderGeneralInformationFieldset({
          values,
          setClosingDate,
          setDescription,
          setEventDate,
          setOpeningsNumber,
          setTitle,
          errors,
          setEndEventDate
        })}
        {renderConditionsFieldset({
          values,
          setHasAccomodation,
          setHasFood,
          setHasCityTransportation,
          setHasLocalTransportation,
          setHasInterstateTransportation,
          setHasMoneyPaid,
          setHasInternationalTransportation,
          errors
        })}
        {renderAddressFieldset({
          values,
          setState,
          setCountry,
          setCity,
          countries,
          states,
          setStates,
          setAddress,
          setZipcode,
          setComplement,
          setDistrict,
          setNumber,
          errors
        })}
      </FormWrapper>
      <StepEventFormFooter
        saveAction={() =>
          handleCreateEvent(
            values,
            state.user.id,
            setLoading,
            setErrors,
            setLocationId,
            dispatch,
            state.user,
            router
          )
        }
        actionLabel="Criar evento"
        loading={loading}
        cancelAction={() => null}
      />
    </Form>
  );
};

export default RegisterEvent;
