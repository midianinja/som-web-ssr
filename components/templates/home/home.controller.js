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
  setArtistOportunities(response.data.allEventsToArtist);
  setLoading(false);
};

/**
 *
 * @param {*} param0
 */
const getOportunitiesToProductor = async ({ setLoading, setProductorOportunities }) => {
  const response = await repository.getOportunitiesToProductor();
  setProductorOportunities(response.data.allEventsToProductor);
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
  setArtistOportunities
}) => {
  // getAllCommunityUsers({ setLoading: setHighlightedOportunitiesLoading, setCommunityUsers });
  // getAllHighlightedOportunities({
  //   setLoading: setCommunityUsersLoading,
  //   setHighlightedOportunities
  // });
  getNews({ setLoading: setNewsLoading, setNews });
  // getOportunitiesToArtist({
  //   setLoading: setProductorOportunitiesLoading,
  //   setProductorOportunities
  // });
  // getOportunitiesToProductor({ setLoading: setArtistOportunitiesLoading, setArtistOportunities });
};
