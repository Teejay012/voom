import React from 'react'
import { IoRadioButtonOffSharp } from "react-icons/io5";

const Brands = () => {
  return (
    <div className='border-2 border-grey rounded-[5px] w-full mb-8'>
      <h3 className='border-b-2 border-grey font-bold py-2 px-3'>BRANDS</h3>

      <div className='p-3'>
        {["Dell", "Iphone", "Nokia", "Redmi", "Samsung", "Xiomi"].map((content, index) => (
          <button key={index} className='flex items-center gap-2 text-[#A4A4A4] text-[14px]'>
            <IoRadioButtonOffSharp className='text-17px' />
            <p>{content}</p>

            <p>(0)</p>
          </button>))}
      </div>
    </div>
  )
}

export default Brands