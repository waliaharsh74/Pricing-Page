import React, { useState, useEffect } from 'react';

import Box from './Box';


const Features = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 691; // Change this value according to your needs
      const thresholddown = 3000; // Change this value according to your needs
      const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPos > threshold) {
        setIsSticky(true);
       
      } else {
        setIsSticky(false);
      }
      if (currentScrollPos > thresholddown) {
        setIsSticky(false);
      } 
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isSticky ? 'fixed top-0 left-0 w-full bg-white  z-10' : ''
      }`}
    >
     <div className='flex mt-2 mb-2'>
        <div className="mt-2 w-[230px] mx-3 ">
        <h3 className='font-[700]'>Features</h3>
        <h1 className='font-[700] text-[25px]'>Features by plan</h1>
        <p> Find the subscription that makes the most sense for you or your team</p>

        </div>
        
        <Box name="Basic"
        price="Free"
        btnText="Sign up"
        btnborder="border-2 border-black rounded"
        borderColor="border-2"
        />
        <Box name="Essentials"
        price="$8"
        btnText="Sign up"
        btnborder="border-2 border-black rounded"
         borderColor="border-2"
        
        />
        <Box name="Professional"
        price="$12"
        btnText="Sign up "
        btncolor="text-white"
        btnborder="border-2 border-[#006bff] rounded"
        btnbg="bg-[#006bff]"
        
         borderColor="border-2"
        />
        <Box name="Teams"
        price="$16"
        btnText="Sign up"
        btnborder="border-2 border-black rounded"
         borderColor="border-2"
        />
        <Box name="Enterprise"
        price="-"
        btnText="Contact Sales"
       btnborder="border-2 border-black rounded"
         borderColor="border-2"
        />

     </div>
     
     
    
    </div>
  );
};

export default Features;
