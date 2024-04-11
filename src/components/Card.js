import React from 'react';

const Card = ({ name, price, description, bgColor, btnText,textColor,btnbg,btnborder,btncolor }) => {
  return (
    <div className={` ${bgColor}  max-w-xs rounded overflow-hidden  ${textColor} mx-3 p-4`}>
      <div className="px-6 py-4">
        <div className={`font-bold text-[28px] mb-2 ${textColor}`} >{name}</div>
        
      </div>
      <div className="px-6 py-2 text-centre">
        <p className={`text-gray-700  text-[25px]  ${textColor} font-[600] mb-2`}>{price}</p>
        <p className={`text-gray-700  ${textColor} w-[150px]  h-[120px] mb-[20px]`}>{description}</p>
        <button className={`${btnbg} ${btnborder} ${btncolor} font-bold py-2 px-4 w-[160px] rounded mt-2`}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Card;
