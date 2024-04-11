import React from 'react';

const FeaturesList = ({ name}) => {
  return (
    <div className=" w-[196px] px-[45px] py-[20px]">
        <div className={`font-bold text-xl  h-[72px] text-center `} >{name}</div>
      
      
    </div>
  );
};

export default FeaturesList;