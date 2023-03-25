import React from 'react';

import useClickOutside from '../../../hooks/useClickOutside';
import { DownArrowIcon, UpArrowIcon } from '../icons';

export interface IDropdownOption {
  label: string
  onClick: () => void
}

interface DropdownProps {
  options: IDropdownOption[]
  placeholder?: () => JSX.Element
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder }) => {
  const { nodeRef, setShow, show } = useClickOutside();

  const renderOptionBox = (dropdownOptions: IDropdownOption[]): JSX.Element => {
    return (
      <div className="absolute left-0 w-full bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-lg top-full">
        {dropdownOptions.map((option, index) => (
          <div
            className="p-4 transition-all cursor-pointer hover:text-blue-400 hover:bg-gray-100"
            key={`option-${index}`}
            onClick={option.onClick}
          >
            {option.label}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="relative w-full max-w-[140px]"
      ref={nodeRef}
    >
      <div
        className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-400 transition-all border border-gray-200 rounded-lg shadow-sm cursor-pointer bg-gray-50 hover:bg-white"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span className="flex items-center justify-center gap-1">
          {placeholder?.()}
        </span>
        {show
          ? (<UpArrowIcon className="w-4 h-4 text-black" />)
          : (<DownArrowIcon className="w-4 h-4 text-black" />)
        }
      </div>
      {show && renderOptionBox(options)}
    </div>
  );
};

export default Dropdown;
