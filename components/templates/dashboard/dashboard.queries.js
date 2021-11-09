import { gql } from 'apollo-boost';

export const getAllOpportunitiesQuery = gql`
  query allEvents($event: EventInput, $paginator: PaginatorInput) {
    allEvents(event: $event, paginator: $paginator) {
      id
      name
      about
      event_date
      has_food
      has_money_paid
      subscribe_closing_date
      end_event_date
      has_accommodation
      has_city_transportation
      has_local_transportation
      location {
        number
        address
        district
        city
        state
      }
      subscribers {
        id
        avatar_image {
          mimified
          thumbnail
        }
        name
      }
      approved_artists {
        id
      }
      cover {
        mimified
      }
      photo {
        mimified
      }
      productor {
        id
        photo
        name
        description
        followers {
          id
        }
        following {
          id
        }
        location {
          city
          state
        }
      }
    }
  }
`;

export const allCountriesQuery = gql`
  query allCountries($country: CountryInput) {
    allCountries(country: $country) {
      name
      id
      short_name
      shortName
      pattern
      pattern_name
    }
  }
`;

export const allCitiesQuery = gql`
  query allCities($city: CityInput) {
    allCities(city: $city) {
      name
      id
    }
  }
`;

export const allStateQuery = gql`
  query allStates($state: StateInput) {
    allStates(state: $state) {
      name
      id
      short_name
    }
  }
`;

export const getArtistQuery = gql`
  query oneArtist($id: ID) {
    oneArtist(id: $id) {
      approved_events {
        id
        name
        about
        event_date
        has_food
        has_money_paid
        subscribe_closing_date
        end_event_date
        has_accommodation
        has_city_transportation
        has_local_transportation
        location {
          number
          address
          district
          city
          state
        }
        subscribers {
          id
          avatar_image {
            mimified
            thumbnail
          }
          name
        }
        approved_artists {
          id
        }
        cover {
          mimified
        }
        photo {
          mimified
        }
        productor {
          id
          photo
          name
          description
          followers {
            id
          }
          following {
            id
          }
          location {
            city
            state
          }
        }
      }
      subscribed_events {
        id
        name
        about
        event_date
        has_food
        has_money_paid
        subscribe_closing_date
        end_event_date
        has_accommodation
        has_city_transportation
        has_local_transportation
        location {
          number
          address
          district
          city
          state
        }
        subscribers {
          id
          avatar_image {
            mimified
            thumbnail
          }
          name
        }
        approved_artists {
          id
        }
        cover {
          mimified
        }
        photo {
          mimified
        }
        productor {
          id
          photo
          name
          description
          followers {
            id
          }
          following {
            id
          }
          location {
            city
            state
          }
        }
      }
      recused_events {
        id
        name
        about
        event_date
        has_food
        has_money_paid
        subscribe_closing_date
        end_event_date
        has_accommodation
        has_city_transportation
        has_local_transportation
        location {
          number
          address
          district
          city
          state
        }
        subscribers {
          id
          avatar_image {
            mimified
            thumbnail
          }
          name
        }
        approved_artists {
          id
        }
        cover {
          mimified
        }
        photo {
          mimified
        }
        productor {
          id
          photo
          name
          description
          followers {
            id
          }
          following {
            id
          }
          location {
            city
            state
          }
        }
      }
    }
  }
`;

export const getProducerQuery = gql`
  query oneProductor($id: ID) {
    oneProductor(id: $id) {
      approved_opportunities {
        id
        name
        about
        event_date
        has_food
        has_money_paid
        subscribe_closing_date
        end_event_date
        has_accommodation
        has_city_transportation
        has_local_transportation
        location {
          number
          address
          district
          city
          state
        }
        subscribers {
          id
          avatar_image {
            mimified
            thumbnail
          }
          name
        }
        approved_artists {
          id
        }
        cover {
          mimified
        }
        photo {
          mimified
        }
        productor {
          id
          photo
          name
          description
          followers {
            id
          }
          following {
            id
          }
          location {
            city
            state
          }
        }
      }
      subscribed_opportunities {
        id
        name
        about
        event_date
        has_food
        has_money_paid
        subscribe_closing_date
        end_event_date
        has_accommodation
        has_city_transportation
        has_local_transportation
        location {
          number
          address
          district
          city
          state
        }
        subscribers {
          id
          avatar_image {
            mimified
            thumbnail
          }
          name
        }
        approved_artists {
          id
        }
        cover {
          mimified
        }
        photo {
          mimified
        }
        productor {
          id
          photo
          name
          description
          followers {
            id
          }
          following {
            id
          }
          location {
            city
            state
          }
        }
      }
      refused_opportunities {
        id
        name
        about
        event_date
        has_food
        has_money_paid
        subscribe_closing_date
        end_event_date
        has_accommodation
        has_city_transportation
        has_local_transportation
        location {
          number
          address
          district
          city
          state
        }
        subscribers {
          id
          avatar_image {
            mimified
            thumbnail
          }
          name
        }
        approved_artists {
          id
        }
        cover {
          mimified
        }
        photo {
          mimified
        }
        productor {
          id
          photo
          name
          description
          followers {
            id
          }
          following {
            id
          }
          location {
            city
            state
          }
        }
      }
    }
  }
`;

export const getAssociatedEvents = '';
