import { useState, useEffect } from 'react';

const Summary = ({}) => {
  // useEffect(() => {
  //   // console.log(planPrice);
  //   // console.log(addonsPrice);
  //   // console.log(grandTotal);
  //   // console.log(selectedPlan);
  //   // console.log(selectedAddons);
  // }, [selectedPlan, selectedAddons]);

  return (
    <>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-[#02295a] my-1'>Finishing up</h1>
        <p className='text-[#9699ab] text-[14px]'>Double-check everything looks OK before confirming.</p>
      </div>
      <div className='mb-8'>
        <div className='bg-[#f0f6ff] rounded-xl p-5 mb-5'>
          <div className='font-medium text-[#02295a] flex justify-between items-center mb-3'>
            <div className='mb-5'>
              <p>some data</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
