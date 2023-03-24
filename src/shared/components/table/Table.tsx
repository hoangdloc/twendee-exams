import React from 'react';

import TableHeader from './TableHeader';
import TableRows from './TableRows';

export interface ColumnType<T, K extends keyof T> {
  key: K
  header: string
}

export interface TableProps<T, K extends keyof T> {
  data: T[]
  columns: Array<ColumnType<T, K>>
  loading?: boolean
  pagination?: boolean
  toolbar?: boolean
}

const Table = <T, K extends keyof T>(props: TableProps<T, K>): JSX.Element => {
  const { columns, data } = props;

  return (
    <div className="rounded-lg w-full bg-white border">
      <table className="min-w-full divide-y-2 divide-gray-200 text-base">
        <TableHeader columns={columns} />
        <TableRows
          data={data}
          columns={columns}
        />
      </table>
    </div>
  );
};

export default Table;
