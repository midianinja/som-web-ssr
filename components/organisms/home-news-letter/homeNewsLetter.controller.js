import { createNewsLetter } from './homeNewsLetter.repository';

const mapNewLatterToApi = (values) => ({
  email: values.email
});

export const handleCreateNewsLatter = async ({ values, setLoading, setEmail }) => {
  const newsLatter = { ...values };

  const data = mapNewLatterToApi(newsLatter);
  setLoading(true);

  try {
    await createNewsLetter(data);
  } catch (err) {
    setLoading(false);
    throw err;
  }

  setTimeout(() => {
    setLoading(false);
    setEmail('');
  }, 500);
};
