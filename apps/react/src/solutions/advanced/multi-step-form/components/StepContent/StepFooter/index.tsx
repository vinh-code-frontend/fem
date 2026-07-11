import clsx from 'clsx';
import { StepConstants, type MultiStepForm } from '../../../common/types';
import { useStepFormContext } from '../../../context/useStepFormContext';
import { useFormContext } from 'react-hook-form';
import type { RegisterFormData } from '../GetInfoStep';
import './index.css';

const StepFooter = () => {
  const { form, setForm } = useStepFormContext();
  const { handleSubmit } = useFormContext<RegisterFormData>();
  const isSummary = form.step === StepConstants.Summary;

  const handleBackStep = () => {
    if (isSummary && form.isConfirmed) {
      return;
    }
    setForm((prev) => ({
      ...prev,
      step: (prev.step - 1) as MultiStepForm['step'],
    }));
  };

  const handleNextStep = () => {
    if (form.step === StepConstants.GetInfo) {
      void handleSubmit((data) => {
        setForm((prev) => ({
          ...prev,
          name: data.name,
          email: data.email,
          phone: data.phone,
          step: StepConstants.SelectPlan,
        }));
      })();

      return;
    }

    if (form.step >= StepConstants.Summary) {
      return;
    }
    setForm((prev) => ({
      ...prev,
      step: (prev.step + 1) as MultiStepForm['step'],
    }));
  };

  const handleConfirm = () => {
    setForm((prev) => ({
      ...prev,
      isConfirmed: true,
    }));
  };
  return (
    <div className="step-content-footer ">
      <div
        className={clsx(
          'cursor-pointer font-semibold transition text-(--neutral-grey-500) hover:text-(--color-primary-blue-950)',
          (isSummary && form.isConfirmed) || form.step <= StepConstants.GetInfo
            ? 'invisible'
            : 'visible',
        )}
        onClick={handleBackStep}
      >
        Go back
      </div>

      <div
        className={clsx(
          'transition cursor-pointer py-3 px-6 rounded-lg inline-block leading-4.5 text-white hover:opacity-75',
          form.step >= StepConstants.Summary && form.isConfirmed ? 'invisible' : 'visible',
          isSummary ? 'bg-(--color-primary-purple-600)' : 'bg-(--color-primary-blue-950)',
        )}
        onClick={isSummary ? handleConfirm : handleNextStep}
      >
        {isSummary ? 'Confirm' : 'Next Step'}
      </div>
    </div>
  );
};

export default StepFooter;
