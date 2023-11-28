import React, { ReactNode, forwardRef, ForwardedRef } from "react";

type BasicButtonProps = {
  icon?: ReactNode;
  disabled?: boolean;
};

export type ButtonProps<T> = BasicButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<T>, T>;

const Button = forwardRef(
  (
    {
      className,
      children,
      disabled,
      onClick,
      icon,
      ...rest
    }: ButtonProps<HTMLButtonElement>,
    ref?
  ): React.JSX.Element => {
    return (
      <button
        className={className}
        onClick={onClick}
        disabled={disabled}
        ref={ref as ForwardedRef<HTMLButtonElement>}
        {...rest}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;