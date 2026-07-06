import { useStepFormContext } from '../../context/useStepFormContext';
import { type MultiStepForm } from '../../common/types';

import { useMediaQuery } from '@/hooks';
import { stepMenu } from '../../common/constants';
import { getStepMenuBg } from '../../common/utils';
import './index.css';

const Stepper = () => {
  const { form, setForm } = useStepFormContext();
  const isMobile = useMediaQuery('(max-width: 480px)');

  const stepClass = ``;
  const activeStep =
    'text-(--color-primary-blue-950) border-(--color-primary-blue-200) bg-(--color-primary-blue-200)';

  const passedStep = ``;

  const handleChangeStep = (newStep: MultiStepForm['step']) => {
    setForm((prev) => ({
      ...prev,
      step: newStep,
    }));
  };

  return (
    <div className="stepper-container bg-indigo-600">
      {stepMenu.map((item) => (
        <div className="stepper-item" key={item.step} onClick={() => handleChangeStep(item.step)}>
          <div
            className={`stepper-count ${form.step === item.step && activeStep} ${form.step > item.step && passedStep}`}
          >
            {item.step}
          </div>
          <div className="hidden xs:flex flex-col gap-1 uppercase">
            <div className="leading-3.5 text-[12px] text-(--color-primary-blue-300)">
              {item.title}
            </div>
            <div className="leading-4 text-[14px] font-bold">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
