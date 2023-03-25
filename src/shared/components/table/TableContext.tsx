import React, { createContext, useContext, useState } from 'react';

interface TableProviderProps {
  dataSize: number
  limit: number
  children?: React.ReactNode
}

interface TableContextType extends TableProviderProps {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const TableContext = createContext<TableContextType | null>(null);

const TableProvider: React.FC<TableProviderProps> = ({ children, ...props }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const values = { currentPage, setCurrentPage, ...props };

  return (
    <TableContext.Provider value={values}>
      {children}
    </TableContext.Provider>
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
