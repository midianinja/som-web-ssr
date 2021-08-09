import { gql } from 'apollo-boost';

export const searchEventsQuery = gql`
query searchEvents($text: String){
  searchEvents(text: $text){
    id
    name
    event_date
    location {
      city
      state
    }
  }
}
`;