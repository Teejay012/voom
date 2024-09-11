"use client"
import React, { useState } from 'react'
import Ratings from '@/app/components/ratings/Ratings';
import Brands from '@/app/components/brands/Brands';
import Color from '@/app/components/color/Color';
import Price from '@/app/components/price/Price';
import ActiveFilter from '@/app/components/activeFilter/ActiveFilter';
import Categories from '@/app/components/categories/Categories';
import Products from '@/app/containers/products/Products';
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";


const page = () => {

  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilterClick = () => {
    setShowFilter(prev => !prev);
  };

  const hideShowFilter = () => {
    setShowFilter(false);
  };


  return (
    <div className="flex items-start p-3 600:p-6 h-full">
      
      <div className={`fixed z-30 pb-[100px] shadow-lg w-[350px] top-0 left-0 bg-[#fff] h-full overflow-auto ${showFilter ? `block` : `hidden`} 850:relative 850:block`}>

        <button className="flex justify-end items-center bg-secondary-color px-3 py-4 text-[#fff] w-full block 850:hidden" onClick={hideShowFilter}>
          <span>CLOSE</span>
          <IoCloseOutline className="text-[25px]" />
        </button>

        <Categories />
        <ActiveFilter />
        <Price />
        <Color />
        <Brands />
        <Ratings />
      </div>

      <div className='w-full'>
        <span className='flex items-center justify-between'>
          <h2 className='text-[19px] 500:text-[22px] font-800 px-4 mb-4'>Audio & Video</h2>
          <HiOutlineAdjustmentsVertical className='text-[22px] block 850:hidden' onClick={handleShowFilterClick} />
        </span>
        <Products />
      </div>
    </div>
  )
}

export default page