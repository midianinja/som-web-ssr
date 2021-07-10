import * as repository from './home.repository';

/**
 *
 * @param {*} param0
 */
const getAllCommunityUsers = async ({ setLoading, setCommunityUsers }) => {
  const response = await repository.getAllCommunityUsers();
  setCommunityUsers(response.data.allCommunityUsers);
  setLoading(false);
};

/**
 *
 * @param {*} param0
 */
export const getAllHighlightedOportunities = async ({ setLoading, setHighlightedOportunities }) => {
  const response = await repository.getAllHighlightedOportunities();

  setHighlightedOportunities(response.data.allHighlightedOportunities);
  setLoading(false);
};

/**
 *
 * @param {*} param0
 */
const getOportunitiesToArtist = async ({ setLoading, setArtistOportunities }) => {
  const response = await repository.getOportunitiesToArtist();
  setArtistOportunities(response.data.allEventToArtist);
  setLoading(false);
};

/**
 *
 * @param {*} param0
 */
const getOportunitiesToProductor = async ({ setLoading, setProductorOportunities }) => {
  const response = await repository.getOportunitiesToProductor();
  setProductorOportunities(response.data.allEventToProductor);
  setLoading(false);
};

/**
 *
 * @param {*} param0
 */
const getLastestOpportunities = async ({ setLoading, setLatestOpportunities }) => {
  const response = await repository.getLastestOpportunities();
  setLatestOpportunities(response.data.allEvents);
  setLoading(false);
};

/**
 *
 * @param {*} param0
 */
export const getNews = async ({ setLoading, setNews }) => {
  const response = await repository.getAllNews();
  setNews(response.data.allNews);
  setLoading(false);
};

/**
 *
 * @param {*} param0
 */
export const init = ({
  setHighlightedOportunitiesLoading,
  setCommunityUsersLoading,
  setNewsLoading,
  setCommunityUsers,
  setHighlightedOportunities,
  setNews,
  setProductorOportunitiesLoading,
  setArtistOportunitiesLoading,
  setProductorOportunities,
  setArtistOportunities,
  setLatestOpportunitiesLoading,
  setLatestOpportunities
}) => {
  getLastestOpportunities({ setLoading: setLatestOpportunitiesLoading, setLatestOpportunities });
  getAllCommunityUsers({ setLoading: setHighlightedOportunitiesLoading, setCommunityUsers });
  getAllHighlightedOportunities({
    setLoading: setCommunityUsersLoading,
    setHighlightedOportunities
  });
  getNews({ setLoading: setNewsLoading, setNews });
  getOportunitiesToProductor({
    setLoading: setProductorOportunitiesLoading,
    setProductorOportunities
  });
  getOportunitiesToArtist({ setLoading: setArtistOportunitiesLoading, setArtistOportunities });
};
