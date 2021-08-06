import { getOneNewsLatter } from './homeNewsLetter.repository';

const mapNewLatterToApi = (values) => ({
  email: values
});

export const basicInformationIsValid = ({ email }) => {
  let validated = !email ? false : true;

  const data = mapNewLatterToApi(email);

  validated = getOneNewsLatter(data) ? false : true;

  return validated;
};

export default basicInformationIsValid;
