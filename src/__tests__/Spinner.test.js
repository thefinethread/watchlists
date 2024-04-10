import { render, screen } from '@testing-library/react';
import Spinner from '../components/Spinner';

describe('Spinner component', () => {
  test('should render Spinner element when component loads', () => {
    render(<Spinner />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
