import React, { useId } from 'react';

import { ColumnType } from './Table';

interface TableRowsProps<T, K extends keyof T> {
  data: T[]
  columns: Array<ColumnType<T, K>>
}

const TableRows = <T, K extends keyof T>(
  props: TableRowsProps<T, K>
): JSX.Element => {
  const { data, columns } = props;
  const rowId = useId();
  const columnId = useId();
  const rows = data.map((row) => {
    return (
      <tr key={rowId}>
        {columns.map((column) => {
          const content = row[column.key] as React.ReactNode;

          return (
            <td
              key={columnId}
              className="whitespace-nowrap px-4 py-2 text-gray-900"
            >
              {content}
            </td>
          );
        })}
      </tr>
    );
  });

  return <tbody className="divide-y divide-gray-200">{rows}</tbody>;
};

export default TableRows;
