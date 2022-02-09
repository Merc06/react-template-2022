import { SyntheticEvent, ReactElement } from 'react';

interface Props {
  type: string;
  placeholder: string;
  value: number | string;
  onChange?: (e: SyntheticEvent) => void;
  icon: ReactElement<any, any>;
  required?: boolean;
  name?: string;
  testid?: string;
  disabled?: boolean;
  className?: string;
}

const InputGroup = ({
  type,
  placeholder,
  value,
  onChange,
  icon,
  name,
  required,
  testid,
  disabled,
  className
}: Props) => (
  <div className={`${className} input-group flex items-center border text-xs border-gray-500 rounded-lg overflow-hidden focus-within:border-accent placeholder:text-gray-400 transition duration-300 ease-in-out`}>
    <input
      className="flex-1 px-4 py-2 focus:outline-none text-xs"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      name={name}
      data-testid={testid}
      disabled={disabled}
    />
    <span className="side px-4 py-2 border-l border-gray-300 transition duration-300 ease-in-out">
      {icon}
    </span>
  </div>
);

export default InputGroup;
