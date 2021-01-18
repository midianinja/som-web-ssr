import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../../atoms/input/input';
import InputGroup from '../../../../molecules/input-group/inputGroup';
import {
  Fieldset, Title, InputsWrapper, inputGroupStyle,
} from './socialFieldset.style';

const SocialsFieldset = ({
  handleFacebookChange, handleTwitterChange, handleInstagramChange, handleYoutubeChange,
  values, stepErrors,
}) => (
  <Fieldset>
    <Title>Redes sociais</Title>
    <InputsWrapper>
      <InputGroup
        customStyle={inputGroupStyle}
        label={values.facebook ? 'Facebook url' : ''}
        info="O link deve conter https://"
        error={stepErrors.facebook}
      >
        <Input
          id="facebook"
          placeholder="Facebook"
          value={values.facebook}
          type="url"
          onChange={handleFacebookChange}
        />
      </InputGroup>
      <InputGroup
        customStyle={inputGroupStyle}
        label={values.instagram ? 'Instagram url' : ''}
        info="O link deve conter https://"
        error={stepErrors.instagram}
      >
        <Input
          id="instagram"
          placeholder="Instagram"
          value={values.instagram}
          type="url"
          onChange={handleInstagramChange}
        />
      </InputGroup>
    </InputsWrapper>
    <InputsWrapper>
      <InputGroup
        customStyle={inputGroupStyle}
        label={values.twitter ? 'Twitter url' : ''}
        info="O link deve conter https://"
        error={stepErrors.twitter}
      >
        <Input
          id="twitter"
          placeholder="Twitter"
          value={values.twitter}
          type="url"
          onChange={handleTwitterChange}
        />
      </InputGroup>
      <InputGroup
        customStyle={inputGroupStyle}
        label={values.youtube ? 'Youtube url' : ''}
        info="O link deve conter https://"
        error={stepErrors.youtube}
      >
        <Input
          id="youtube"
          placeholder="Youtube"
          value={values.youtube}
          type="url"
          onChange={handleYoutubeChange}
        />
      </InputGroup>
    </InputsWrapper>
  </Fieldset>
);

const valuesShape = {
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
};

SocialsFieldset.propTypes = {
  handleFacebookChange: PropTypes.func.isRequired,
  handleInstagramChange: PropTypes.func.isRequired,
  handleTwitterChange: PropTypes.func.isRequired,
  handleYoutubeChange: PropTypes.func.isRequired,
  stepErrors: PropTypes.shape(valuesShape).isRequired,
  values: PropTypes.shape(valuesShape).isRequired,
};

export default SocialsFieldset;
