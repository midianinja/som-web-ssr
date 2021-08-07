export const basicInformationIsValid = ({ email, hasOne }) => {
  let validated = !email ? false : true;

  validated = hasOne ? false : true;

  return validated;
};

export default basicInformationIsValid;
