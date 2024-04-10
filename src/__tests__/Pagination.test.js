import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Pagination from '../components/Pagination';

describe('Pagination component', () => {
  const totalResults = 20;
  const currentPage = 1;
  const handlePaginate = jest.fn();

  it('should render pagination buttons correctly', () => {
    render(
      <Pagination
        totalResults={totalResults}
        currentPage={currentPage}
        handlePaginate={handlePaginate}
      />
    );

    const paginationButtons = screen.getAllByTestId('pagination-button');
    expect(paginationButtons.length).toBe(2);
  });

  it('should handle pagination button click', () => {
    render(
      <Pagination
        totalResults={totalResults}
        currentPage={currentPage}
        handlePaginate={handlePaginate}
      />
    );

    const paginationButton = screen.getByText('1');
    fireEvent.click(paginationButton);
    expect(handlePaginate).toHaveBeenCalledWith(1);
  });

  it('should render ellipsis correctly', () => {
    render(
      <Pagination
        totalResults={100}
        currentPage={3}
        handlePaginate={handlePaginate}
      />
    );

    const ellipsis = screen.getByText('...');
    expect(ellipsis).toBeInTheDocument();
  });

  it('should not render pagination when totalResults is less than PAGE_PER_COUNT', () => {
    const { container } = render(
      <Pagination
        totalResults={5}
        currentPage={1}
        handlePaginate={handlePaginate}
      />
    );

    expect(container.firstChild).toBeNull();
  });
});
