import Image from 'next/image';
import Phones from '../../public/cellphone.png'
import Computer from '../../public/computer.png'
import Watch from '../../public/watch.png'
import Camera from '../../public/camera1.png'
import Headphones from '../../public/headphone.png'
import Games from '../../public/gamepad2.png'
import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Category = () => {
  
  return (
    <div className='container w-full px-[120px] py-[493] mt-10 border-2 border-neutral-100 '>
            <div className='text-red-500 font-bold border-l-8 border-red-500 pl-3 ml-1'>
                <h3 >Categories</h3></div>
                <div className="mb-6 flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Browse By Category</h1>
                <div className='flex gap-4 text-2xl'>
        <button className="bg-gray-200 text-black rounded-full">
        <IoIosArrowRoundBack />
        </button>
        <button className="bg-gray-200 text-black rounded-full">
        <IoIosArrowRoundForward />
        </button>
      </div>
      </div>
      <div className='flex justify-around relative items-center px-[50px] py-[50px] pt-10 border rounded-lg cursor-pointer overflow-hidden text-black'>
        <div className='relative flex flex-col justify-center items-center border h-36 w-44 border-gray-300 hover:bg-red-500'>
          <div>
          <Image
          src={Phones}
          alt='img'
          width={40}
          height={40}
          />
          </div>
          Phones</div>
        <div className='relative flex flex-col justify-center items-center border h-36 w-44 border-gray-300 hover:bg-red-500'>
          <div>
          <Image
          src={Computer}
          alt='img'
          width={40}
          height={40}
          />
          </div>
          Computers</div>
        <div className='relative flex flex-col justify-center items-center border h-36 w-44 border-gray-300 hover:bg-red-500'>
          <div>
          <Image
          src={Watch}
          alt='img'
          width={40}
          height={40}
          />
          </div>
          SmartWatch</div>
        <div className='relative flex flex-col justify-center items-center border h-36 w-44 border-gray-300 hover:bg-red-500'>
          <div>
          <Image
          src={Camera}
          alt='img'
          width={40}
          height={40}
          />
          </div>
          Camera</div>
        <div className='relative flex flex-col justify-center items-center border h-36 w-44 border-gray-300 hover:bg-red-500'>
          <div>
          <Image
          src={Headphones}
          alt='img'
          width={40}
          height={40}
          />
          </div>
          HeadPhones</div>
        <div className='relative flex flex-col justify-center items-center border h-36 w-44 border-gray-300 hover:bg-red-500'>
          <div>
          <Image
          src={Games}
          alt='img'
          width={40}
          height={40}
          />
          </div>
          Gaming</div>
      </div>
      </div>
  );
}

export default Category