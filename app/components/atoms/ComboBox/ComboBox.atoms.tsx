import React from "react";

type InputType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  description?: string;
  error?: string;
  touched?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

const Input: React.FC<InputType> = ({
  label,
  description,
  error,
  touched,
  required,
  leftIcon,
  rightIcon,
  ...inputParams
}) => {
  return (
    <div className="w-full px-2 lg:max-w-lg">
      <label
        className={`${
          required && "after:text-red-500 after:content-['*']"
        } text-gray-600 font-semibold text-md mb-2 ml-1`}
      >
        {label}
      </label>
      <p className="text-gray-400 max-w-full text-sm whitespace-pre-wrap ml-1 mb-1">
        {description}
      </p>
      <div className="relative w-full">
        {leftIcon && (
          <span className="absolute flex items-center justify-center top-0 left-0 mx-3 h-10 w-5 max-h-full max-w-[2.5rem] text-slate-300">
            {leftIcon}
          </span>
        )}
        <input
          {...inputParams}
          className={`${
            error && touched
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:border-indigo-500"
          } ${leftIcon && "pl-10"} ${
            rightIcon && "pr-10"
          } bg-gray-50 w-full px-3 py-2 text-md border rounded-md placeholder:text-gray-300 focus:outline-none transition-colors`}
        />
        {rightIcon && (
          <span className="absolute flex items-center justify-center top-0 right-0 mx-3 h-10 w-5 max-h-full max-w-[2.5rem] text-slate-300">
            {rightIcon}
          </span>
        )}
      </div>
      {error && touched && (
        <p className="text-red-500 max-w-full text-sm whitespace-pre-wrap ml-1 mb-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
