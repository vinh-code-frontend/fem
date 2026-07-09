export type ValueOf<T> = T[keyof T];

export const StepConstants = {
  GetInfo: 1,
  SelectPlan: 2,
  AddOns: 3,
  Summary: 4,
} as const;

export const BillingTypeConstants = ['arcade', 'advanced', 'pro'] as const;
export const BillingPeriodConstants = ['monthly', 'yearly'] as const;

export type BillingType = (typeof BillingTypeConstants)[number];
export type BillingPeriod = (typeof BillingPeriodConstants)[number];

export type AddOns = {
  onlineService: boolean;
  largerStorage: boolean;
  customProfile: boolean;
};

export type MultiStepForm = {
  name: string;
  email: string;
  phone: string;
  step: ValueOf<typeof StepConstants>;
  isConfirmed: boolean;
  billingType: BillingType;
  billingPeriod: BillingPeriod;
  addons: AddOns;
};
