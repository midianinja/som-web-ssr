import { client } from '../../../libs/apollo.lib';
import { searchEventsQuery } from './search.query';

export const fetchEvents = async (event, setEvent) => {
    if (!event.id) return;
  
    const events = await client().query({
      query: searchEventsQuery,
      variables: {
        text
      },
    });

    console.log(events.data.searchEventsQuery);
    setEvent(events.data.searchEventsQuery);
  };