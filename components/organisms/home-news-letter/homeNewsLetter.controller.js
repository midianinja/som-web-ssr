import { client } from '../../../libs/apollo.lib';
import { createNewsLetter } from './homeNewsLetter.repository';
import { basicInformationIsValid } from './homeNewsLetter.validate';
import { getOneNewsLatterQuery } from './homeNewsLetter.queries';

const mapNewLatterToApi = (values) => ({
  email: values.email
});

export const handleCreateNewsLatter = async ({ values, setLoading, setEmail, setDialog }) => {
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

  if (basicInformationIsValid(data, eventData.data.oneNewsLatter)) {
    try {
      await createNewsLetter(data);
    } catch (err) {
      setLoading(false);
      throw err;
    }
    setDialog({
      title: '',
      icon: '/icons/yeah.svg',
      description: 'Seu e-mail foi cadastrado com sucesso! Aguarde novidades :)',
      disagreeText: 'Fechar',
      disagreeAction: () => setDialog({})
    });
  } else {
    setDialog({
      title: '',
      description:
        'Opa, parece que você já cadastrou seu e-mail em nossa newsletter. Já pode aguardar por novidades.',
      disagreeText: 'Fechar',
      disagreeAction: () => setDialog({})
    });
  }

  setTimeout(() => {
    setLoading(false);
    setEmail('');
  }, 500);
};
