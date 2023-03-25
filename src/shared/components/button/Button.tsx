import React from 'react';

type ButtonProps = {
  children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = (props) => {
  return <button className='inline-flex items-center justify-center w-8 h-8 transition-all bg-white border border-gray-200 rounded hover:text-blue-400 hover:border-blue-400' {...props}>{props.children}</button>;
};

export default Button;
