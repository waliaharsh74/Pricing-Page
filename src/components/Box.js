import React from 'react';

const Box = ({ name, price, bgColor, btnText,btnbg,btnborder,btncolor ,borderColor}) => {
  return (
    <div className={` ${bgColor} ${borderColor}  max-w-xs rounded overflow-hidden   mx-3 p-4`}>
      <div className="px-6 py-0 text-center">
        <div className={`font-bold  mb-2 text-[20px] `} >{name}</div>
        
      </div>
      <div className="px-2 py-1">
        <p className={`text-gray-700 text-base text-center text-[20px] font-[700] mb-2 `}>{price}</p>
    
        <button className={`${btnbg} ${btnborder} ${btncolor} w-[130px] font-bold py-2 px-2 rounded mt-2`}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Box;