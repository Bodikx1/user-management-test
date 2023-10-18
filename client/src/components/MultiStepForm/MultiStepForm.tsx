import { useState } from 'react';
import './MultiStepForm.css';

import Tabs from './Tabs';

import Step1 from './Step1';
import Step2 from './Step2';
import Summary from './Summary';

const StepComponentMap: any = {
  'Step 1': Step1,
  'Step 2': Step2,
  'Step 3': Summary,
};

const MultiStepForm = ({ isHidden, onClose }: { isHidden: boolean; onClose: Function }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleFinish = () => {
    onClose();
    setStep(1);
  };

  const stepKeys = Object.keys(StepComponentMap);
  const StepComponent = StepComponentMap[`Step ${step}`];

  return (
    <div className={`${isHidden ? 'hidden' : 'block'} modal-container`}>
      <div className='flex items-center justify-center h-screen'>
        <div className='bg-white p-6 rounded-lg shadow-md w-full lg:max-w-xl'>
          <h2 className='text-lg font-medium mb-4'>Step {step} of 2</h2>

          <Tabs
            tabs={stepKeys}
            activeIndex={step}
            onSetActive={(index: number) => {
              setStep(index);
            }}
          />

          <StepComponent />

          <div className='flex justify-between mt-6'>
            {step > 1 && (
              <button
                className='bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400'
                onClick={handleBack}
              >
                Back
              </button>
            )}
            {step <= 2 && (
              <button className='bg-blue-500 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600' onClick={handleNext}>
                Next
              </button>
            )}
            {step === 3 && (
              <button
                className='bg-blue-500 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600'
                onClick={handleFinish}
              >
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
