const Step1 = () => (
  <>
    <div className='mb-4'>
      <label className='block font-medium mb-2 text-gray-700' htmlFor='first-name'>
        First Name
      </label>
      <input type='text' id='first-name' name='first-name' className='w-full border border-gray-400 p-2' />
    </div>
    <div className='mb-4'>
      <label className='block font-medium mb-2 text-gray-700' htmlFor='last-name'>
        Last Name
      </label>
      <input type='text' id='last-name' name='last-name' className='w-full border border-gray-400 p-2' />
    </div>
  </>
);

export default Step1;
