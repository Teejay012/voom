import Image from 'next/image';
import apple from "../../../public/assets/apple.png";
import Product from '@/app/components/product/Product';
import { FaArrowRight } from "react-icons/fa";

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

const LatestProducts = () => {
  return (
    <div className='latestProducts_container p-6 relative'>
        <span className=''>
            <h2 className='text-[30px] py-2 border-b-[4px] border-secondary-color font-bold'>Latest Products</h2>
        </span>

        <div className='flex overflow-auto items-center justify-between '>
            {productContents.map((content, index) => (
                <div key={index}>
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

            <div className='absolute p-3 bg-[#000] rounded-[50%] top-[50%] right-5 cursor-pointer shadow-md transition-transform duration-300 hover:scale-105 flex items-center justify-center'><FaArrowRight className='text-[#fff] text-[20px]'/></div>
        </div>
    </div>
  )
}

export default LatestProducts