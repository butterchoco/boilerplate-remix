import React from "react";

type SelectType = {
  id?: string;
  label: string | JSX.Element;
  description?: string;
  options: { key: string; value: string }[];
  required?: boolean;
};

const Select: React.FC<SelectType> = ({
  id,
  label,
  description,
  options,
  required,
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
      <div>
        {description && (
          <p className="text-gray-400 max-w-full text-sm whitespace-pre-wrap ml-1 mb-1">
            {description}
          </p>
        )}
        <select
          id={id}
          className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
        >
          {options.map(({ key, value }, index) => (
            <option value={value} key={index}>
              {key}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
