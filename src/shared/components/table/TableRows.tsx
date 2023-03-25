import React from 'react';

import { ColumnType } from './Table';
import { useTableContext } from './TableContext';

interface TableRowsProps<T, K extends keyof T> {
  data: T[]
  columns: Array<ColumnType<T, K>>
}

const TableRows = <T, K extends keyof T>(
  props: TableRowsProps<T, K>
): JSX.Element => {
  const { data, columns } = props;
  const { indexOfFirstRecord, indexOfLastRecord } = useTableContext();

  const rows = data.slice(indexOfFirstRecord, indexOfLastRecord).map((row, index) => {
    return (
      <tr key={`row-${index}`}>
        {columns.map((column, index) => {
          const content = row[column.key] as string;

          if (column.dataType === 'image') {
            return (
              <td
                key={`cell-${index}`}
                className="px-4 py-2 text-gray-900 whitespace-nowrap"
              >
                <img className='w-20 h-20 rounded-full shadow-md' src={content} />
              </td>
            );
          }

          return (
            <td
              key={`cell-${index}`}
              className="px-4 py-2 text-gray-900 whitespace-nowrap"
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
