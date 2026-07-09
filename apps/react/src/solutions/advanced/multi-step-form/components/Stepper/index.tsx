import { useStepFormContext } from '../../context/useStepFormContext';
import { type MultiStepForm } from '../../common/types';

import { stepMenu } from '../../common/constants';
import './index.css';
import { getStepMenuBg } from '../../common/utils';
import { useMediaQuery } from '@/hooks';

const Stepper = () => {
  const { form, setForm } = useStepFormContext();
  const isMobile = useMediaQuery('(max-width: 639px)');
  console.log(isMobile);

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
    <div className="stepper-container" style={{ backgroundImage: getStepMenuBg(isMobile) }}>
      {stepMenu.map((item) => (
        <div className="stepper-item" key={item.step} onClick={() => handleChangeStep(item.step)}>
          <div
            className={`stepper-count ${form.step === item.step && activeStep} ${form.step > item.step && passedStep}`}
          >
            {item.step}
          </div>
          <div className="hidden sm:flex flex-col gap-1 uppercase">
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
