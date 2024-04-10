import { fireEvent, render, screen } from '@testing-library/react';
import AppContext from '../context/AppContext';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const addMovieToWatchLists = jest.fn();
const removeMovieFromWatchLists = jest.fn();

const MOCK_MOVIE = {
  imdbID: 1,
  Title: 'test-movie',
  Year: 2024,
  Poster: 'https://test.poster.com',
};

describe('MovieCard Component', () => {
  it('should render movie card with correct props', () => {
    render(
      <AppContext.Provider
        value={{ addMovieToWatchLists, removeMovieFromWatchLists }}
      >
        <BrowserRouter>
          <MovieCard {...MOCK_MOVIE} isFromWatchLists={false} />
        </BrowserRouter>
      </AppContext.Provider>
    );

    expect(screen.getByText('test-movie')).toBeInTheDocument();
  });

  it('should add movies to watchlists when clicked on + button', () => {
    const addMovieToWatchLists = jest.fn();

    render(
      <AppContext.Provider
        value={{ addMovieToWatchLists, removeMovieFromWatchLists }}
      >
        <BrowserRouter>
          <MovieCard {...MOCK_MOVIE} />
        </BrowserRouter>
      </AppContext.Provider>
    );

    const addBtn = screen.getByRole('button');

    fireEvent.click(addBtn);

    expect(addMovieToWatchLists).toHaveBeenCalledWith({
      imdbID: 1,
      Title: 'test-movie',
      Year: 2024,
      Poster: 'https://test.poster.com',
    });
  });

  it('should remove movie from watchlists', () => {
    const removeMovieFromWatchLists = jest.fn();

    render(
      <AppContext.Provider
        value={{ addMovieToWatchLists, removeMovieFromWatchLists }}
      >
        <BrowserRouter>
          <MovieCard {...MOCK_MOVIE} isFromWatchLists={true} />
        </BrowserRouter>
      </AppContext.Provider>
    );

    const removeBtn = screen.getByRole('button');

    fireEvent.click(removeBtn);

    expect(removeMovieFromWatchLists).toHaveBeenCalledWith(MOCK_MOVIE.imdbID);
  });
});
