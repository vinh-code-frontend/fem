import { StepConstants, type MultiStepForm } from './types';
import sidebarBgDesktop from '@resource/advanced/multi-step-form/images/bg-sidebar-desktop.svg';
import sidebarBgMobile from '@resource/advanced/multi-step-form/images/bg-sidebar-mobile.svg';

export const initMultiStepForm = (): MultiStepForm => {
  return {
    name: '',
    email: '',
    phone: '',
    step: StepConstants.GetInfo,
    isConfirmed: false,
    billingPeriod: 'monthly',
    billingType: 'arcade',
    addons: {
      onlineService: false,
      largerStorage: false,
      customProfile: false,
    },
  };
};

export const getStepMenuBg = (isMobile: boolean) => {
  const path = isMobile ? sidebarBgMobile : sidebarBgDesktop;
  return `url("${path}")`;
};
