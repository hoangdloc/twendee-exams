import React from 'react';

import { Button } from '../button';
import { LeftArrowIcon, RightArrowIcon } from '../icons';
import { useTableContext } from './TableContext';

const TablePagination: React.FC = (props) => {
  const { dataSize, limit, currentPage } = useTableContext();

  const totalPage = Math.ceil(dataSize / limit);

  return (
    <div className="flex items-center justify-center gap-4 p-4 mt-8">
      <Button>
        <LeftArrowIcon />
      </Button>

      <p className="text-sm">
        {currentPage}
        <span className="mx-1">/</span>
        {totalPage}
      </p>

      <Button>
        <RightArrowIcon />
      </Button>
    </div>
  );
};

export default TablePagination;
