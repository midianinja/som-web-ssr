export const basicInformationIsValid = ({ name, about, cpf, cnpj }, locationId) => {
  let validated = true;

  if (!name) validated = false;
  if (!about) validated = false;

  return validated;
};

export default basicInformationIsValid;
