export const rowData = [
  {
    id: 1,
    data: [
      { label: 'Release Date', key: 'Released' },
      { label: 'Runtime', key: 'Runtime' },
    ],
  },
  {
    id: 2,
    data: [
      { label: 'Director', key: 'Director' },
      { label: 'Writer', key: 'Writer' },
    ],
  },
  { id: 3, data: [{ label: 'Casts', key: 'Actors' }] },
  { id: 4, data: [{ label: 'Languages', key: 'Language' }] },
];

export const API_BASE_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

export const PAGE_PER_COUNT = 10;

export const API_SUCCESS = 'True';

export const API_FAILURE = 'False';

export const GENERIC_ERR_MSG = 'Something went wrong!';

export const ADD_TO_WATCHLISTS = 'Add to watchlists';

export const REMOVE_FROM_WATCHLISTS = 'Remove from watchlists';
