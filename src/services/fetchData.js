import { toast } from 'react-toastify';
import {
  API_BASE_URL,
  API_FAILURE,
  API_SUCCESS,
  GENERIC_ERR_MSG,
} from '../constants/constants';

export const fetchMovies = async (queryText, page = 1) => {
  try {
    const res = await fetch(`${API_BASE_URL}&s=${queryText}&page=${page}`);

    const { Search, totalResults, Response, Error } = await res.json();

    if (Response === API_SUCCESS) {
      return { Search, totalResults };
    } else {
      toast.error(Error);
      return { Search: [], totalResults: 0 };
    }
  } catch (error) {
    toast.error(GENERIC_ERR_MSG);
  }
};

export const fetchMovie = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}&i=${id}`);

    const data = await res.json();

    if (data?.Response === API_FAILURE) toast.error(data?.Error);

    return data;
  } catch (error) {
    toast.error(GENERIC_ERR_MSG);
  }
};
