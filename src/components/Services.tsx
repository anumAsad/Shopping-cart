import Image from 'next/image'
import React from 'react'
import Delivery from '../../public/delivery-service.png'
import Customer from '../../public/customer-service.png'
import MoneyBack from '../../public/money.png'

const Services = () => {
  return (
    <div className='container flex justify-center items-center w-full mb-10 mt-10 gap-24 bg-white border-2 border-neutral-100'>
        <div className='place-items-center'>
            <Image 
            src={Delivery}
            alt='delivery service'
            width={80}
            height={80}
            />
            <h1 className='font-semibold'>FREE AND FAST DELIVERY</h1>
            <h5 className='font-thin text-xs'>Free delivery for all orders over $140</h5>
        </div>
        <div className='place-items-center'>
        <Image 
            src={Customer}
            alt='customer service'
            width={80}
            height={80}
            />
            <h1 className='font-semibold'>24/7 CUSTOMER SERVICE</h1>
            <h5 className='font-thin text-xs'>Friendly 24/7 customer support</h5>
        </div>
        <div className='place-items-center'>
        <Image 
            src={MoneyBack}
            alt='money back service'
            width={80}
            height={80}
            />
            <h1 className='font-semibold'>MONEY BACK GUARANTEE</h1>
            <h5 className='font-thin text-xs'>We return money within 30 days</h5>
        </div>

    </div>
  )
}

export default Services