import React from 'react'
import Card from './Card'
import Features from './Features'
import { FaChevronDown } from "react-icons/fa";
import FeatureTable from './FeatureTable'
import FAQ from './FAQ';

const Hero = () => {
  return (
    <div className='mt-[70px]'>
 
        <div className='mx-auto text-center '>
            <h1 className='font-[700] text-[50px]'>Scheduling should be easy.</h1>
            <h1 className='font-[700] text-[50px] text-[#006bff]'>Start Free</h1>

        </div>
        <div className="card flex mt-8 ">
            <Card
                name="Basic"
                price="Always Free"
                description="When you just want the basics"
                bgColor="bg-gray-100"
                btnText="Get Started"
                btnbg="bg-white"
                btncolor="text-[#006bff]"
                btnborder="border-2 border-[#006bff]"
            />
            <Card
                name="Essentials"
                price="$8/seat/mo"
                description="When you need powerful scheduling automation"
                bgColor="bg-gray-100"
                btnText="Start Essentials"
                btnbg="bg-white"
                btncolor="text-[#006bff]"
                btnborder="border-2 border-[#006bff]"
            />
            <Card
                name="Professional"
                price="$12/seat/mo"
                description="When you need customization, integrations and basic team features"
                bgColor="bg-gray-200"
                btnText="Buy Now"
                btnbg="bg-[#006bff]"
                btncolor="text-white"
              
                btnborder="border-2 border-[#006bff]"
              
            />
            <Card
                name="Teams"
                price="$16/seat/mo"
                description="When your team needs to align on a scheduling process and collaborate efficiently"
                bgColor="bg-gray-200"
                btnText="Buy Now"
                btnbg="bg-[#006bff]"
                btncolor="text-white"
              
                btnborder="border-2 border-[#006bff]"
              
            />
            <Card
                name="Enterprise"
                price="Contact us"
                description="When your 30+ members team needs advanced security, control and support"
                bgColor="bg-[#0F2943]"
                btnText="Buy Now"
                textColor="text-white"
                btnbg="bg-[#0F2943]"
                btncolor="text-white"
                btnborder="border-2 border-white"
            />
        </div>
        <div className="mt-6">
            <Features/>

        </div>
        <div className='mt-[200px] '>
            <div className=' flex justify-between pl-6 py-3 ml-3 mr-[13px] rounded text-[20px] font-[700] text-[#006bff] border-2'>Core Features
            <div className='mr-3'>

             <FaChevronDown />
            </div>
            </div>
        <FeatureTable/>
        </div>
         <div className='mb-2'>
            <div className=' flex justify-between pl-6 py-3 ml-3 mr-[13px] rounded text-[20px] font-[700]  border-2'>Teams
            <div className='mr-3'>

             <FaChevronDown />
            </div>
            </div>
        </div>
         <div className='mb-2'>
            <div className=' flex justify-between pl-6 py-3 ml-3 mr-[13px] rounded text-[20px] font-[700]  border-2'>Customizations
            <div className='mr-3'>

             <FaChevronDown />
            </div>
            </div>
        </div>
         <div className='mb-2'>
            <div className=' flex justify-between pl-6 py-3 ml-3 mr-[13px] rounded text-[20px] font-[700]  border-2'>Integrations
            <div className='mr-3'>

             <FaChevronDown />
            </div>
            </div>
        </div>
         <div className='mb-2'>
            <div className=' flex justify-between pl-6 py-3 ml-3 mr-[13px] rounded text-[20px] font-[700]  border-2'>Bussiness Support
            <div className='mr-3'>

             <FaChevronDown />
            </div>
            </div>
        </div>
        <FAQ/>
            

        
        
        
    </div>
  )
}

export default Hero