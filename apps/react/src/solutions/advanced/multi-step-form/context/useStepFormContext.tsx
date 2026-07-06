import { createContext, useContext, type Dispatch, type SetStateAction } from 'react';
import type { MultiStepForm } from '../common/types';

export interface FormContextValue {
  form: MultiStepForm;
  setForm: Dispatch<SetStateAction<MultiStepForm>>;
}

export const StepFormContext = createContext<FormContextValue | null>(null);

export const useStepFormContext = () => {
  const context = useContext(StepFormContext);

  if (!context) {
    throw new Error('useFormContext must be used inside StepFormContext');
  }

  return context;
};
