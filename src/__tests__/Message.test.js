import { render, screen } from '@testing-library/react';
import Message from '../components/Message';

describe('Message component', () => {
  it('should render Message component', () => {
    render(<Message msg='No watchlists added' />);

    expect(screen.getByText('No watchlists added')).toBeInTheDocument();
  });
});
