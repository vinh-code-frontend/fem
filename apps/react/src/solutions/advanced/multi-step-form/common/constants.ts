import { StepConstants } from './types';

export const stepMenu = [
  {
    step: StepConstants.GetInfo,
    title: `Step ${StepConstants.GetInfo}`,
    description: 'Your Info',
  },
  {
    step: StepConstants.SelectPlan,
    title: `Step ${StepConstants.SelectPlan}`,
    description: 'Select Plan',
  },
  {
    step: StepConstants.AddOns,
    title: `Step ${StepConstants.AddOns}`,
    description: 'Add-Ons',
  },
  {
    step: StepConstants.Summary,
    title: `Step ${StepConstants.Summary}`,
    description: 'Summary',
  },
] as const;
