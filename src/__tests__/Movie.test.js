import React from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import Movie from '../components/Movie';
import { useParams } from 'react-router-dom';
import AppContext, { AppContextProvider } from '../context/AppContext'; // Mocked AppContextProvider
import { act } from 'react-dom/test-utils';
import MOCK_MOVIE from '../mocks/mockMovie.json';
import NoImage from '../assets/images/no-image.png';
import { fetchMovie } from '../services/fetchData';
import {
  ADD_TO_WATCHLISTS,
  REMOVE_FROM_WATCHLISTS,
} from '../constants/constants';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('../services/fetchData', () => ({
  fetchMovie: jest.fn(),
}));

const addMovieToWatchLists = jest.fn();
const removeMovieFromWatchLists = jest.fn();

describe('Movie Component', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ id: MOCK_MOVIE.imdbID });
  });

  test('renders spinner while loading', async () => {
    render(
      <AppContextProvider>
        <Movie />
      </AppContextProvider>
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId('spinner')).toBeNull();
    });
  });

  test('should render error message when api response is failure', async () => {
    const watchLists = [{ imdbID: MOCK_MOVIE.imdbID }];

    fetchMovie.mockReturnValue({
      Response: 'False',
      Error: 'Error while fetching',
    });

    await act(async () =>
      render(
        <AppContext.Provider
          value={{
            addMovieToWatchLists,
            removeMovieFromWatchLists,
            watchLists,
          }}
        >
          <Movie />
        </AppContext.Provider>
      )
    );

    expect(screen.getByText('Error while fetching')).toBeInTheDocument();
  });

  test('should render movie data correctly when api succeed', async () => {
    fetchMovie.mockReturnValue(MOCK_MOVIE);

    const watchLists = [{ imdbID: MOCK_MOVIE.imdbID }];

    await act(async () =>
      render(
        <AppContext.Provider
          value={{
            addMovieToWatchLists,
            removeMovieFromWatchLists,
            watchLists,
          }}
        >
          <Movie />
        </AppContext.Provider>
      )
    );

    expect(screen.getByText(MOCK_MOVIE.Title)).toBeInTheDocument();
  });

  test('should call the method addMovieToWatchLists when clicked on Add to Watchlists button', async () => {
    fetchMovie.mockReturnValue(MOCK_MOVIE);

    const watchLists = [];

    await act(async () =>
      render(
        <AppContext.Provider
          value={{
            addMovieToWatchLists,
            removeMovieFromWatchLists,
            watchLists,
          }}
        >
          <Movie />
        </AppContext.Provider>
      )
    );

    const addBtn = screen.getByText(ADD_TO_WATCHLISTS);
    fireEvent.click(addBtn);

    const { imdbID, Title, Year, Poster } = MOCK_MOVIE;
    expect(addMovieToWatchLists).toHaveBeenCalledWith({
      imdbID,
      Title,
      Year,
      Poster,
    });
  });

  test('should call the method removeMoviesFromWatchlist when clicked on Remove from Watchlists button', async () => {
    fetchMovie.mockReturnValue(MOCK_MOVIE);

    const watchLists = [{ imdbID: MOCK_MOVIE.imdbID }];

    await act(async () =>
      render(
        <AppContext.Provider
          value={{
            addMovieToWatchLists,
            removeMovieFromWatchLists,
            watchLists,
          }}
        >
          <Movie />
        </AppContext.Provider>
      )
    );

    const removeBtn = screen.getByText(REMOVE_FROM_WATCHLISTS);
    fireEvent.click(removeBtn);

    expect(removeMovieFromWatchLists).toHaveBeenCalledWith(MOCK_MOVIE.imdbID);
  });

  test('should render no image when image is not present in movie response', async () => {
    fetchMovie.mockReturnValue({ ...MOCK_MOVIE, Poster: 'N/A' });

    await act(async () =>
      render(
        <AppContext.Provider
          value={{
            addMovieToWatchLists,
            removeMovieFromWatchLists,
            watchLists: [],
          }}
        >
          <Movie />
        </AppContext.Provider>
      )
    );

    const movieImage = screen.getByAltText(MOCK_MOVIE.Title);

    expect(movieImage).toHaveAttribute('src', NoImage);
  });
});
