import { render, screen } from '@testing-library/react';
import Shimmer from '../components/Shimmer';

describe('Shimmer component', () => {
  test('should render shimmer element when component loads', () => {
    render(<Shimmer />);

    expect(screen.getByTestId('shimmer')).toBeInTheDocument();
  });
});
