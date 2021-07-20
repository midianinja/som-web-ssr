import { gql } from 'apollo-boost';

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

export const getOneEventQuery = gql`
  query oneEvent($id: ID!) {
    oneEvent(id: $id) {
      id
      name
      about
      event_date
      end_event_date
      subscribe_closing_date
      stream_url
      has_food
      has_money_paid
      has_accommodation
      has_city_transportation
      has_local_transportation
      is_to_productor
      is_to_artist
      is_online
      is_physical
      is_on_som
      oportunities
      approved_productors {
        id
        name
        photo
        description
      }
      reproved_productors {
        id
        name
        photo
        description
      }
      subscribed_productors {
        id
        name
        photo
        description
      }
      location {
        id
        number
        address
        district
        city
        state
        complement
        zipcode
      }
      subscribers {
        id
        avatar_image {
          mimified
          thumbnail
          original
        }
        name
      }
      approved_artists {
        id
        avatar_image {
          mimified
          thumbnail
          original
        }
        name
      }
      reproved_artists {
        id
        avatar_image {
          mimified
          thumbnail
        }
        name
      }
      subscribe_closing_date
      cover {
        thumbnail
        mimified
      }
      photo {
        thumbnail
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
