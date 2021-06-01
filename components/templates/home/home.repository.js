import { client } from '../../../libs/apollo.lib';
import {
  ALL_COMMUNITY_USERS_QUERY,
  ALL_HIGHLIGHTED_OPORTUNITIES_QUERY,
  ALL_NEWS_QUERY
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
