import { gql } from 'apollo-boost';
import authSchemaUtil from '../../utils/authSchema.util';

export const loginQuery = gql`query makeLogin(
  $firebase_id: String
) {
  makeLogin(firebase_id: $firebase_id) {
    ${authSchemaUtil}
  }
}
`;

export const findConfigurationQuery = gql`
  query ($type: String!){
    configuration(type: $type) {
      _id
      type
      data
    }
  }
`;

export const searchSneakers = gql`
query
  searchInAds(
    $key_world: String
    $paginator: Paginator
    $ad_filter: JSON
    $ad_sort: JSON
  ) {
    searchInAds(
      key_world: $key_world
      paginator: $paginator
      ad_filter: $ad_filter
      ad_sort: $ad_sort
    ) {
      _id
      title
      image_urls
      images
      sku
      min_price
    }
  }
`;
export const allContriesQuery = gql`
  query {
    allCountries {
      name
      code
      _id
    }
  }
`;
