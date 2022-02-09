import { SyntheticEvent } from 'react';

interface Props {
  name?: string;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  value: number | string;
  onChange: (e: SyntheticEvent) => void;
  testid?: string;
  type?: string;
  autoFocus?: boolean;
  autoComplete?: string;
  className?: string;
}

const Input = ({
  name,
  disabled,
  required,
  placeholder,
  value,
  onChange,
  testid,
  type = 'text',
  autoFocus,
  autoComplete,
  className
}: Props): JSX.Element => (
  <input
    id={name}
    name={name}
    type={type}
    autoFocus={autoFocus}
    disabled={disabled}
    required={required}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`${className} transition text-xs duration-300 ease-in-out w-full px-4 py-2 placeholder:text-gray-400 border border-gray-500 rounded-lg overflow-hidden focus-within:border-accent focus:outline-none bg-none`}
    data-testid={testid}
    autoComplete={autoComplete}
  />
);

export default Input;
