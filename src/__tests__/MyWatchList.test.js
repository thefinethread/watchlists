import { render, screen } from '@testing-library/react';
import MyWatchList from '../components/MyWatchList';
import AppContext from '../context/AppContext';
import MOCK_MOVIES from '../mocks/mockMovies.json';
import { BrowserRouter, Link } from 'react-router-dom';

describe('MyWatchList component', () => {
  test('should display login message when loggedInUser is null', () => {
    render(
      <AppContext.Provider
        value={{
          watchLists: [],
          loggedInUser: null,
        }}
      >
        <MyWatchList />
      </AppContext.Provider>
    );

    expect(
      screen.getByText('Please login to see your wishlists!')
    ).toBeInTheDocument();
  });

  test('should display no movies added to watchlists message when wathlists is empty', () => {
    render(
      <AppContext.Provider
        value={{
          watchLists: [],
          loggedInUser: 'test@gmail.com',
        }}
      >
        <MyWatchList />
      </AppContext.Provider>
    );

    expect(screen.getByText('No watchlists added yet.')).toBeInTheDocument();
  });

  test('should display movies when wathlists have movies', () => {
    render(
      <AppContext.Provider
        value={{
          watchLists: MOCK_MOVIES,
          loggedInUser: 'test@gmail.com',
        }}
      >
        <BrowserRouter>
          <MyWatchList />
        </BrowserRouter>
      </AppContext.Provider>
    );

    expect(screen.getAllByTestId('movie-card').length).toBe(10);
  });
});
