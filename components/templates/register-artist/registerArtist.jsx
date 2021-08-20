import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { magenta, theBestColor, white } from '../../../settings/colors';
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
  handleStateSelect,
  makeBlob,
  addSong,
  deleteSong,
  makeDocUploads,
  mapMusicalStyles,
  handleCreateArtist,
  handleEditArtist,
  deleteTag,
  getAddressInformation
} from './registerArtist.controller';
import { Form, LoadingWrapper, ContentWrapper } from './registerArtist.style';
import SocialsFieldset from './components/social-fieldset/socialFieldset';
import DocFilesFieldset from './components/doc-files-fieldset/docFilesFieldset';
import MusicFieldset from './components/music-fieldset/musicFieldset';
import Loading from '../../atoms/loading/loading';

/**
 * getFooterBackground return the background color from footer
 *
 * @returns {String} color
 */
const getFooterBackground = (visibles) => {
  if (visibles.files && !visibles.musics) return theBestColor;
  if (visibles.musics) return white;
};

/**
 * render basic infos fields
 *
 * @returns {React.Component} React Component
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
  handleIntegrants,
  setUsername
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
    handleUsernameChange={({ target }) => setUsername(target.value)}
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
    musicalStylesOptions={musicalStylesOptions}
    values={values}
  />
);

/**
 * render location fields
 *
 * @returns {React.Component} React Component
 */
const renderLocationFieldset = ({
  values,
  visibles,
  setCity,
  setAddress,
  setNumber,
  setState,
  setCountry,
  productorStepErrors,
  setStates,
  countries,
  setZipcode,
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
      handleAddressChange={({ target }) => setAddress(target.value)}
      handleZipcodeChange={({ target }) => setZipcode(target.value)}
      handleNumberChange={({ target }) => setNumber(target.value)}
      handleCountrySelect={(data) => handleCountrySelect({ data, setStates, setCountry })}
      handleStateSelect={(data) => handleStateSelect({ data, setState })}
    />
  );
};

/**
 * render contact fields
 *
 * @returns {React.Component} React Component
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
 *
 * @returns {React.Component} React Component
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
 * render file fields
 *
 * @returns {React.Component} React Component
 */
const renderFilesDocs = ({
  visibles,
  tecRider,
  setTecRider,
  tecMap,
  setTecMap,
  tecRelease,
  setRelease
}) => {
  if (!visibles.files) return null;
  return (
    <DocFilesFieldset
      handleRiderChange={(file) =>
        setTecRider(
          file
            ? {
                file,
                blob: makeBlob(file),
                blob_url: URL.createObjectURL(makeBlob(file))
              }
            : null
        )
      }
      handleMapChange={(file) =>
        setTecMap(
          file
            ? {
                file,
                blob: makeBlob(file),
                blob_url: URL.createObjectURL(makeBlob(file))
              }
            : null
        )
      }
      handleReleaseChange={(file) =>
        setRelease(
          file
            ? {
                file,
                blob: makeBlob(file),
                blob_url: URL.createObjectURL(makeBlob(file))
              }
            : null
        )
      }
      tecRider={tecRider}
      tecMap={tecMap}
      tecRelease={tecRelease}
    />
  );
};

/**
 * render song fields
 *
 * @returns {React.Component} React Component
 */
const renderMusics = ({ visibles, setSongs, songs, setSubmitDisabled }) => {
  if (!visibles.musics) return null;
  return (
    <MusicFieldset
      songs={songs}
      addSong={(data) => addSong(data, songs, setSongs)}
      deleteSong={(data) => deleteSong(data, songs, setSongs)}
      setSubmitDisabled={setSubmitDisabled}
    />
  );
};

/**
 * This contains the RegisterArtistTemplate Page
 * @returns {React.Component} React Component
 */
const RegisterArtistTemplate = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  console.log('🚀 ~ state', state);
  const [about, setAbout] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
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
  const [number, setNumber] = useState('');
  const [locationState, setState] = useState({});
  const [states, setStates] = useState([]);
  const [telegram, setTelegram] = useState('');
  const [username, setUsername] = useState('');
  const [twitter, setTwitter] = useState('https://twitter.com/');
  const [whatsapp, setWhatsapp] = useState('');
  const [youtube, setYoutube] = useState('https://www.youtube.com/');
  const [tecRider, setTecRider] = useState(null);
  const [tecMap, setTecMap] = useState(null);
  const [tecRelease, setRelease] = useState(null);
  const [songs, setSongs] = useState([]);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [productorStepErrors, setProductorStepErrors] = useState({});
  const [visibles, setVisibles] = useState({
    location: false,
    contact: false,
    socials: false,
    files: false,
    musics: false
  });

  const mapContextToState = (artist) => {
    setId(artist.id || '');
    setName(artist.name || '');
    setAbout(artist.about || '');
    setUsername(artist.username || '');
    setAvatar({ url: artist.avatar_image.mimified || '' });
    setMusicalStyles(mapMusicalStyles(artist.musical_styles || []));
    handleIntegrants(artist.integrants.join(', '));
    setMainPhone(artist.phone || '');
    setWhatsapp(artist.whatsapp || '');
    setTelegram(artist.telegram || '');
    setContactEmail(artist.email || '');
    setFacebook(artist.facebook || 'https://www.facebook.com/');
    setInstagram(artist.instagram || 'https://www.instagram.com/');
    setTwitter(artist.twitter || 'https://twitter.com/');
    setYoutube(artist.youtube || 'https://www.youtube.com/');
    setTecRider({ url: artist.tec_rider });
    setTecMap({ url: artist.stage_map });
    setRelease({ url: artist.tec_release });

    if (artist.location && artist.location.id && countries.length) {
      const selectedCountry = countries.find((c) => c.short_name === artist.location.country);
      if (!country.id) handleCountrySelect({ data: selectedCountry, setStates, setCountry });
      if (!city) setCity(artist.location.city);
      setAddress(artist.location.address);
      setNumber(artist.location.number);
      setZipcode(artist.location.zipcode);
      setState(states.find((c) => c.short_name === artist.location.state));
    }
    if (artist.songs && artist.songs.length) {
      setSongs(
        artist.songs.map((s) => ({
          name: s.title,
          url: s.url,
          id: s.id
        }))
      );
    }
  };

  useEffect(() => {
    if (state.connectionType === 'productor') {
      router.push('/producer');
    }
  }, [state.connectionType]);

  useEffect(() => {
    if (state.user && state.user.artist) {
      mapContextToState(state.user.artist);
    }
    fetchMusicalStyleOptions(setMusicalStylesOptions);
  }, []);

  useEffect(() => {
    makeDocUploads({
      tecRider,
      setTecRider,
      state,
      tecMap,
      setTecMap,
      tecRelease,
      setRelease
    });
  }, [tecRider, tecMap, tecRelease]);

  useEffect(() => {
    if (state.user && state.user.artist) {
      const { artist } = state.user;
      mapContextToState(artist);
    }
    if (!countries.length) {
      fetchLocations({
        setCountries,
        setStates,
        setState,
        setCity,
        setCountry
      });
    }
  }, [state.user, countries, states]);

  useEffect(() => {
    if (!state.loading.verify && !state.user) {
      router.push('/');
    }
  }, [state.loading]);

  useEffect(() => {
    if (/[0-9]{8}/.test(zipcode)) {
      getAddressInformation(zipcode, setAddress, setNumber, setCity, setState, setCountry);
    }
  }, [zipcode]);

  const values = {
    avatar,
    name,
    integrants,
    id,
    about,
    musicalStyles,
    musicalStylePredict,
    username,
    musicalStyle,
    country,
    state: locationState,
    city,
    mainPhone,
    whatsapp,
    telegram,
    contactEmail,
    tecRider,
    tecMap,
    tecRelease,
    facebook,
    youtube,
    twitter,
    instagram,
    songs,
    address,
    number,
    zipcode
  };

  if (!state.user) {
    return (
      <LoadingWrapper>
        <Loading />
      </LoadingWrapper>
    );
  }

  return (
    <Form autocomplete={false} onSubmit={(e) => e.preventDefault()}>
      <StepFormHeader color={magenta} items={steps} index={'0'} />
      <ContentWrapper>
        {renderBasicInfos({
          values,
          setAbout,
          setMusicalStyle,
          setUsername,
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
          setAddress,
          setZipcode,
          setNumber,
          countries,
          states,
          productorStepErrors,
          setStates
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
          visibles,
          tecRider,
          setTecRider,
          tecMap,
          setTecMap,
          tecRelease,
          setRelease
        })}
        {renderMusics({
          visibles,
          setSongs,
          songs,
          setSubmitDisabled
        })}
      </ContentWrapper>
      <StepFormFooter
        nextAction={() => {
          if (!id) {
            handleCreateArtist({
              values,
              setLoading,
              visibles,
              history,
              setVisibles,
              dispatch,
              user: state.user,
              setErrors: setProductorStepErrors,
              setId,
              userId: state.user.id
            });
          } else {
            handleEditArtist({
              values,
              setLoading,
              visibles,
              setVisibles,
              dispatch,
              user: state.user,
              setErrors: setProductorStepErrors,
              router,
              userId: state.user.id,
            });
          }
        }}
        dark={visibles.musics || visibles.files}
        formType="artist"
        customStyle={`background-color: ${getFooterBackground(visibles)}`}
        loading={loading.show || submitDisabled}
        disabled={submitDisabled}
        loadingText={loading.text}
        lastStep={visibles.musics}
        skipAction={() => nextCallback({ history, visibles, setVisibles })}
      />
    </Form>
  );
};

export default RegisterArtistTemplate;
