import { BillingTypeConstants } from '../../../common/types';
import { useStepFormContext } from '../../../context/useStepFormContext';
import { mapIcon, getExpense, mapUnit } from '../../../features/form';
import Card from '../../shared/Card';
import StepLayout from '../../shared/StepLayout';
import { Switch } from '../../shared/Switch';

import { capitalize } from 'lodash-es';

const SelectPlanStep = () => {
  const { form, setForm } = useStepFormContext();

  return (
    <StepLayout
      header="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <div className="flex gap-4 flex-col md:flex-row mb-6">
        {BillingTypeConstants.map((item) => (
          <Card
            key={item}
            isActive={form.billingType === item}
            onClick={() => setForm((prev) => ({ ...prev, billingType: item }))}
            className="md:flex-1"
          >
            <div className="flex gap-4 items-center sm:flex-col sm:items-start sm:gap-10">
              <img src={mapIcon[item]} alt={`Icon of ${mapIcon[item]}`} />
              <div className="flex flex-col gap-1">
                <div className="leading-[18px] font-bold text-[#022959]">{capitalize(item)}</div>
                <div className="leading-[16px] font-normal text-sm text-[#9699AA]">{`$${getExpense(item, form.billingPeriod)}/${mapUnit[form.billingPeriod]}`}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="bg-[#f8f9ff] p-3.5 flex justify-center">
        <Switch
          checked={form.billingPeriod === 'yearly'}
          prefixLabel="Monthly"
          suffixLabel="Yearly"
          onChange={(checked) =>
            setForm((prev) => ({
              ...prev,
              billingPeriod: checked ? 'yearly' : 'monthly',
            }))
          }
        />
      </div>
    </StepLayout>
  );
};

export default SelectPlanStep;
