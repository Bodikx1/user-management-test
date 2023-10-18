import { ChangeEventHandler, useState } from 'react';
import FormField from '../FormField';

const Step1 = ({
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
      name: 'firstName',
      label: 'First Name',
      placeholder: 'e.g John',
    },
    {
      id: 2,
      name: 'lastName',
      label: 'Last Name',
      placeholder: 'e.g Doe',
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
              value={stepData[formField.name]}
              isEmpty={isEmpty}
            />
          ))}
        </div>
      </form>
    </>
  );
};

export default Step1;
