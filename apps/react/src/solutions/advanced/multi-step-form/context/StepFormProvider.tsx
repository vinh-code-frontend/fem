import { useState, type ReactNode } from 'react';
import { initMultiStepForm } from '../common/utils';
import { StepFormContext } from './useStepFormContext';

const StepFormProvider = ({ children }: { children: ReactNode }) => {
  const [form, setForm] = useState(initMultiStepForm());
  return <StepFormContext.Provider value={{ form, setForm }}>{children}</StepFormContext.Provider>;
};

export default StepFormProvider;
