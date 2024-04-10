import { fireEvent, render, screen } from '@testing-library/react';
import AppContext from '../context/AppContext';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

const logout = jest.fn();
const mockNavigate = jest.fn();
const loggedInUser = 'test@gmail.com';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Header Component', () => {
  it('should load Link when component renders', () => {
    render(
      <AppContext.Provider value={{ loggedInUser, logout }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AppContext.Provider>
    );

    const link = screen.getByText('My Lists');

    expect(link).toBeInTheDocument();
  });

  it('should logout if user is logged in', () => {
    const logout = jest.fn();

    render(
      <AppContext.Provider value={{ loggedInUser, logout }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AppContext.Provider>
    );

    const logoutBtn = screen.getByRole('button', { name: 'Logout' });

    fireEvent.click(logoutBtn);

    expect(logout).toHaveBeenCalledTimes(1);
  });

  it('should navigate to /auth if user not logged in', () => {
    render(
      <AppContext.Provider value={{ loggedInUser: null }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AppContext.Provider>
    );

    const loginBtn = screen.getByRole('button', { name: 'Login' });

    fireEvent.click(loginBtn);

    expect(mockNavigate).toHaveBeenCalledWith('/auth');
  });

  it('should render active link with correct class', () => {
    render(
      <AppContext.Provider value={{ loggedInUser, logout }}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </AppContext.Provider>
    );

    const link = screen.getByTestId('mylist');

    fireEvent.click(link);

    expect(link).toHaveClass('underline underline-offset-2 text-orange-600');
  });
});
