import React, { useId } from 'react';

import { ColumnType } from './Table';

interface TableHeaderProps<T, K extends keyof T> {
  columns: Array<ColumnType<T, K>>
}

const TableHeader = <T, K extends keyof T>({
  columns
}: TableHeaderProps<T, K>): JSX.Element => {
  const columnId = useId();
  const headers = columns.map((column) => {
    return (
      <th
        key={columnId}
        className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-400"
      >
        {column.header}
      </th>
    );
  });

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
