const Summary = ({ stepData }: { stepData: any }) => {
  return (
    <>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-[#02295a] my-1'>Finishing up</h1>
        <p className='text-[#9699ab] text-[14px]'>Double-check everything looks OK before confirming.</p>
      </div>
      <div className='mb-8'>
        <div className='bg-[#f0f6ff] rounded-xl p-5 mb-5'>
          <div className='font-medium text-[#02295a] flex-center items-center mb-3'>
            <div className='mb-5'>
              {Object.keys(stepData).map((key) => {
                return (
                  <p key={key}>
                    {key}: {stepData[key]}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
