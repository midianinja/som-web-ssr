import React, { useContext } from 'react';
import Loading from '../../atoms/loading/loading';
import StepFormHeader from '../../organisms/step-form-header/stepFormHeader';
import StepFormFooter from '../../organisms/step-form-footer/stepFormFooter';
import Store from '../../../store/Store';
import { purple } from '../../../settings/colors';
import { steps } from './productor.collections';
import {
  fetchMusicalStyleOptions, handleACMusicalStyle, handleMusicalStyleSelect,
  deleteTag, handleCreateProductor, mapMusicalStyles, handleEditProductor,
  nextCallback, fetchLocations, handleCountrySelect, handleStateSelect,
} from './productor.controller';
import {
  LoadingWrapper, Form,
} from './productor.style';

/**
 * This contains a form edition to productor profile  
 * @returns {React.Component} productor form
 */
const Productor = () => {
  const { state } = useContext(Store);
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
  const [step] = useState(0);
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
    history.push('/register-artist');
  }

  useEffect(() => {
    if (state.connectionType === 'artist') {
      history.push('/register-artist');
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
    } else {
      fetchLocations({
        setCountries, setStates, setState, setCity,
        productor: {},
        setCountry,
      });
    }
  }, [state]);

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
      <StepFormFooter
        nextAction={() => {
          if (!id) {
            handleCreateProductor({
              values, userId: state.user.id, setLoading, visibles, history,
              setVisibles, setLocationId, dispatch, user: state.user, setId,
            });
          } else {
            handleEditProductor(
              values, id, state.user.id, setLoading,
              visibles, setVisibles, setLocationId, dispatch,
              state.user, history,
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

export default Productor;
