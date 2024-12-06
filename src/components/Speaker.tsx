import Image from 'next/image'
import Hours from '../../public/hours.png'
import Days from '../../public/days.png'
import Minutes from '../../public/minutes.png'
import Seconds from '../../public/seconds.png'
import Speakers from '../../public/jumbospeaker.png'
import React from 'react'

const Speaker = () => {
  return (
    <div className="container w-4/5 h-96 ml-40 justify-center mt-10 bg-black border-2 border-neutral-100 flex">
        <div className='w-1/2 px-20 pt-10'>
            <div className='font-bold text-sm text-green-500'>Categories</div>
            <div className='text-white pt-5 text-5xl'>Enhance Your </div>
            <div className='text-white pt-5 mb-6 text-5xl'>Music Experience</div>
            <div className='flex gap-4 mb-6'>
                <div>
                    <Image
                    src={Hours}
                    alt='Time'
                    width={62}
                    height={62}
                    />
                </div>
                <div>
                    <Image
                    src={Days}
                    alt='Time'
                    width={62}
                    height={62}
                    />
                </div>
                <div>
                    <Image
                    src={Minutes}
                    alt='Time'
                    width={62}
                    height={62}
                    />
                </div>
                <div>
                    <Image
                    src={Seconds}
                    alt='Time'
                    width={62}
                    height={62}
                    />
                </div>
            </div>
            <div>
                <button className='text-white bg-green-500'>Buy Now!</button></div>
        </div>
        <div className='w-1/2'>
            <Image
            src={Speakers}
            alt='Img'
            width={568}
            height={330}
            />
        </div>
    </div>
  )
}

export default Speaker
