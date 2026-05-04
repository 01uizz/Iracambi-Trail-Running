import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-outline';

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClass} ${className} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
