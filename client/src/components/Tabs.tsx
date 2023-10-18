const Tabs = ({
  tabs,
  activeIndex,
  onSetActive,
}: {
  tabs: Array<string>;
  activeIndex: number;
  onSetActive: Function;
}) => {
  const activeClass = 'bg-blue-500 text-white';
  const nonActiveClass = 'bg-gray-200';

  return (
    <>
      <div className='flex mb-4'>
        {tabs.map((tabName, index) => {
          return (
            <div
              key={index}
              className={`w-1/2 border-r border-gray-400 ${
                activeIndex === index + 1 ? activeClass : nonActiveClass
              } p-2 text-center cursor-pointer`}
              onClick={() => onSetActive(index + 1)}
            >
              {tabName}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tabs;
