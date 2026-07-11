import { capitalize } from 'lodash-es';
import { useStepFormContext } from '../../../context/useStepFormContext';
import StepLayout from '../../shared/StepLayout';
import { StepConstants, type AddOns } from '../../../common/types';
import { getAddonExpense, getExpense, mapUnit } from '../../../features/form';
import clsx from 'clsx';

const addons: { key: keyof AddOns; label: string }[] = [
  {
    key: 'onlineService',
    label: 'Online service',
  },
  {
    key: 'largerStorage',
    label: 'Larger storage',
  },
  {
    key: 'customProfile',
    label: 'Customizable profile',
  },
] as const;

const SummaryStep = () => {
  const { form, setForm } = useStepFormContext();
  const unit = mapUnit[form.billingPeriod];
  const planLabel = `${capitalize(form.billingType)} (${capitalize(form.billingPeriod)})`;
  const totalLabel = form.billingPeriod === 'monthly' ? 'month' : 'year';

  const billingCost = getExpense(form.billingType, form.billingPeriod);
  const selectedAddons = addons
    .filter(({ key }) => form.addons[key])
    .map(({ key, label }) => ({
      key,
      label,
      cost: getAddonExpense(key, form.billingPeriod),
    }));
  const addonsCost = selectedAddons.reduce((sum, item) => sum + item.cost, 0);

  const total = billingCost + addonsCost;

  const handleSelectPlan = () => {
    setForm((prev) => ({
      ...prev,
      step: StepConstants.SelectPlan,
    }));
  };
  return (
    <StepLayout
      header="Finishing up"
      description="Double-check everything looks OK before confirming."
    >
      <div className="bg-[#F8F9FF] rounded-lg p-5">
        <div className="pb-4 ">
          <div className="pb-1 text-[#022959] font-bold leading-4.5 ">{planLabel}</div>
          <div className="flex gap-3 justify-between">
            <button
              type="button"
              className="text-sm underline text-[#9699AA] leading-4 cursor-pointer hover:text-[#022959] transition"
              onClick={handleSelectPlan}
            >
              Change
            </button>
            <div className="font-bold text-[16px] text-[#022959]">{`$${billingCost}/${unit}`}</div>
          </div>
        </div>
        <div className="h-px w-full bg-gray-300"></div>
        <div className={clsx('pt-4 flex flex-col gap-4', selectedAddons.length && 'mb-8')}>
          {selectedAddons.map(({ key, label, cost }) => (
            <div key={key} className="flex justify-between leading-4 text-sm">
              <div className="text-[#9699AA]">{label}</div>
              <div className="text-[#022959]">
                +${cost}/{unit}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between gap-2 items-center">
          <div className="text-[#9699AA] text-sm">Total (per {totalLabel})</div>
          <div className="text-[#483EFF] font-bold text-xl">
            +${total}/{unit}
          </div>
        </div>
      </div>
    </StepLayout>
  );
};

export default SummaryStep;
