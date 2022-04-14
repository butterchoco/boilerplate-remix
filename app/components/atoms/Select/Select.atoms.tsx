import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "tabler-icons-react";
import useOnClickOutside from "~/hooks/UseOnClickOutside";

type SelectType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  description?: string;
  error?: string;
  touched?: boolean;
  leftIcon?: JSX.Element;
  options?: { label: string; value: string }[];
  onChange?: (event: InputEvent) => void;
  ref?: React.RefObject<HTMLInputElement>;
};

const Select: React.FC<SelectType> = ({
  label,
  description,
  error,
  touched,
  required,
  leftIcon,
  options,
  placeholder,
  ref,
  onChange,
  ...selectParams
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [displayValue, setDisplayValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentValue, setCurrentValue] = useState<
    { label: string; value: string } | undefined
  >();
  const inputRef = useRef<HTMLInputElement>(null);
  const displayRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(containerRef, () => setOpen(false));

  useEffect(() => {
    setInputValue(currentValue ? currentValue.value : "");
    setDisplayValue(currentValue ? currentValue.label : "");

    return () => {
      setDisplayValue("");
    };
  }, [currentValue, onChange, ref]);

  useEffect(() => {
    const elementRef: React.RefObject<HTMLInputElement> = ref ?? inputRef;
    const element = elementRef.current;
    if (!element || !onChange) return;
    const event = new InputEvent("change", {
      bubbles: true,
    });
    element.dispatchEvent(event);
    onChange(event);
  }, [inputValue, onChange, ref]);

  const filteredOptions = useMemo(
    () =>
      options
        ? options.filter((data) =>
            data.label.toLowerCase().includes(displayValue.toLowerCase())
          )
        : [],
    [options, displayValue]
  );

  return (
    <div className="w-full lg:max-w-lg my-2">
      <label
        className={`${
          required && "after:text-red-500 after:content-['*']"
        } text-gray-600 font-semibold text-md mb-2 ml-1`}
      >
        {label}
      </label>
      {description && (
        <p className="text-gray-400 max-w-full text-sm whitespace-pre-wrap ml-1 mb-1">
          {description}
        </p>
      )}
      <div ref={containerRef} className="relative w-full">
        {leftIcon && (
          <span className="absolute flex items-center justify-center top-0 left-0 mx-3 h-10 w-5 max-h-full max-w-[2.5rem] text-slate-300">
            {leftIcon}
          </span>
        )}
        <input
          readOnly={onChange !== undefined}
          ref={ref ?? inputRef}
          value={inputValue}
          className="hidden"
          onChange={onChange}
          {...selectParams}
        />
        <div
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <input
            required={required}
            ref={displayRef}
            value={displayValue}
            placeholder={placeholder}
            onChange={(e) => setDisplayValue(e.target.value)}
            className={`${
              error && touched
                ? "border-red-500 focus:border-red-500 animate-shakeX"
                : "border-gray-200 focus:border-indigo-500"
            } ${
              leftIcon && "pl-10"
            } pr-10 mt-1 bg-gray-50 w-full px-3 py-2 text-md border rounded-md placeholder:text-gray-300 focus:outline-none transition-colors cursor-pointer`}
          />
          <span className="pointer-events-none absolute flex items-center justify-center top-1/2 -translate-y-1/2 right-0 mx-3 h-10 w-5 max-h-full max-w-[2.5rem] text-slate-300">
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </span>
        </div>
        {isOpen && (
          <div className="absolute top-10 mt-[0.15rem] w-full max-h-48 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-indigo-500 border-indigo-500 border-b-[1px] border-l-[1px] border-r-[1px] rounded-b-lg shadow-md bg-white">
            {filteredOptions.length !== 0 ? (
              filteredOptions.map((data, index) => (
                <div
                  className="px-6 py-4 hover:bg-gray-100 cursor-pointer"
                  key={index}
                  onClick={(e) => {
                    setCurrentValue(data);
                    setOpen(false);
                  }}
                >
                  {data.label}
                </div>
              ))
            ) : (
              <p className="px-6 py-4 text-gray-400">No Options</p>
            )}
          </div>
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

export default Select;
