import Image from 'next/image';
import React from 'react';
import Pic from '../../../public/signup.png'


const Signin = () => {
  return (
    <div className='container flex items-center justify-around px-[1440] py-16'>
      <div>
        <Image
        src={Pic}
        alt='Image'
        width={805}
        height={781}
        />
      </div>
      <div className='px-[371] py-[530] items-center'>
        <h1 className='font-bold text-2xl mb-6'>Log in to Exclusive</h1>
        <h5 className='font-thin text-xs mb-6'>Enter your details below</h5>
        <form>

        

        <div className="form-group mb-6 ">
          <label htmlFor="emailOrPhone"></label>
          <input
            type="text"
            id="emailOrPhone"
            name="emailOrPhone"
            className="mt-1 block w-full border-b-2 border-gray-200 bg-transparent focus:border-gray-400 focus:outline-none text-gray-900"
            placeholder="Email or Phone Number"
          />
        </div>

        <div className="form-group mb-6">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full border-b-2 border-gray-200 bg-transparent focus:border-gray-400 focus:outline-none text-gray-900"
            placeholder="Password"
          />
        </div>
        <div className='flex items-center place-items-center gap-6'>

        <button type="submit" className='w-1/3 h-12 mb-6 bg-red-500'>Log in</button>
        
        <button className="hover:underline hover:click text-center text-red-500 text-sm">
        Forget Password?
        </button>
        </div>
      </form>

      
      </div>
      
    </div>
  );
};

export default Signin;