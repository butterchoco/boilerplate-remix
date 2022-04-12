import React from "react";

type RadioType = {
  id: string;
  label: string | JSX.Element;
};

const Radio: React.FC<RadioType> = ({ id, label }) => {
  return (
    <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        className="form-radio h-5 w-5 text-indigo-500"
        name="type"
        id={id}
      />
      {label}
    </label>
  );
};

export default Radio;
