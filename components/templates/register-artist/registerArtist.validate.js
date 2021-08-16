export const basicInformationIsValid = ({
  name,
  about,
  contactEmail,
  zipcode,
  address,
  number,
  country,
  state,
  city
}) => {
  let validated = true;
  const errors = {};

  if (!name) {
    validated = false;
    errors.name = 'Informe o seu nome completo.';
  }

  if (!about) {
    validated = false;
    errors.about = 'Fale algo sobre você.';
  }

  if (!contactEmail) {
    validated = false;
    errors.contactEmail = 'Informe seu e-mail.';
  }

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

  console.log(errors + ' - ' + validated);
  return { valid: validated, errors };
};

export default basicInformationIsValid;
