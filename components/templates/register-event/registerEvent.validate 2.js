export const validation = ({
  title,
  address,
  avatar,
  cover,
  country,
  state,
  city,
  number,
  district,
  description,
  openingsNumber,
  zipcode,
  closingSubscribeDate,
  eventDate,
  endEventDate
}) => {
  let validated = true;
  const errors = {};

  if (!title) {
    validated = false;
    errors.title = 'Informe o título da oportunidade.';
  }

  if (!address) {
    validated = false;
    errors.address = 'Informe o endereço da oportunidade.';
  }

  if (!openingsNumber) {
    validated = false;
    errors.openingsNumber = 'Informe o número de vagas para a oportunidade.';
  }

  if (!city) {
    validated = false;
    errors.city = 'Informe a cidade da oportunidade.';
  }

  if (!zipcode) {
    validated = false;
    errors.zipcode = 'Informe a CEP da oportunidade.';
  }

  if (!number) {
    validated = false;
    errors.number = 'Informe o número do local da oportunidade.';
  }

  if (!district) {
    validated = false;
    errors.district = 'Informe o bairro da oportunidade.';
  }

  if (!description) {
    validated = false;
    errors.description = 'Descreva sua oportunidade.';
  }

  if (!avatar.file) {
    validated = false;
    errors.avatar = 'Selecione uma foto de avatar.';
  }

  if (!cover.file) {
    validated = false;
    errors.cover = 'Selecione uma foto de capa.';
  }

  if (!country.short_name) {
    validated = false;
    errors.country = 'Selecione um país.';
  }

  if (!state.short_name) {
    validated = false;
    errors.state = 'Selecione um estado.';
  }

  const splitedClosingSubscribeDate = closingSubscribeDate.split('/');
  if (!closingSubscribeDate) {
    validated = false;
    errors.closingSubscribeDate = 'Informe a data de encerramento das incrições.';
  } else if (
    parseInt(splitedClosingSubscribeDate[0], 10) > 31 ||
    splitedClosingSubscribeDate[0].length !== 2 ||
    parseInt(splitedClosingSubscribeDate[1], 10) > 12 ||
    splitedClosingSubscribeDate[1].length !== 2 ||
    splitedClosingSubscribeDate[2].length !== 4
  ) {
    errors.closingSubscribeDate = 'Data inválida.';
  }

  const splitedEventDate = eventDate.split('/');
  if (!eventDate) {
    validated = false;
    errors.eventDate = 'Informe a data da oportunidade.';
  } else if (
    parseInt(splitedEventDate[0], 10) > 31 ||
    splitedEventDate[0].length !== 2 ||
    parseInt(splitedEventDate[1], 10) > 12 ||
    splitedEventDate[1].length !== 2 ||
    splitedEventDate[2].length !== 4
  ) {
    errors.eventDate = 'Data inválida.';
  }

  const splitedEndEventDate = endEventDate.split('/');
  if (endEventDate) {
    if (
      parseInt(splitedEndEventDate[0], 10) > 31 ||
      !splitedEndEventDate[0] ||
      splitedEndEventDate[0].length !== 2 ||
      parseInt(splitedEndEventDate[1], 10) > 12 ||
      !splitedEndEventDate[1] ||
      splitedEndEventDate[1].length !== 2 ||
      !splitedEndEventDate[2] ||
      splitedEndEventDate[2].length !== 4
    ) {
      errors.endEventDate = 'Data inválida.';
    }
  }

  return { valid: validated, errors };
};

export const ignore = null;
