export const basicInformationIsValid = ({ email }, resp) => {
  let validated = !email ? false : true;

  validated = resp ? false : true;

  return validated;
};

export default basicInformationIsValid;
