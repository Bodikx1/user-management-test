import { ChangeEventHandler, useState } from 'react';
import FormField from '../FormField';

const Step2 = ({
  stepData,
  setStepData,
  isEmpty,
}: {
  stepData: any;
  setStepData: ChangeEventHandler<HTMLInputElement>;
  isEmpty: boolean;
}) => {
  const [formFields, setFormFields] = useState([
    {
      id: 1,
      name: 'age',
      label: 'Age',
      placeholder: 'Enter age',
      type: 'number',
    },
  ]);

  return (
    <>
      <form>
        <div className='mb-4 flex flex-col space-y-6 text-[14px]'>
          {formFields.map((formField) => (
            <FormField
              setStepData={setStepData}
              key={formField.id}
              name={formField.name}
              label={formField.label}
              placeholder={formField.placeholder}
              type={formField.type}
              value={stepData[formField.name]}
              isEmpty={isEmpty}
            />
          ))}
        </div>
      </form>
    </>
  );
};

export default Step2;
