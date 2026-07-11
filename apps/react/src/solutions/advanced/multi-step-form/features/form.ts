import IconArcade from '@resource/advanced/multi-step-form/images/icon-arcade.svg';
import IconAdvanced from '@resource/advanced/multi-step-form/images/icon-advanced.svg';
import IconPro from '@resource/advanced/multi-step-form/images/icon-pro.svg';
import {
  StepConstants,
  type AddOns,
  type BillingPeriod,
  type BillingType,
  type MultiStepForm,
} from '../common/types';

export const BILL_RATIO = 10;

export const mapExpense: Record<BillingType, number> = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

export const mapAddOnsExpose: Record<keyof AddOns, number> = {
  onlineService: 1,
  largerStorage: 2,
  customProfile: 2,
};

export const mapIcon: Record<BillingType, string> = {
  arcade: IconArcade,
  advanced: IconAdvanced,
  pro: IconPro,
};

export const mapUnit: Record<BillingPeriod, string> = {
  monthly: 'mo',
  yearly: 'yr',
};

export const getExpense = (type: BillingType, period: BillingPeriod) => {
  const expense = mapExpense[type];

  return period === 'monthly' ? expense : expense * BILL_RATIO;
};

export const getAddonExpense = (type: keyof AddOns, period: BillingPeriod) => {
  const expense = mapAddOnsExpose[type];

  return period === 'monthly' ? expense : expense * BILL_RATIO;
};

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
