import { useState } from 'react';
import './MultiStepForm.css';

import Step1 from './Step1';
import Step2 from './Step2';
import Summary from './Summary';

const StepComponentMap: any = {
  'step-1': Step1,
  'step-2': Step2,
  'step-3': Summary,
};

const MultiStepForm = ({ showForm }: { showForm: boolean }) => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleFinish = () => {};

  const StepComponent = StepComponentMap[`step-${step}`];

  return (
    <div className={`${showForm ? 'block' : 'hidden'} modal-container`}>
      <div className='flex items-center justify-center h-screen'>
        <div className='bg-white p-6 rounded-lg shadow-md w-full lg:max-w-xl'>
          <h2 className='text-lg font-medium mb-4'>Step {step} of 2</h2>
          <div className='flex mb-4'>
            <div
              className={`w-1/2 border-r border-gray-400 ${
                step === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              } p-2 text-center cursor-pointer`}
              onClick={() => setStep(1)}
            >
              Step 1
            </div>
            <div
              className={`w-1/2 ${
                step === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              } p-2 text-center cursor-pointer`}
              onClick={() => setStep(2)}
            >
              Step 2
            </div>
          </div>

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
