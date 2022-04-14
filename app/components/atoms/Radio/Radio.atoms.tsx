import React from "react";

type RadioType = React.DetailedHTMLProps<
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

const Radio: React.FC<RadioType> = ({
  label,
  description,
  error,
  touched,
  required,
  leftIcon,
  rightIcon,
  ...radioParams
}) => {
  return (
    <div className="my-2">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          required={required}
          {...radioParams}
          className={`${
            error && touched
              ? "border-red-500 focus:border-red-500 animate-shakeX"
              : "border-gray-200 focus:border-indigo-500"
          } form-radio h-5 w-5 text-indigo-500`}
        />
        <span
          className={`${required && "after:text-red-500 after:content-['*']"}`}
        >
          {label}
        </span>
      </label>
      {error && touched && (
        <p className="text-red-500 max-w-full text-sm whitespace-pre-wrap ml-7 mb-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Radio;