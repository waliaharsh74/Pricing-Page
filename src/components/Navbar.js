import React from 'react';
import { FaChevronDown } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className=" p-4 flex justify-between items-center">
      {/* Left side - Logo */}
      <div className="flex items-center">
        <img src="https://marketing-assets.calendly.com/media/logo.svg" alt="Logo" className="h-8 w-auto mr-2" />
        
      </div>

      {/* Middle - Navigation Links */}
      <div className="flex justify-center font-[700]">
        <a href="#" className="  px-4 py-2">Individual</a>
        <a href="#" className="  px-4 py-2">Teams</a>
        <a href="#" className="  px-4 py-2">Enterprise</a>
        <div className=" group relative">
          <button className="  px-4 py-2 flex items-center">
            Product
            <div className="mt-1 ml-1">

            <FaChevronDown />
            </div>
          </button>
          <div className="absolute  rounded shadow-lg mt-2 hidden group-hover:block ">
            <a href="#" className="block px-4 py-2">Product 1</a>
            <a href="#" className="block px-4 py-2 ">Product 2</a>
       
          </div>
        </div>
        <a href="#" className="  px-4 py-2">Pricing</a>
        <div className=" group relative">
          <button className="  px-4 py-2 flex items-center">
            Resouces
            <div className="mt-1 ml-1">

            <FaChevronDown />
            </div>
          </button>
          <div className="absolute   rounded shadow-lg mt-2 hidden group-hover:block ">
            <a href="#" className="block px-4 py-2 ">Resource 1</a>
            <a href="#" className="block px-4 py-2 ">Resource 2</a>
           
          </div>
        </div>
      </div>

      {/* Right side - Login/Get Started */}
      <div className="flex items-center font-[700]">
        <a href="#" className="  px-4 py-2">Login</a>
        <a href="#" className="bg-[#006bff] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Get Started</a>
      </div>
    </nav>
  );
};

export default Navbar;
