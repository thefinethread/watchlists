import React, { memo, useMemo } from 'react';
import { PAGE_PER_COUNT } from '../constants/constants';

const Pagination = ({ totalResults, currentPage, handlePaginate }) => {
  const numberOfPages = useMemo(() => {
    return Math.ceil(totalResults / PAGE_PER_COUNT);
  }, [totalResults]);

  const paginationNumbers = useMemo(() => {
    const maxPagesToShow = 5;

    const numbers = [];

    let start = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let end = Math.min(numberOfPages, start + maxPagesToShow - 1);

    if (end - start + 1 < maxPagesToShow) {
      start = Math.max(1, end - maxPagesToShow + 1);
    }

    if (start > 1) {
      numbers.push(1);
      if (start > 2) {
        numbers.push('...');
      }
    }

    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }

    if (end < numberOfPages) {
      if (end < numberOfPages - 1) {
        numbers.push('...');
      }
      numbers.push(numberOfPages);
    }

    return numbers;
  }, [currentPage, numberOfPages]);

  if (totalResults <= PAGE_PER_COUNT) return null;

  return (
    <div className='mt-5 w-full flex justify-center flex-wrap gap-1'>
      {paginationNumbers.map((num) => (
        <button
          onClick={() => num !== '...' && handlePaginate(num)}
          key={num}
          className={`h-8 w-10 border border-solid rounded-md border-zinc-300 ${
            currentPage === num ? 'bg-zinc-300' : 'bg-zinc-100'
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  );
};

export default memo(Pagination);
