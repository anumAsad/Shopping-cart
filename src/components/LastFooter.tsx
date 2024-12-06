import Image from 'next/image'
import React from 'react'
import { TbSend2 } from 'react-icons/tb'
import BarCode from '../../public/barcode.png'
import Social from '../../public/social.png'


const LastFooter = () => {
  return (
    <div className='container w-full flex justify-around px-[1440] py-[440] bg-black text-white '>
        <div className='w-1170 h-236'>
            <ul className='mt-12 py-[236] px-[1170]'>
                <li className='py-4 font-bold text-lg '>Exclusive</li>
                <li className='py-4 '>Subscribe</li>
                <li className='py-4 '>Get 10% off your first order</li>
                <li className="flex items-center max-w-md mx-auto bg-black border border-gray-300 px-4 py-2">
      <input
        type="text"
        placeholder="Enter your email" 
        className="flex-grow bg-transparent text-white placeholder-gray-500 outline-none"/><TbSend2/>
                </li>
            </ul>
        </div>
        <div className='w-1170 h-236'>

            <ul className='mt-12 py-[236] px-[1170]'>
            <li className='py-4 font-bold text-lg '>Support</li>
            <li className='py-4'>111 Bijoy sarani, Dhaka,<br/>DH 1515, Bangladesh.</li>
            <li className='py-4'>exclusive@gmail.com</li>
            <li className='py-4'>+88015-88888-9999</li>
            </ul>
            </div>

        <div className='w-1170 h-236'>
          <ul className='mt-12 py-[236] px-[1170]'>
            <li className='py-4 font-bold text-lg '>Account</li>
            <li className='py-4'>My Account</li>
            <li className='py-4'>Login / Register</li>
            <li className='py-4'>Cart</li>
            <li className='py-4'>Wishlist</li>
            <li className='py-4'>Shop</li>
          </ul>
        </div>
        <div className='w-1170 h-236'>
          <ul className='mt-12 py-[236] px-[1170]'>
            <li className='py-4 font-bold text-lg '>Quick Link</li>
            <li className='py-4'>Privacy Policy</li>
            <li className='py-4'>Terms Of Use</li>
            <li className='py-4'>FAQ</li>
            <li className='py-4'>Contact</li>
          </ul>
          </div>
        <div className='w-1170 h-236'>
          <ul className='mt-12 py-[236] px-[1170]'>
            <h1 className='py-4 font-bold text-lg '>Download App</h1>
            <h2>Save $3 with App New User Only</h2>
            <li className='py-4'>
              <Image
              src={BarCode}
              alt='Image'
              width={198}
              height={84}
              />
            </li>
            <li>
              <Image
              src={Social}
              alt='Links'
              width={168}
              height={24}
              />
            </li>
          </ul>
        </div>
    </div>
  )
}

export default LastFooter