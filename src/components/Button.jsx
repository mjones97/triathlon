import React from 'react';

const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      className={`bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-600 transition-colors ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
