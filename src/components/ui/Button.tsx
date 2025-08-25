'use client';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  rightIcon,
  ...props
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      {...props}
    >
      <span className="text-[20px] leading-[24px]">
        {children}
      </span>
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button;
