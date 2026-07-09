import '@resource/advanced/multi-step-form/css/index.css';

import StepContent from './components/StepContent';
import Stepper from './components/Stepper';
import StepFormProvider from './context/StepFormProvider';
import { Helmet } from 'react-helmet-async';

const MultiStepForm = () => {
  return (
    <StepFormProvider>
      <Helmet>
        <title>Frontend Mentor | Multi steps form</title>
        <meta name="description" content="Frontend Multi steps form solution built with React." />
      </Helmet>
      <div className="fem-multi-step-form font-ubuntu bg-(--bg-color)">
        <div className="w-full min-h-screen h-full flex sm:p-4 ">
          <div className="shadow-[0px_25px_40px_0px_#00000010] max-w-235 w-full flex flex-col sm:p-4 sm:m-auto sm:bg-white sm:flex-row sm:h-150 sm:rounded-2xl">
            <Stepper />
            <StepContent />
          </div>
        </div>
      </div>
    </StepFormProvider>
  );
};

export default MultiStepForm;
