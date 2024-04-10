import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Auth from '../components/Auth';
import { BrowserRouter } from 'react-router-dom';
import AppContext, { AppContextProvider } from '../context/AppContext';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('unit test for Auth component', () => {
  it('should render Auth component with button', () => {
    render(
      <AppContextProvider>
        <BrowserRouter>
          <Auth />
        </BrowserRouter>
      </AppContextProvider>
    );

    expect(
      screen.getByRole('button', { name: 'Continue' })
    ).toBeInTheDocument();
  });

  test('should submit form correctly', async () => {
    const handleUserAuthentication = jest.fn();

    render(
      <AppContext.Provider value={{ handleUserAuthentication }}>
        <BrowserRouter>
          <Auth />
        </BrowserRouter>
      </AppContext.Provider>
    );

    const emailInput = screen.getByPlaceholderText('abc@gmail.com');
    const continueBtn = screen.getByText('Continue');

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
    fireEvent.click(continueBtn);

    // Check if handleUserAuthentication is called with the correct email
    await waitFor(() => {
      expect(handleUserAuthentication).toHaveBeenCalledTimes(1);
      expect(handleUserAuthentication).toHaveBeenCalledWith('test@gmail.com');
    });
  });

  it('should navigate to / if loggedInUser', () => {
    const loggedInUser = 'test@example.com';

    render(
      <AppContext.Provider value={{ loggedInUser }}>
        <BrowserRouter>
          <Auth />
        </BrowserRouter>
      </AppContext.Provider>
    );

    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
