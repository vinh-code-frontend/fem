import '@resource/advanced/multi-step-form/css/index.css';

import StepContent from './components/StepContent';
import Stepper from './components/Stepper';
import StepFormProvider from './context/StepFormProvider';

const MultiStepForm = () => {
  return (
    <StepFormProvider>
      <div className="fem-multi-step-form font-ubuntu bg-(--bg-color)">
        <div className="w-full min-h-screen h-full flex xs:p-4 ">
          <div className="shadow max-w-235 w-full flex flex-col xs:p-4 xs:m-auto xs:bg-white xs:flex-row xs:h-150">
            <Stepper />
            <StepContent />
          </div>
        </div>
      </div>
    </StepFormProvider>
  );
};

export default MultiStepForm;
