import React, { useContext } from 'react';
import { purple } from '../../../settings/colors';
import Store from '../../../store/Store';
import StepFormHeader from '../../organisms/step-form-header/stepFormHeader';
import steps from './registerArtist.collections';
import {
  Form,
} from './registerArtist.style';

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
 * This contains the Home Page
 * @returns {React.Component} productor form
 */
const Home = () => {
  const { state } = useContext(Store);

  return (
    <Form autocomplete={false} onSubmit={e => e.preventDefault()}>
      <StepFormHeader color={purple} items={steps} index={0} />
      {
        renderBasicInfos({
          values, setAbout, setMusicalStyle, musicalStyles,
          setMusicalStylePredict, musicalStylesOptions, setMusicalStyles,
          setMusicalStylesOptions, setName, setAvatar, productorStepErrors,
          setProductorStepErrors, setCNPJ, setCPF,
        })
      }
      <StepFormHeader
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

export default Home;
