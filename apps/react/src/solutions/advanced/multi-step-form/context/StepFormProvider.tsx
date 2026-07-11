import { useState, type ReactNode } from 'react';
import { StepFormContext } from './useStepFormContext';
import { initMultiStepForm } from '../features/form';

const StepFormProvider = ({ children }: { children: ReactNode }) => {
  const [form, setForm] = useState(initMultiStepForm());
  return <StepFormContext.Provider value={{ form, setForm }}>{children}</StepFormContext.Provider>;
};

export default StepFormProvider;
