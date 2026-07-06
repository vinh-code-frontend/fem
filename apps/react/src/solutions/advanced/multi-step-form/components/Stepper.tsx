import { useStepFormContext } from '../context/useStepFormContext';
import { type MultiStepForm } from '../common/types';

import { useMediaQuery } from '@/hooks';
import { stepMenu } from '../common/constants';
import { getStepMenuBg } from '../common/utils';
import { tv } from 'tailwind-variants/lite';
import { tw } from '@/utils';

const background = tv({
  base: `flex bg-cover bg-no-repeat text-white p-8 h-43 gap-4 text-center justify-center items-start`,
  variants: {
    size: {
      xs: 'gap-8 flex-column h-full',
    },
  },
});

const Stepper = () => {
  const { form, setForm } = useStepFormContext();
  const isMobile = useMediaQuery('(max-width: 480px)');

  const stepClass = tw(
    `font-semibold py-2 px-4 leading-4 w-8 flex justify-center items-center border rounded-full`,
  );
  const activeStep = tw(
    'text-(--color-primary-blue-950) border-(--color-primary-blue-200) bg-(--color-primary-blue-200)',
  );
  const passedStep = tw(``);

  const handleChangeStep = (newStep: MultiStepForm['step']) => {
    setForm((prev) => ({
      ...prev,
      step: newStep,
    }));
  };

  return (
    <div className={`${background()}`} style={{ backgroundImage: getStepMenuBg(isMobile) }}>
      {stepMenu.map((item) => (
        <div
          className={`font-sm overflow-hidden `}
          key={item.step}
          onClick={() => handleChangeStep(item.step)}
        >
          <div
            className={`${stepClass} ${form.step === item.step && activeStep} ${form.step > item.step && passedStep}`}
          >
            {item.step}
          </div>
          <div className="hidden xs:block">
            <div>{item.title}</div>
            <div>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
