export const basicInformationIsValid = (
  { name, about, cpf, cnpj, contactEmail, zipcode, address, number, country, state, city },
  locationId
) => {
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

  if (!cpf || !cnpj) {
    validated = false;
    errors.cpf = 'Informe seu CPF.';
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

  zipcode;
  if (!locationId) validated = false;

  console.log(errors);
  return { valid: validated, errors };
};

export default basicInformationIsValid;
