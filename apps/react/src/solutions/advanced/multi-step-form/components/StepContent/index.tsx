import GetInfoStep from './GetInfoStep';
import SelectPlanStep from './SelectPlanStep';
import AddOnsStep from './AddOnsStep';
import SummaryStep from './SummaryStep';
import Acknowledgement from './Acknowledgement';
import { useStepFormContext } from '../../context/useStepFormContext';
import { StepConstants, type MultiStepForm } from '../../common/types';
import StepFooter from '../StepFooter';

const renderStepContent = (form: MultiStepForm) => {
  switch (form.step) {
    case StepConstants.GetInfo:
      return <GetInfoStep />;

    case StepConstants.SelectPlan:
      return <SelectPlanStep />;

    case StepConstants.AddOns:
      return <AddOnsStep />;

    case StepConstants.Summary:
      return form.isConfirmed ? <Acknowledgement /> : <SummaryStep />;

    default:
      return null;
  }
};

const StepContent = () => {
  const { form } = useStepFormContext();

  return (
    <>
      <div className="bg-white">{renderStepContent(form)}</div>
      <StepFooter />
    </>
  );
};

export default StepContent;
