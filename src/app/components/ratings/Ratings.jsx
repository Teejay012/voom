import React from 'react'
import { IoRadioButtonOffSharp } from "react-icons/io5";
import { IoRadioButtonOn } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <div className='border-2 border-grey rounded-[5px] w-full'>
      <h3 className='border-b-2 border-grey font-bold py-2 px-3'>RATINGS</h3>

      <div className='p-3'>
        {[1, 2, 3, 4, 5].map((content, index) => (
          <button key={index} className='flex items-center gap-2 text-[#A4A4A4] text-[14px]'>
            <IoRadioButtonOffSharp className='text-17px' />
            <span className='flex items-center gap-1'>
                <FaStar className='my=1' />
                <FaStar className='my=1' />
                <FaStar className='my=1' />
                <FaStar className='my=1' />
                <FaStar className='my=1' />
            </span>

            <p>(0)</p>
          </button>))}
      </div>
    </div>
  )
}

export default Rating