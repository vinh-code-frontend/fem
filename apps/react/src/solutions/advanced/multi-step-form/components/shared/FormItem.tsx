import clsx from 'clsx';
import type { ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

type FormFieldProps = {
  label: string;
  name: string;
  error?: FieldError;
  children: ReactNode;
};

export const FormItem = ({ error, label, children, name }: FormFieldProps) => {
  return (
    <div className={clsx(['step-content-form-item', error?.message && 'is-error'])}>
      <div className="flex gap-2 justify-between">
        <label htmlFor={name}>{label}</label>
        {error?.message ? (
          <p className="text-sm text-red-500 font-semibold">{error.message}</p>
        ) : null}
      </div>
      {children}
    </div>
  );
};
