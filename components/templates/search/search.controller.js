import { client } from '../../../libs/apollo.lib';
import { searchEventsQuery } from './search.query';

export const fetchEventsFromSearch = async (text) => {
  console.log(text);
  if (!text.length) return;

  const events = await client().query({
    query: searchEventsQuery,
    variables: {
      text
    }
  });

  console.log(events.data.searchEventsQuery);
};
