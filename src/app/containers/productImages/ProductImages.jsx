import Image from 'next/image';
import apple from "../../../public/assets/apple.png";
import { BsArrowsAngleExpand } from "react-icons/bs";

const ProductImages = () => {
  return (
    <div className="w-full flex flex-col flex-1">
        <div className='w-full h-[70vh] p-6 border-2 relative border-grey rounded-[10px] flex justify-center items-center overflow-hidden'>
            <Image
                src={apple}
                alt='apple'
                className="w-[300px] object-center"
            />

            <div className='absolute top-5 right-5 border-[1px] border-grey p-3 rounded-[50%] hover:bg-secondary-color hover:text-[#fff] font-[500] cursor-pointer'>
                <BsArrowsAngleExpand />
            </div>
        </div>

        <span className='flex items-center overflow-auto'>
            <div className='border-[1px] cursor-pointer p-8 border-secondary-color rounded-[10px] flex justify-center items-center overflow-hidden mr-4 mt-4'>
                <Image
                    src={apple}
                    alt='apple'
                    className="w-[500px] 600:w-[100px]"
                />
            </div>
            <div className='border-[1px] cursor-pointer p-8 border-grey hover:border-secondary-color rounded-[10px] flex justify-center items-center overflow-hidden mr-4 mt-4'>
                <Image
                    src={apple}
                    alt='apple'
                    className="w-[500px] 600:w-[100px]"
                />
            </div>
            <div className='border-[1px] cursor-pointer p-8 border-grey hover:border-secondary-color rounded-[10px] flex justify-center items-center overflow-hidden mr-4 mt-4'>
                <Image
                    src={apple}
                    alt='apple'
                    className="w-[500px] 600:w-[100px]"
                />
            </div>
        </span>
    </div>
  )
}

export default ProductImages