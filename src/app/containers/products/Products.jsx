"use client"
import apple from "../../../public/assets/apple.png";
import Product from '@/app/components/product/Product';
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

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



const Products = () => {

    const [showDistances, setShowDistances] = useState(false);

    const handleDistancesClick = () => {
        setShowDistances(prev => !prev);
    };

    const [showSorts, setShowSorts] = useState(false);

    const handleSortsClick = () => {
        setShowSorts(prev => !prev);
    };

  return (
    <div className="h-[50px] w-full h-full 600:px-2">
        <div className=" bg-light-grey flex flex-col rounded-[50px] 400:h-[50px] text-[13px] items-center justify-between px-4 400:flex-row">
            <div className="relative my-2 400:my-0">
                <span className="flex items-center gap-2 cursor-pointer bg-[#fff] py-1 px-2 rounded-[50px]" onClick={handleDistancesClick}>
                    <p>Show 5km from you</p>
                    <FaAngleDown />
                </span>
                {showDistances && 
                <div className="absolute top-[40px] right-0 bg-[#fff] z-10 shadow-lg">
                    <p className="px-3 py-2 text-[13px] hover:bg-light-grey cursor-pointer">10km from you</p>
                    <p className="px-3 py-2 text-[13px] hover:bg-light-grey cursor-pointer">20km from you</p>
                    <p className="px-3 py-2 text-[13px] hover:bg-light-grey cursor-pointer">30km from you</p>
                </div>
                }
            </div>

            <div className="relative my-2 400:my-0">
                <span className="flex items-center gap-2 cursor-pointer bg-[#fff] py-1 px-2 rounded-[50px]" onClick={handleSortsClick}>
                    <p>Default Sorting</p>
                    <FaAngleDown />
                </span>
                
                {showSorts &&
                <div className="absolute top-[40px] bg-[#fff] z-10 shadow-md w-[200px] right-0">
                    <p className="px-3 py-2 text-[13px] hover:bg-light-grey cursor-pointer">Default Sorting</p>
                    <p className="px-3 py-2 text-[13px] hover:bg-light-grey cursor-pointer">Sort by popularity</p>
                    <p className="px-3 py-2 text-[13px] hover:bg-light-grey cursor-pointer">Sort by average rating</p>
                    <p className="px-3 py-2 text-[13px] hover:bg-light-grey cursor-pointer">Sort by latest</p>
                    <p className="px-3 py-2 text-[13px] hover:bg-light-grey cursor-pointer">Sort by price: low to high</p>
                    <p className="px-3 py-2 text-[13px] hover:bg-light-grey cursor-pointer">Sort by price: high to low</p>
                </div>
                }
            </div>
        </div>

        <div className='grid grid-cols-2 500:grid-cols-3 1000:grid-cols-4 gap-3 '>
            {productContents.map((content, index) => (
                <div key={index} className="my-3">
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

export default Products