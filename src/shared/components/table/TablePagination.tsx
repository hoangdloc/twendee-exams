import React from 'react';

import { Button } from '../button';
import { LeftArrowIcon, RightArrowIcon } from '../icons';
import { useTableContext } from './TableContext';

const TablePagination: React.FC = () => {
  const { currentPage, totalPage, handleNextPageClick, handlePrevPageClick } =
    useTableContext();

  return (
    <div className="flex items-center justify-center gap-4 p-4 mt-8">
      <Button
        disabled={currentPage === 1}
        onClick={handlePrevPageClick}
      >
        <LeftArrowIcon />
      </Button>

      <p className="text-sm">
        {currentPage}
        <span className="mx-1">/</span>
        {totalPage}
      </p>

      <Button
        disabled={currentPage === totalPage}
        onClick={handleNextPageClick}
      >
        <RightArrowIcon />
      </Button>
    </div>
  );
};

export default TablePagination;
