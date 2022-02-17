interface Props {
  checked: boolean;
  onChecked: (checked: boolean) => void;
  checkedLabel: string;
  unCheckedLabel: string;
}

const getCheckLabelClassName = (checked: boolean): string => {
  const defaultClass =
    'absolute top-0 w-14 text-xs px-2 py-1 text-left transition duration-300 ease-in-out';
  return `${defaultClass} ${checked ? 'text-white' : ''}`;
};

const getCheckWrapperClass = (checked: boolean): string => {
  const defaultClass = 'block w-14 h-6 rounded-full border';
  const className = checked
    ? 'bg-blue-400 border-blue-500'
    : 'border-gray-300 bg-gray-100';
  return `${defaultClass} ${className}`;
};

const getDotClassName = (checked: boolean): string => {
  const defaultClass =
    'dot cursor-pointer top-0 z-10 absolute bg-white border w-6 h-6 rounded-full transition';
  return `${defaultClass} ${checked ? 'border-blue-500' : 'border-gray-300'}`;
};

const Toggle = ({
  checked,
  onChecked,
  checkedLabel = '',
  unCheckedLabel = '',
}: Props) => (
  <div className="relative">
    <input
      checked={checked}
      onChange={() => onChecked(!checked)}
      type="checkbox"
      className="sr-only"
    />
    <div className={getCheckWrapperClass(checked)} />
    <div
      onClick={() => onChecked(!checked)}
      data-testid="dot"
      className={getDotClassName(checked)}
    />
    {checked && unCheckedLabel !== '' && (
      <div className={getCheckLabelClassName(checked)}>{checkedLabel}</div>
    )}
    {!checked && unCheckedLabel !== '' && (
      <div className="absolute top-0 w-14 text-xs px-2 py-1 text-right transition duration-300 ease-in-out">
        {unCheckedLabel}
      </div>
    )}
  </div>
);

export default Toggle;
