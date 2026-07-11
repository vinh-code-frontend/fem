import { useStepFormContext } from '../../../context/useStepFormContext';
import Checkbox from '../../shared/Checkbox';
import StepLayout from '../../shared/StepLayout';
import type { AddOns } from '../../../common/types';
import { getAddonExpense, mapUnit } from '../../../features/form';
import Card from '../../shared/Card';

const addOnOptions: {
  type: keyof AddOns;
  label: string;
  description: string;
}[] = [
  {
    type: 'onlineService',
    label: 'Online service',
    description: 'Access to multiplayer games',
  },
  {
    type: 'largerStorage',
    label: 'Larger storage',
    description: 'Extra 1TB of cloud save',
  },
  {
    type: 'customProfile',
    label: 'Customizable profile',
    description: 'Custom theme on your profile',
  },
];

const AddOnsStep = () => {
  const { form, setForm } = useStepFormContext();

  const updateAddon = (key: keyof AddOns, value: boolean) => {
    setForm((prev) => ({
      ...prev,
      addons: {
        ...prev.addons,
        [key]: value,
      },
    }));
  };

  return (
    <StepLayout header="Pick add-ons" description="Add-ons help enhance your gaming experience.">
      <div className="flex flex-col gap-3 sm:gap-4">
        {addOnOptions.map((item) => (
          <Card
            key={item.type}
            isActive={form.addons[item.type]}
            onClick={() => updateAddon(item.type, !form.addons[item.type])}
            className="py-4"
          >
            <div className="flex gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <div onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    checked={form.addons[item.type]}
                    onChange={(value) => updateAddon(item.type, value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-bold text-[#022959] leading-4.5">{item.label}</div>
                  <div className="leading-4 text-sm text-[#9699AA]">{item.description}</div>
                </div>
              </div>
              <div className="text-[#483EFF] text-sm">{`+$${getAddonExpense(item.type, form.billingPeriod)}/${mapUnit[form.billingPeriod]}`}</div>
            </div>
          </Card>
        ))}
      </div>
    </StepLayout>
  );
};

export default AddOnsStep;
