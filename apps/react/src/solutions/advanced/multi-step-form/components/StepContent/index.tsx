import GetInfoStep, { registerSchema, type RegisterFormData } from './GetInfoStep';
import SelectPlanStep from './SelectPlanStep';
import AddOnsStep from './AddOnsStep';
import SummaryStep from './SummaryStep';
import Acknowledgement from './Acknowledgement';
import { useStepFormContext } from '../../context/useStepFormContext';
import { StepConstants, type MultiStepForm } from '../../common/types';
import StepFooter from './StepFooter';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './index.css';

const renderStepContent = (form: MultiStepForm) => {
  switch (form.step) {
    case StepConstants.GetInfo:
      return <GetInfoStep />;

    case StepConstants.SelectPlan:
      return <SelectPlanStep />;

    case StepConstants.AddOns:
      return <AddOnsStep />;

    case StepConstants.Summary:
      return form.isConfirmed ? <Acknowledgement /> : <SummaryStep />;

    default:
      return null;
  }
};

const resolver = zodResolver(registerSchema);

const StepContent = () => {
  const { form } = useStepFormContext();

  const methods = useForm<RegisterFormData>({
    resolver,
    defaultValues: {
      name: form.name,
      email: form.email,
      phone: form.phone,
    },
  });

  return (
    <FormProvider {...methods}>
      <div className="step-content">
        <div className="step-content-form">{renderStepContent(form)}</div>
        <StepFooter />
      </div>
    </FormProvider>
  );
};

export default StepContent;
