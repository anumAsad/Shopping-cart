import Image from 'next/image'
import React from 'react'
import Frame from "../../public/frame-560.png"
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className='container w-full flex justify-around border-t-2 border-neutral-100'>
        <div>
            <ul className='w-[217] h-[344] border-r-2 border-neutral-100'>
                <li className='py-2'>Woman's Fashion<IoIosArrowForward /></li>
                <li className='py-2'>Men's Fashion<IoIosArrowForward /></li>
                <li className='py-2'>Electronic</li>
                <li className='py-2'>Home & Lifestyle</li>
                <li className='py-2'>Medicine</li>
                <li className='py-2'>Sports & Outdoor</li>
                <li className='py-2'>Baby’s & Toys</li>
                <li className='py-2'>Groceries & Pets</li>
                <li className='py-2'>Health & Beauty</li>
            </ul>
        </div>
        <div>
            <Image 
            src={Frame}
            alt='Image Loading'
            width={892}
            height={344}
            />
        </div>
    </div>
  )
}

export default Hero