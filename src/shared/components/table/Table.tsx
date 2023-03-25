import React from 'react';

import { TableProvider } from './TableContext';
import TableHeader from './TableHeader';
import TablePagination from './TablePagination';
import TableRows from './TableRows';

export interface ColumnType<T, K extends keyof T> {
  key: K
  header: string
  dataType: 'text' | 'image'
}

export interface TableProps<T, K extends keyof T> {
  data: T[]
  columns: Array<ColumnType<T, K>>
  limit: number
  pagination?: boolean
}

const Table = <T, K extends keyof T>(props: TableProps<T, K>): JSX.Element => {
  const { columns, data, limit } = props;

  return (
    <TableProvider
      dataSize={data.length}
      limit={limit}
    >
      <div className="min-w-full rounded-lg">
        <div className="min-w-full bg-white border rounded-lg">
          <table className="min-w-full text-base divide-y-2 divide-gray-200">
            <TableHeader columns={columns} />
            <TableRows
              data={data}
              columns={columns}
            />
          </table>
        </div>
        <TablePagination />
      </div>
    </TableProvider>
  );
};

export default Table;
