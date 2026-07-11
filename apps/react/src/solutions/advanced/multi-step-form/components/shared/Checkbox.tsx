import clsx from 'clsx';

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};

export default function Checkbox({ checked, onChange, disabled, className }: CheckboxProps) {
  return (
    <label className={`inline-flex cursor-pointer items-center ${className ?? ''}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only peer absolute"
      />

      <span
        className={clsx([
          'flex size-5 items-center justify-center',
          'rounded-md border border-[#D6D9E6]',
          'transition',
          'peer-checked:border-blue-600',
          'peer-checked:bg-blue-600',
          'peer-disabled:opacity-50',
        ])}
      >
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx(
            'size-3 transition-opacity  text-white',
            checked ? 'opacity-100' : 'opacity-0',
          )}
        >
          <path
            d="M8.9992 1L3.49975 6.4996L1 3.99978"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </label>
  );
}
