interface Props {
  checked: boolean;
  onChecked: (checked: boolean) => void;
  checkedLabel: string;
  unCheckedLabel: string;
  disabled?: boolean;
}

const getCheckLabelClassName = (checked: boolean): string => {
  const defaultClass =
    'absolute top-0 w-14 text-xs px-2 py-1 text-left transition duration-300 ease-in-out';
  return `${defaultClass} ${checked ? 'text-white' : ''}`;
};

const getCheckWrapperClass = (checked: boolean, disabled: boolean): string => {
  const defaultClass = `${disabled && 'opacity-50'} block w-14 h-6 rounded-full border`;
  const className = checked
    ? 'bg-accent border-accent'
    : 'border-gray-300 bg-gray-100';
  return `${defaultClass} ${!disabled ? className : 'border-gray-300 bg-gray-100'}`;
};

const getDotClassName = (checked: boolean, disabled: boolean): string => {
  const defaultClass =
    `${disabled && 'opacity-50'} dot cursor-pointer top-0 z-10 absolute bg-white border w-6 h-6 rounded-full transition duration-300 ease-in-out`;
  return !disabled ? 
  `${defaultClass} ${checked ? 'border-blue-500 right-0' : 'border-gray-300 left-0'}` :
  `${defaultClass} border-gray-300 left-0'}`
};

const Toggle = ({
  checked,
  onChecked,
  checkedLabel = '',
  unCheckedLabel = '',
  disabled = false
}: Props) => (
  <div className="relative">
    <input
      checked={checked}
      onChange={() => !disabled && onChecked(!checked)}
      type="checkbox"
      className="sr-only"
      disabled={disabled}
    />
    <div className={getCheckWrapperClass(checked, disabled)} />
    <div
      onClick={() => !disabled && onChecked(!checked)}
      data-testid="dot"
      className={getDotClassName(checked, disabled)}
    />
    {checked && unCheckedLabel !== '' && (
      <div className={getCheckLabelClassName(checked)}>{checkedLabel}</div>
    )}
    {!checked && unCheckedLabel !== '' && (
      <div className={`${disabled && 'opacity-50'} absolute top-0 w-14 text-xs px-2 py-1 text-right transition duration-300 ease-in-out`}>
        {unCheckedLabel}
      </div>
    )}
  </div>
);

export default Toggle;
