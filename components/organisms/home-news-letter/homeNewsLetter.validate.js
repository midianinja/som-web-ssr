export const basicInformationIsValid = ({ email }) => {
  let validated = true;

  if (!email) validated = false;

  return validated;
};

export default basicInformationIsValid;
