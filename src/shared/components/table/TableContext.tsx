import React, { createContext, useContext, useState } from 'react';

interface TableProviderProps {
  dataSize: number
  limit: number
  children?: React.ReactNode
}

interface TableContextType extends TableProviderProps {
  currentPage: number
  handlePrevPageClick: () => void
  handleNextPageClick: () => void
  totalPage: number
  indexOfLastRecord: number
  indexOfFirstRecord: number
}

const TableContext = createContext<TableContextType | null>(null);

const TableProvider: React.FC<TableProviderProps> = ({
  children,
  ...props
}) => {
  const { limit, dataSize } = props;

  // Handle Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPage = Math.ceil(dataSize / limit);
  const indexOfLastRecord = currentPage * limit;
  const indexOfFirstRecord = indexOfLastRecord - limit;
  const handleNextPageClick = (): void => {
    if (currentPage !== totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPageClick = (): void => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const values = {
    currentPage,
    indexOfLastRecord,
    indexOfFirstRecord,
    totalPage,
    handlePrevPageClick,
    handleNextPageClick,
    ...props
  };

  return (
    <TableContext.Provider value={values}>{children}</TableContext.Provider>
  );
};

function useTableContext (): TableContextType {
  const context = useContext(TableContext);
  if (typeof context === 'undefined') {
    throw new Error('useTableContext must be used under TableProvider');
  }
  return context as TableContextType;
}

export { useTableContext, TableProvider };
