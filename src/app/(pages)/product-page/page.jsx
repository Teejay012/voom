"use client";
import Link from 'next/link';
import ProductImages from "@/app/containers/productImages/ProductImages";
import Product from "@/app/components/product/Product";
import apple from "../../../public/assets/apple.png";
import ProductLayoutContent from "@/app/containers/productContent/ProductLayoutContent";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";


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


const ProductPage = () => {
  return (
    <div className="p-6">
        <div className="flex justify-between flex-col items-start gap-10 800:flex-row">
          <ProductImages />

          <div className="flex-1 text-[16px]">
            <div className="pb-5 border-b-[2px] border-light-grey">
              <h2 className="font-[500] text-[25px]">Retina Display 12 Inch</h2>

              <p className="my-2 font-[600]">Brand: <span className="text-secondary-color">Dell</span></p>

              <h2 className="font-bold text-[26px]">$200.00</h2>
            </div>

            <div className="py-5 border-b-[2px] border-light-grey">
              <p className="font-[600] mb-2">Sold By: <span className="text-secondary-color">JAY STORE</span></p>

              <h2 className="text-secondary-color font-bold text-[20px]">20km From You</h2>
            </div>

            <div className="py-5 border-b-[2px] border-light-grey">

              <span className="flex items-center gap-3 flex-wrap w-full">
                <span className="flex items-center gap-7 px-4 border-2 border-grey rouded-[50px] rounded-[50px] h-[50px]">
                  <button className="text-[20px]">-</button>
                  <input type="number" value={1} className="h-full number-input outline-none border-0 text-center w-[50px]"/>
                  <button className="text-[20px]">+</button>
                </span>
                
                <button className="flex items-center w-full justify-center gap-3 rounded-[50px] py-3 px-8 bg-[#000] text-[#fff] hover:bg-secondary-color duration-300">
                  <BsCart3 className="text-[20px]" />
                  <p>Add to cart</p>
                </button>

                <button className="flex justify-center rounded-[50px] w-full border-[1px] py-3 px-8 bg-secondary-color text-[#fff] hover:bg-transparent hover:text-secondary-color hover:border-secondary-color duration-300">Buy Now</button>
              </span>

                
              <span className="flex gap-1 items-center mt-4 cursor-pointer group">
                <div className="p-2 border-1 border-grey text-[20px] rounded-[50px] cursor-pointer group-hover:bg-secondary-color group-hover:text-[#fff] duration-300">
                  <IoMdHeartEmpty />
                </div>
                
                <p className="group-hover:text-secondary-color duration-300">Add to wishlist</p>
              </span>
            </div>

            <div className="py-5">

              <p className="flex items-center gap-2"><span className="font-bold">SKU: </span>D1116</p>

              <p className="flex items-center gap-2">
                <span className="font-bold">Categories: </span>
                <span className="flex items-center gap-1 flex-wrap">
                  <a href="#" className="text-secondary-color">Audio & Video,</a>  
                  <a href="#" className="text-secondary-color">Computer & Laptop,</a>  
                </span>
              </p>

              <p className="flex items-center gap-2">
                <span className="font-bold">Tags: </span>
                <span className="flex items-center gap-2 flex-wrap">
                  <a href="#" className="text-secondary-color">Hot,</a>  
                  <a href="#" className="text-secondary-color">Men</a>
                </span>
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a href="#" className="p-3 rounded-[50%] bg-[#3B5998] text-[#fff] hover:bg-secondary-color duration-300"><FaFacebookF /></a>
              <a href="#" className="p-3 rounded-[50%] bg-[#55ACEE] text-[#fff] hover:bg-secondary-color duration-300"><FaXTwitter /></a>
              <a href="#" className="p-3 rounded-[50%] bg-[#FCAF45] text-[#fff] hover:bg-secondary-color duration-300"><LuInstagram /></a>
            </div>
          </div>
        </div>




        <div className="mt-[70px]">
            <ProductLayoutContent />
        </div>





        <div className="py-10">
            <h2 className="text-center font-bold text-[30px]">Related Products</h2>

            <div className="flex overflow-auto items-center justify-between mt-5">
              {productContents.map((content, index) => (
                  <div key={index}>
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
                  </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default ProductPage