import React from 'react';

import { ColumnType } from './Table';

interface TableHeaderProps<T, K extends keyof T> {
  columns: Array<ColumnType<T, K>>
}

const TableHeader = <T, K extends keyof T>({
  columns
}: TableHeaderProps<T, K>): JSX.Element => {
  const headers = columns.map((column, index) => {
    return (
      <th
        key={`headerCell-${index}`}
        className="p-4 font-medium text-left text-gray-400 whitespace-nowrap"
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
