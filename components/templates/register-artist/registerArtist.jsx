import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { magenta } from '../../../settings/colors';
import Store from '../../../store/Store';
import StepFormFooter from '../../organisms/step-form-footer/stepFormFooter';
import StepFormHeader from '../../organisms/step-form-header/stepFormHeader';
import ContactFieldset from './components/contact-fieldset/contactFieldset';
import LocationFieldset from './/components/location-fieldset/locationFieldset';
import BasicInformationFieldset from './components/basic-information-fieldset/basicInformationFieldset';
import steps from './registerArtist.collections';
import {
  fetchLocations,
  fetchMusicalStyleOptions,
  handleMusicalStyleSelect,
  handleACMusicalStyle,
  nextCallback,
  handleCountrySelect,
  handleStateSelect
} from './registerArtist.controller';
import { Form } from './registerArtist.style';
import SocialsFieldset from './components/social-fieldset/socialFieldset';
import DocFilesFieldset from './components/doc-files-fieldset/docFilesFieldset';
import MusicFieldset from './components/music-fieldset/musicFieldset';

/**
 * render basic infos fields
 */
const renderBasicInfos = ({
  values,
  setAbout,
  setName,
  productorStepErrors,
  musicalStylesOptions,
  musicalStyles,
  setMusicalStyle,
  setMusicalStylePredict,
  setMusicalStyles,
  setAvatar,
  setCNPJ,
  handleIntegrants
}) => (
  <BasicInformationFieldset
    descriptionMaxLength={2000}
    deleteTag={(id) =>
      deleteTag({
        id,
        tags: musicalStyles,
        setTag: setMusicalStyles
      })
    }
    handleAboutChange={({ target }) => (target.value.length < 2000 ? setAbout(target.value) : null)}
    handleAvatarChange={({ target }) =>
      setAvatar({
        url: URL.createObjectURL(target.files[0]),
        urls: null,
        file: target.files[0]
      })
    }
    handleCNPJChange={({ target }) => setCNPJ(target.value)}
    handleIntegrants={({ target }) => handleIntegrants(target.value)}
    handleNameChange={({ target }) => setName(target.value)}
    handleMusicalStyleChange={({ target }) =>
      handleACMusicalStyle({
        value: target.value,
        musicalStylesOptions,
        setMusicalStylePredict,
        setMusicalStyle
      })
    }
    handleMusicalStyleSelect={(value) =>
      handleMusicalStyleSelect({
        value,
        musicalStylesOptions,
        musicalStyles,
        setMusicalStyle,
        setMusicalStylePredict,
        setMusicalStyles
      })
    }
    productorStepErrors={productorStepErrors}
    values={values}
  />
);

/**
 * render location fields
 */
const renderLocationFieldset = ({
  values,
  visibles,
  setCity,
  setState,
  setCountry,
  productorStepErrors,
  setStates,
  countries,
  states
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
      handleCountrySelect={(data) => handleCountrySelect({ data, setStates, setCountry })}
      handleStateSelect={(data) => handleStateSelect({ data, setState })}
    />
  );
};

/**
 * render contact fields
 */
const renderContactFieldset = ({
  visibles,
  values,
  setMainPhone,
  setSecondaryPhone,
  setWhatsapp,
  setTelegram,
  setContactEmail,
  productorStepErrors
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
  visibles,
  values,
  setFacebook,
  setTwitter,
  setYoutube,
  setInstagram,
  productorStepErrors
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
 * render social fields
 */
const renderFilesDocs = ({ visibles }) => {
  if (!visibles.files) return null;
  return <DocFilesFieldset />;
};

/**
 * render social fields
 */
const renderMusics = ({ visibles }) => {
  if (!visibles.files) return null;
  return <MusicFieldset />;
};

/**
 * This contains the RegisterArtistTemplate Page
 * @returns {React.Component} productor form
 */
const RegisterArtistTemplate = () => {
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const [about, setAbout] = useState('');
  const [locationId, setLocationId] = useState('');
  const [avatar, setAvatar] = useState({ url: '' });
  const [city, setCity] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState({});
  const [integrants, handleIntegrants] = useState('');
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
  const [productorStepErrors, setProductorStepErrors] = useState({});
  const [locationState, setState] = useState({});
  const [states, setStates] = useState([]);
  const [telegram, setTelegram] = useState('');
  const [twitter, setTwitter] = useState('https://twitter.com/');
  const [whatsapp, setWhatsapp] = useState('');
  const [youtube, setYoutube] = useState('https://www.youtube.com/');
  const [tecRider, setTecRider] = useState(null);
  const [tecMap, setTecMap] = useState(null);
  const [tecRelease, setRelease] = useState(null);
  const [visibles, setVisibles] = useState({
    location: false,
    contact: false,
    socials: false,
    files: false,
    musics: false
  });

  const mapContextToState = (productor) => {
    setId(productor.id || '');
    setName(productor.name || '');
    setAbout(productor.description || '');
    setAvatar({ url: productor.photo || '' });
    setMusicalStyles(mapMusicalStyles(productor.musical_styles || []));
    setMainPhone(productor.main_phone || '');
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
    // router.push('/register-artist');
  }

  useEffect(() => {
    // if (state.connectionType === 'artist') {
    //   router.push('/register-artist');
    // }
  }, [state.connectionType]);

  useEffect(() => {
    if (state.user && state.user.productor) {
      // mapContextToState(state.user.productor);
    }

    fetchMusicalStyleOptions(setMusicalStylesOptions);
  }, []);

  useEffect(() => {
    if (state.user && state.user.productor) {
      const { productor } = state.user;
      mapContextToState(productor);
      fetchLocations({
        setCountries,
        setStates,
        setState,
        setCity,
        productor,
        setCountry
      });
    } else {
      fetchLocations({
        setCountries,
        setStates,
        setState,
        setCity,
        productor: {},
        setCountry
      });
    }
  }, [state.user]);

  useEffect(() => {
    // if (!state.loading.verify && !state.user) {
    //   router.push('/');
    // }
  }, [state.loading]);

  const values = {
    avatar,
    about,
    integrants,
    instagram,
    musicalStyles,
    musicalStylePredict,
    musicalStyle,
    name,
    mainPhone,
    whatsapp,
    telegram,
    contactEmail,
    facebook,
    youtube,
    twitter,
    country,
    state: locationState,
    city,
    locationId
  };

  return (
    <Form autocomplete={false} onSubmit={(e) => e.preventDefault()}>
      <StepFormHeader color={magenta} items={steps} index={'0'} />
      {renderBasicInfos({
        values,
        setAbout,
        setMusicalStyle,
        musicalStyles,
        setMusicalStylePredict,
        musicalStylesOptions,
        setMusicalStyles,
        setMusicalStylesOptions,
        setName,
        setAvatar,
        productorStepErrors,
        setProductorStepErrors,
        handleIntegrants
      })}
      {renderLocationFieldset({
        visibles,
        values,
        setState,
        setCountry,
        setCity,
        countries,
        states,
        productorStepErrors,
        setStates,
        locationId,
        setLocationId
      })}
      {renderContactFieldset({
        visibles,
        values,
        setMainPhone,
        setWhatsapp,
        setTelegram,
        setContactEmail,
        productorStepErrors
      })}
      {renderSocialsFieldset({
        visibles,
        values,
        setFacebook,
        setInstagram,
        setTwitter,
        setYoutube,
        productorStepErrors
      })}
      {renderFilesDocs({
        visibles
      })}
      {renderMusics({
        visibles
      })}
      <StepFormFooter
        nextAction={() => {
          if (!id) {
            handleCreateProductor({
              values,
              userId: state.user.id,
              setLoading,
              visibles,
              history,
              setVisibles,
              setLocationId,
              dispatch,
              user: state.user,
              setId
            });
          } else {
            handleEditProductor(
              values,
              id,
              state.user.id,
              setLoading,
              visibles,
              setVisibles,
              setLocationId,
              dispatch,
              state.user,
              history
            );
          }
        }}
        loading={loading.show}
        loadingText={loading.text}
        skipAction={() => nextCallback({ history, visibles, setVisibles })}
      />
    </Form>
  );
};

export default RegisterArtistTemplate;
