import { client } from '../../../libs/apollo.lib';
import {
  ALL_COMMUNITY_USERS_QUERY,
  ALL_HIGHLIGHTED_OPORTUNITIES_QUERY,
  ALL_NEWS_QUERY,
  LAST_OPORTUNITIES_TO_ARTIST,
  LAST_OPORTUNITIES_TO_PRODUTOR
} from './home.query';

/**
 * request to graph api all highlighted oportunities registered
 * @returns {Promise} promise if resolve, contains array of oportunities
 */
export const getAllHighlightedOportunities = () =>
  client().query({
    query: ALL_HIGHLIGHTED_OPORTUNITIES_QUERY
  });

/**
 * request to graph api all community users registered
 * @returns {Promise} promise if resolve, contains array of users
 */
export const getAllCommunityUsers = () =>
  client().query({
    query: ALL_COMMUNITY_USERS_QUERY
  });

/**
 * request to graph api all news registered
 * @returns {Promise} promise if resolve, contains array of news
 */
export const getAllNews = () =>
  client().query({
    query: ALL_NEWS_QUERY
  });

/**
 * request to graph api the last oportunities posted to artist
 * @returns {Promise} promise if resolve, contains array of oportunities
 */
export const getOportunitiesToArtist = () =>
  client().query({
    query: LAST_OPORTUNITIES_TO_ARTIST
  });

/**
 * request to graph api the last oportunities posted to productor
 * @returns {Promise} promise if resolve, contains array of oportunities
 */
export const getOportunitiesToProductor = () =>
  client().query({
    query: LAST_OPORTUNITIES_TO_PRODUTOR
  });
