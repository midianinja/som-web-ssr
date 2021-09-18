export const basicInformationIsValid = ({ name, username, about, occupations }) => {
  let validated = true;
  const errors = {};

  if (!name) {
    validated = false;
    errors.name = 'Informe o seu nome completo.';
  }

  if (!username) {
    validated = false;
    errors.username = 'Informe o seu nome de usuário.';
  }

  if (!occupations.length) {
    validated = false;
    errors.occupations = 'Selecione pelo menos uma área de atuação.';
  }

  if (!about) {
    validated = false;
    errors.about = 'Fale algo sobre você.';
  }

  return { valid: validated, errors };
};

export const contactInformationValid = ({ contactEmail }) => {
  let validated = true;
  const errors = {};

  if (!contactEmail) {
    validated = false;
    errors.contactEmail = 'Informe seu e-mail.';
  }

  return { valid: validated, errors };
};

export const locationInformationValid = ({ zipcode, address, number, country, state, city }) => {
  let validated = true;
  const errors = {};

  if (!zipcode) {
    validated = false;
    errors.zipcode = 'Informe seu CEP.';
  }

  if (!address) {
    validated = false;
    errors.address = 'Informe seu endereço.';
  }

  if (!number) {
    validated = false;
    errors.number = 'Informe o número de seu endereço.';
  }

  if (!country) {
    validated = false;
    errors.country = 'Informe seu país.';
  }

  if (!state) {
    validated = false;
    errors.state = 'Informe seu estado.';
  }

  if (!city) {
    validated = false;
    errors.city = 'Informe sua cidade.';
  }

  return { valid: validated, errors };
};

export default { basicInformationIsValid, contactInformationValid, locationInformationValid };
