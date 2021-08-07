import { client } from '../../../libs/apollo.lib';
import { createNewsLetter } from './homeNewsLetter.repository';
import { basicInformationIsValid } from './homeNewsLetter.validate';
import { getOneNewsLatterQuery } from './homeNewsLetter.queries';

const mapNewLatterToApi = (values) => ({
  email: values.email
});

export const handleCreateNewsLatter = async ({ values, setLoading, setEmail }) => {
  const newsLatter = { ...values };

  const data = mapNewLatterToApi(newsLatter);
  setLoading(true);

  let eventData;

  try {
    eventData = await client().query({
      query: getOneNewsLatterQuery,
      variables: { newsLatter }
    });
  } catch (err) {
    setLoading(false);
    throw err;
  }

  if (basicInformationIsValid(data, eventData)) {
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
