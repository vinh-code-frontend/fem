import clsx from 'clsx';

export const Switch = ({
  checked,
  suffixLabel,
  prefixLabel,
  onChange,
}: {
  checked: boolean;
  suffixLabel: string;
  prefixLabel: string;
  onChange: (value: boolean) => void;
}) => {
  return (
    <div className="flex gap-6 items-center">
      <span
        className={clsx(
          'font-bold text-sm transition',
          checked ? 'text-[#9699AA]' : 'text-[#022959]',
        )}
      >
        {prefixLabel}
      </span>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative h-5 w-9.5 rounded-full transition cursor-pointer bg-[#02295a]`}
      >
        <span
          className={`absolute top-1 left-1 h-3 w-3 rounded-full bg-white transition ${
            checked ? 'translate-x-4.5' : ''
          }`}
        />
      </button>
      <span
        className={clsx(
          'font-bold text-sm transition',
          !checked ? 'text-[#9699AA]' : 'text-[#022959]',
        )}
      >
        {suffixLabel}
      </span>
    </div>
  );
};
