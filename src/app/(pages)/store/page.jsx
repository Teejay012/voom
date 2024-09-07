import React from 'react';
import Image from 'next/image';
import woman from "../../../public/assets/woman.png";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillPhoneFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const Store = () => {
  return (
    <div className='p-6'>
        <div className='relative h-[70vh] inset-0'>
            <Image
                src={woman}
                alt='woman'
                className='w-full h-full object-center object-cover'
            />

            <div className='absolute p-2 top-0 left-0 h-full 500:h-[80%] bg-[#000] bg-opacity-70 w-full 500:w-[400px] font-bold z-20 text-[#fff] flex flex-col items-center justify-center'>
              <div className='w-[100px] h-[100px] rounded-[50%] overflow-hidden'>
                <Image
                    src={woman}
                    alt='woman'
                    className='w-full h-full object-center object-cover'
                />
              </div>

              <h2 className='text-[25px] my-2'>Milise</h2>

              <div className=''>
                <span className='flex items-center gap-2 my-3 text-[15px]'>
                  <FaLocationDot />
                  <p>Demo, Demo, Select an option…, Vietnam</p>
                </span>

                <span className='flex items-center gap-2 my-3 text-[15px]'>
                  <BsFillPhoneFill />
                  <p>123456789</p>
                </span>

                <span className='flex items-center gap-2 my-3 text-[15px]'>
                  <BsFillStarFill />
                  <p>5.00 rating from 2 reviews</p>
                </span>

                <span className='flex items-center gap-2 my-3 text-[15px]'>
                  <FaShoppingCart />
                  <p>Store Closed</p>
                </span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Store