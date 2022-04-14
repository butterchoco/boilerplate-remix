import React, { useMemo } from "react";

type ButtonType = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  colorScheme?: "primary" | "error" | "basic";
  variants?: "filled" | "outlined" | "ghosted";
  extraStyle?: string;
};

const Button: React.FC<ButtonType> = ({
  children,
  extraStyle,
  colorScheme = "basic",
  variants = "filled",
  ...props
}) => {
  const getDefaultStyle = useMemo(
    () => ({
      filled: {
        primary:
          "text-white bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700",
        basic: "text-black bg-gray-100 hover:bg-gray-200 focus:bg-gray-200",
        error: "text-white bg-red-500 hover:bg-red-700 focus:bg-red-700",
      },
      outlined: {
        primary:
          "text-indigo-500 border-[1px] border-indigo-500 bg-white hover:bg-indigo-100 focus:bg-indigo-100",
        basic:
          "text-black border-[1px] border-gray-100 bg-white hover:bg-gray-100 focus:bg-gray-100",
        error:
          "text-red-500 border-[1px] border-red-500 bg-white hover:bg-red-100 focus:bg-red-100",
      },
      ghosted: {
        primary: "text-indigo-500 hover:bg-indigo-50 focus:bg-indigo-50",
        basic: "text-black-100 hover:bg-gray-50 focus:bg-gray-50",
        error: "text-red-500 hover:bg-red-50 focus:bg-red-50",
      },
    }),
    []
  );

  return (
    <button
      className={`block rounded-lg p-2 font-semibold ${getDefaultStyle[variants][colorScheme]} ${extraStyle}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
