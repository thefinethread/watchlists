import { render, screen } from '@testing-library/react';
import MOCK_MOVIES from '../mocks/mockMovies.json';
import MoviesList from '../components/MoviesList';
import AppContext from '../context/AppContext';
import { BrowserRouter } from 'react-router-dom';

describe('MoviesList component', () => {
  it('should rended the component with correct props', () => {
    // Mock functions
    const addMovieToWatchLists = jest.fn();
    const removeMovieFromWatchLists = jest.fn();

    render(
      <AppContext.Provider
        value={{
          addMovieToWatchLists,
          removeMovieFromWatchLists,
        }}
      >
        <BrowserRouter>
          <MoviesList movies={MOCK_MOVIES} isFromWatchLists={false} />
        </BrowserRouter>
      </AppContext.Provider>
    );

    const renderedMoviesCard = screen.getAllByTestId('movie-card');

    expect(renderedMoviesCard.length).toBe(10);
  });
});
