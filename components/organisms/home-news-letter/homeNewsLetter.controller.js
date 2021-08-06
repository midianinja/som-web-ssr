import { createNewsLetter } from './homeNewsLetter.repository';
import { basicInformationIsValid } from './homeNewsLetter.validate';

const mapNewLatterToApi = (values) => ({
  email: values.email
});

export const handleCreateNewsLatter = async ({ values, setLoading, setEmail }) => {
  const newsLatter = { ...values };

  const data = mapNewLatterToApi(newsLatter);
  setLoading(true);

  if (basicInformationIsValid(data)) {
    try {
      await createNewsLetter(data);
    } catch (err) {
      setLoading(false);
      throw err;
    }
  } else {
    console.log('Não validou');
  }

  setTimeout(() => {
    setLoading(false);
    setEmail('');
  }, 500);
};
