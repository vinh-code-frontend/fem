import { BillingTypeConstants } from '../../../common/types';
import { useStepFormContext } from '../../../context/useStepFormContext';
import Card from '../../shared/Card';
import StepLayout from '../../shared/StepLayout';
import { Switch } from '../../shared/Switch';

const SelectPlanStep = () => {
  const { form, setForm } = useStepFormContext();

  return (
    <StepLayout
      header="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <div>
        <div className="flex gap-4 flex-col md:flex-row">
          {BillingTypeConstants.map((item) => (
            <Card
              key={item}
              isActive={form.billingType === item}
              onClick={() => setForm((prev) => ({ ...prev, billingType: item }))}
              className="md:flex-1"
            >
              {item}
            </Card>
          ))}
        </div>
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
