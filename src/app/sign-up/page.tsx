import Image from 'next/image';
import React from 'react';
import Pic from '../../../public/signup.png'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';


const Signup = () => {
  return (
    <div className='container w-full flex items-center justify-around px-[1440] py-16'>
      <div>
        <Image
        src={Pic}
        alt='Image'
        width={805}
        height={781}
        />
      </div>
      <div className='px-[371] py-[530] items-center'>
        <h1 className='font-bold text-2xl mb-6'>Create an account</h1>
        <h5 className='font-thin text-xs mb-6'>Enter your details below</h5>
        <form>

        <div className="form-group mb-6">
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border-b-2 border-gray-200 bg-transparent focus:border-gray-400 focus:outline-none text-gray-900"
            placeholder="Name"
          />
        </div>

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

        <button type="submit" className='w-full h-14 mb-6 bg-red-500'>Create an Account</button>
      </form>

      <button
          className="w-full flex items-center justify-center mb-6 py-2 px-4 border-2 border-gray-300 rounded-md text-gray-900 font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <FcGoogle className="mr-2 text-lg" /> {/* Google Icon */}
          Sign In with Google
        </button>
      <p>
        Already have an account?{' '}
        <Link href="/sign-in" className="hover:underline">
          Sign In
          </Link>
      </p>
      </div>
      
    </div>
  );
};

export default Signup;