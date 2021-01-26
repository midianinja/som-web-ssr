import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '../../atoms/loading/loading';
import StepFormHeader from '../../organisms/step-form-header/stepFormHeader';
import StepFormFooter from '../../organisms/step-form-footer/stepFormFooter';
import BasicInformationFieldset from './components/basic-information-fieldset/basicInformationFieldset';
import ContactFieldset from './components/contact-fieldset/contactFieldset';
import LocationFieldset from './components/location-fieldset/locationFieldset';
import SocialsFieldset from './components/social-fieldset/socialFieldset';
import Store from '../../../store/Store';
import { purple } from '../../../settings/colors';
import { steps } from './productor.collections';
import {
  fetchMusicalStyleOptions, handleACMusicalStyle, handleMusicalStyleSelect,
  deleteTag, handleCreateProductor, mapMusicalStyles, handleEditProductor,
  nextCallback, fetchLocations, handleCountrySelect, handleStateSelect,
} from './productor.controller';
import {
  LoadingWrapper, Form, FormWrapper,
} from './productor.style';

/**
 * render basic infos fields
 */
const renderBasicInfos = ({
  values, setAbout, setName, productorStepErrors,
  musicalStylesOptions, musicalStyles, setMusicalStyle, setMusicalStylePredict,
  setMusicalStyles, setAvatar, setCPF, setCNPJ,
}) => (
  <BasicInformationFieldset
    descriptionMaxLength={2000}
    deleteTag={id => deleteTag({
      id,
      tags: musicalStyles,
      setTag: setMusicalStyles,
    })}
    handleAboutChange={({ target }) => (target.value.length < 2000 ? setAbout(target.value) : null)}
    handleAvatarChange={({ target }) => setAvatar({
      url: URL.createObjectURL(target.files[0]),
      urls: null,
      file: target.files[0],
    })}
    handleCNPJChange={({ target }) => setCNPJ(target.value)}
    handleCPFChange={({ target }) => setCPF(target.value)}
    handleNameChange={({ target }) => setName(target.value)}
    handleMusicalStyleChange={({ target }) => handleACMusicalStyle({
      value: target.value,
      musicalStylesOptions,
      setMusicalStylePredict,
      setMusicalStyle,
    })}
    handleMusicalStyleSelect={value => handleMusicalStyleSelect({
      value,
      musicalStylesOptions,
      musicalStyles,
      setMusicalStyle,
      setMusicalStylePredict,
      setMusicalStyles,
    })}
    productorStepErrors={productorStepErrors}
    values={values}
  />
);

/**
 * render location fields
 */
const renderLocationFieldset = ({
  values, visibles, setCity, setState, setCountry,
  productorStepErrors, setStates, countries, states,
}) => {
  if (!visibles.location) return null;
  return (
    <LocationFieldset
      values={values}
      coutry={values.country}
      state={values.state}
      countries={countries}
      states={states}
      productorStepErrors={productorStepErrors}
      handleCityChange={({ target }) => setCity(target.value)}
      handleCountrySelect={data => handleCountrySelect({ data, setStates, setCountry })}
      handleStateSelect={data => handleStateSelect({ data, setState })}
    />
  );
};

/**
 * render contact fields
 */
const renderContactFieldset = ({
  visibles, values, setMainPhone, setSecondaryPhone,
  setWhatsapp, setTelegram, setContactEmail, productorStepErrors,
}) => {
  if (!visibles.contact) return null;
  return (
    <ContactFieldset
      handleMainPhoneChange={({ target }) => setMainPhone(target.value)}
      handleSecondaryPhoneChange={({ target }) => setSecondaryPhone(target.value)}
      handleWhatsappChange={({ target }) => setWhatsapp(target.value)}
      handleTelegramChange={({ target }) => setTelegram(target.value)}
      handleContactEmailChange={({ target }) => setContactEmail(target.value)}
      productorStepErrors={productorStepErrors}
      values={values}
    />
  );
};

/**
 * render social fields
 */
const renderSocialsFieldset = ({
  visibles, values, setFacebook, setTwitter,
  setYoutube, setInstagram, productorStepErrors,
}) => {
  if (!visibles.socials) return null;
  return (
    <SocialsFieldset
      handleFacebookChange={({ target }) => setFacebook(target.value)}
      handleInstagramChange={({ target }) => setInstagram(target.value)}
      handleTwitterChange={({ target }) => setTwitter(target.value)}
      handleYoutubeChange={({ target }) => setYoutube(target.value)}
      stepErrors={productorStepErrors}
      values={values}
    />
  );
};

/**
 * This contains a form edition to productor profile  
 * @returns {React.Component} productor form
 */
const Productor = () => {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const [about, setAbout] = useState('');
  const [locationId, setLocationId] = useState('');
  const [avatar, setAvatar] = useState({ url: '' });
  const [city, setCity] = useState('');
  const [cnpj, setCNPJ] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [cpf, setCPF] = useState('');
  const [facebook, setFacebook] = useState('https://www.facebook.com/');
  const [id, setId] = useState('');
  const [instagram, setInstagram] = useState('https://www.instagram.com/');
  const [loading, setLoading] = useState({ show: false });
  const [mainPhone, setMainPhone] = useState('');
  const [musicalStyles, setMusicalStyles] = useState([]);
  const [musicalStylesOptions, setMusicalStylesOptions] = useState([]);
  const [musicalStylePredict, setMusicalStylePredict] = useState('');
  const [musicalStyle, setMusicalStyle] = useState('');
  const [name, setName] = useState('');
  const [secondaryPhone, setSecondaryPhone] = useState('');
  const [productorStepErrors, setProductorStepErrors] = useState({});
  const [locationState, setState] = useState({});
  const [states, setStates] = useState([]);
  const [step, setStep] = useState(0);
  const [telegram, setTelegram] = useState('');
  const [twitter, setTwitter] = useState('https://twitter.com/');
  const [visibles, setVisibles] = useState({
    location: false,
    contact: false,
    socials: false,
  });
  const [whatsapp, setWhatsapp] = useState('');
  const [youtube, setYoutube] = useState('https://www.youtube.com/');

  const mapContextToState = (productor) => {
    setId(productor.id || '');
    setName(productor.name || '');
    setAbout(productor.description || '');
    setAvatar({ url: productor.photo || '' });
    setCNPJ(productor.cnpj || '');
    setCPF(productor.cpf || '');
    setMusicalStyles(mapMusicalStyles(productor.musical_styles || []));
    setMainPhone(productor.main_phone || '');
    setSecondaryPhone(productor.secondary_phone || '');
    setWhatsapp(productor.whatsapp || '');
    setTelegram(productor.telegram || '');
    setContactEmail(productor.contact_email || '');
    setFacebook(productor.facebook || 'https://www.facebook.com/');
    setInstagram(productor.instagram || 'https://www.instagram.com/');
    setTwitter(productor.twitter || 'https://twitter.com/');
    setYoutube(productor.youtube || 'https://www.youtube.com/');

    if (productor.location && productor.location.id) {
      setLocationId(productor.location.id);
      setCity(productor.location.city);
    }
  };

  if (state.connectionType === 'artist') {
    router.push('/register-artist');
  }

  useEffect(() => {
    if (state.connectionType === 'artist') {
      router.push('/register-artist');
    }
  }, [state.connectionType]);


  useEffect(() => {
    if (state.user && state.user.productor) {
      mapContextToState(state.user.productor);
    }

    fetchMusicalStyleOptions(setMusicalStylesOptions);
  }, []);

  useEffect(() => {
    if (state.user && state.user.productor) {
      const { productor } = state.user;
      mapContextToState(productor);

      fetchLocations({
        setCountries, setStates, setState, setCity,
        productor, setCountry,
      });

      setVisibles({
        location: true,
        contact: true,
        socials: true,
      });

      setStep(1);
    } else {
      fetchLocations({
        setCountries, setStates, setState, setCity,
        productor: {},
        setCountry,
      });
    }
  }, [state.user]);

  useEffect(() => {
    if (!state.loading.verify && !state.user) {
      router.push('/');
    }
  }, [state.loading]);

  const values = {
    avatar, about, cpf, cnpj,
    instagram, musicalStyles, musicalStylePredict, musicalStyle,
    name, mainPhone, secondaryPhone, whatsapp, telegram,
    contactEmail, facebook, youtube, twitter, country, state: locationState,
    city, locationId,
  };

  // verify S.O.M user, if there is not render loading
  if (!state.user) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <Form autocomplete={false} onSubmit={e => e.preventDefault()}>
      <StepFormHeader color={purple} items={steps} index={step} />
      <FormWrapper>
        {
          renderBasicInfos({
            values, setAbout, setMusicalStyle, musicalStyles,
            setMusicalStylePredict, musicalStylesOptions, setMusicalStyles,
            setMusicalStylesOptions, setName, setAvatar, productorStepErrors,
            setProductorStepErrors, setCNPJ, setCPF,
          })
        }
        {
          renderLocationFieldset({
            visibles, values, setState, setCountry, setCity,
            countries, states, productorStepErrors, setStates,
            locationId, setLocationId,
          })
        }
        {
          renderContactFieldset({
            visibles, values, setMainPhone, setSecondaryPhone,
            setWhatsapp, setTelegram, setContactEmail, productorStepErrors,
          })
        }
        {
          renderSocialsFieldset({
            visibles, values, setFacebook, setInstagram,
            setTwitter, setYoutube, productorStepErrors,
          })
        }
      </FormWrapper>
      <StepFormFooter
        nextAction={() => {
          if (!id) {
            handleCreateProductor({
              values, userId: state.user.id, setLoading, visibles, router,
              setVisibles, setLocationId, dispatch, user: state.user, setId,
            });
          } else {
            handleEditProductor(
              values, id, state.user.id, setLoading,
              visibles, setVisibles, setLocationId, dispatch,
              state.user, router,
            );
          }
        }}
        loading={loading.show}
        loadingText={loading.text}
        noShowSkip={visibles.socials}
        skipAction={() => nextCallback({ router, visibles, setVisibles })}
      />
    </Form>
  );
};

export default Productor;
