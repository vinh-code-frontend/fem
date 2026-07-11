import { useStepFormContext } from '../../context/useStepFormContext';
import { stepMenu } from '../../common/constants';
import './index.css';
import clsx from 'clsx';
import sidebarBgDesktop from '@resource/advanced/multi-step-form/images/bg-sidebar-desktop.svg';
import sidebarBgMobile from '@resource/advanced/multi-step-form/images/bg-sidebar-mobile.svg';

const Stepper = () => {
  const { form } = useStepFormContext();

  return (
    <div className="stepper-container">
      <div
        className="absolute inset-0 z-0 sm:hidden bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("${sidebarBgMobile}")` }}
      ></div>
      <div
        className="absolute inset-0 z-0 hidden sm:block bg-cover bg-no-repeat"
        style={{ backgroundImage: `url("${sidebarBgDesktop}")` }}
      ></div>
      {stepMenu.map((item) => (
        <div className="stepper-item z-1" key={item.step}>
          <div
            className={clsx([
              `stepper-count`,
              form.step === item.step &&
                'text-(--color-primary-blue-950) border-(--color-primary-blue-200) bg-(--color-primary-blue-200)',
            ])}
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
