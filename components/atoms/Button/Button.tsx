import React from 'react';

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
};

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  if (variant === 'primary') {
    return (
      <a
        className={`inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 hover:bg-blue-500 hover:shadow-blue-900/50 transition-all duration-200 ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      className={`inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-7 py-3.5 text-sm font-semibold text-zinc-300 backdrop-blur-sm hover:border-blue-500 hover:bg-zinc-900 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
