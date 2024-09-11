import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";
import apple from "../../../public/assets/apple.png";

const Product = ({ name, image, category, realPrice, promoPrice, rating, sold, discount}) => {
  return (
    <Link href={"./product-page"}>
        <div className='product_container relative border-2 group border-[#f3f3f3] flex flex-col min-w-[170px] w-full max-w-[250px] h-[370px]'>
            <div className='relative w-full h-[220px] flex items-center justify-center'>
                <Image
                    src={image}
                    alt="Iphone"
                    className="w-[130px] object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />

                <span className='font-bold text-[10px] px-2 py-[.7px] bg-secondary-color text-[#fff] rounded-[50px] absolute top-5 left-5'>-{discount}%</span>
            </div>
            <div className='flex flex-col gap-[1.4px] font-[500] text-primary-color p-[1.5px] 600:p-3 '>
                <span className='flex items-center gap-1'>
                    <i className='flex items-center gap-[.5px] text-[13px]'>
                        <FaStar className='' />
                        <FaStar className='' />
                        <FaStar className='' />
                        <FaStar className='' />
                        <FaStar className='' />
                    </i>

                    <p className='text-[10px]'>({rating})</p>
                </span>

                <h4 className='text-[15px] text-blue'>{name}</h4>

                <p className='text-[13px]'>{category}</p>
                
                <span className='flex text-[13px] items-center gap-3'>
                    <span className='line-through flex items-center'>
                        <TbCurrencyNaira className='text-[17px] mr-[.7px]' />
                        <p>{realPrice}</p>
                    </span>
                    
                    <span className='text-[14px] text-[#ff4545] flex items-center'>
                        <TbCurrencyNaira className='text-[16px] mr-[.7px]' />
                        <p className=''>{promoPrice}</p>
                    </span>
                    
                </span>

                <span className='flex items-center gap-4 absolute bottom-5 right-5'>
                    <IoMdHeartEmpty className='text-[22px] hover:text-secondary-color cursor-pointer transition duration-300 transform hover:-translate-y-2' />
                    <BsCart3 className='text-[22px] hover:text-secondary-color cursor-pointer transition duration-300 transform hover:-translate-y-2' />
                </span>
            </div>
        </div>
    </Link>
  )
}

export default Product