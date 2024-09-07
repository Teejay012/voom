import React from 'react';
import Image from 'next/image';
import woman from "../../../public/assets/woman.png";
import apple from "../../../public/assets/apple.png";
import Product from '@/app/components/product/Product';
import { FaLocationDot } from "react-icons/fa6";
import { BsFillPhoneFill } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";


const productContents = [
  {
      name: "Iphone 15 Pro Max",
      image: apple,
      category: "Phone & Tablets",
      realPrice: 1500000,
      promoPrice: 1000000,
      rating: 0,
      sold: 0,
      discount: 33,
  },
  {
      name: "Iphone 15 Pro Max",
      image: apple,
      category: "Phone & Tablets",
      realPrice: 1500000,
      promoPrice: 1000000,
      rating: 0,
      sold: 0,
      discount: 33,
  },
  {
      name: "Iphone 15 Pro Max",
      image: apple,
      category: "Phone & Tablets",
      realPrice: 1500000,
      promoPrice: 1000000,
      rating: 0,
      sold: 0,
      discount: 33,
  },
  {
      name: "Iphone 15 Pro Max",
      image: apple,
      category: "Phone & Tablets",
      realPrice: 1500000,
      promoPrice: 1000000,
      rating: 0,
      sold: 0,
      discount: 33,
  },
  {
      name: "Iphone 15 Pro Max",
      image: apple,
      category: "Phone & Tablets",
      realPrice: 1500000,
      promoPrice: 1000000,
      rating: 0,
      sold: 0,
      discount: 33,
  },
  {
      name: "Iphone 15 Pro Max",
      image: apple,
      category: "Phone & Tablets",
      realPrice: 1500000,
      promoPrice: 1000000,
      rating: 0,
      sold: 0,
      discount: 33,
  },
  {
      name: "Iphone 15 Pro Max",
      image: apple,
      category: "Phone & Tablets",
      realPrice: 1500000,
      promoPrice: 1000000,
      rating: 0,
      sold: 0,
      discount: 33,
  },
  {
      name: "Iphone 15 Pro Max",
      image: apple,
      category: "Phone & Tablets",
      realPrice: 1500000,
      promoPrice: 1000000,
      rating: 0,
      sold: 0,
      discount: 33,
  },
]

const Store = () => {
  return (
    <div className='p-3 500:p-6'>
        <div className='relative h-[70vh] inset-0'>
            <Image
                src={woman}
                alt='woman'
                className='w-full h-full object-center object-cover'
            />

            <div className='absolute p-2 top-0 left-0 h-full 500:h-[82%] bg-[#000] bg-opacity-70 w-full 500:w-[400px] font-bold z-20 text-[#fff] flex flex-col items-center justify-center'>
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

                <button className='bg-secondary-color text-[#fff] py-2 px-6 transform hover:scale-110 duration-300'>Contact Now</button>
              </div>
            </div>
        </div>



        <div className='flex items-center gap-3 border-2 border-grey pl-4 h-[50px] w-full my-3 rounded-[50px]'>
            <input type="text" className='w-full h-full outline-none border-0' placeholder='Search for store...' />
            <button className='bg-[#000] hover:bg-secondary-color duration-300 py-2 px-6 font-bold border-2 border-[#fff] rounded-[50px] text-[#fff] h-full'>
                SEARCH
            </button>
        </div>

        <select name="sort" id="sort" className='border-2 outline-none py-2 px-4 border-grey w-full'>
            <option value="Most Popular">Default Sorting</option>
            <option value="Most Popular">Sort by popularity</option>
            <option value="Most Popular">Sort by average rating</option>
            <option value="Most Popular">Sort by latest</option>
            <option value="Most Popular">Sort by price: low to high</option>
            <option value="Most Popular">Sort by price: high to low</option>
        </select>





        {/* /////////////////////// PRODUCTS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

        <h2 className="py-3 text-[30px] font-bold w-full mt-10 mb-6 border-b-[3px] border-secondary-color">My Products</h2>

        <div className='flex flex-wrap items-center justify-between '>
            {productContents.map((content, index) => (
                <div key={index} className='my-5'>
                    <a href="#">
                        <Product
                            name={content.name}
                            image={content.image}
                            category={content.category}
                            realPrice={content.realPrice}
                            promoPrice={content.promoPrice}
                            rating={content.rating}
                            sold={content.sold}
                            discount={content.discount}
                        />
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Store