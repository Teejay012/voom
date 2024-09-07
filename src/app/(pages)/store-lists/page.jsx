import React from 'react'
import StoreCard from '@/app/components/storeCard/StoreCard';
import woman from "../../../public/assets/woman.png";
import { IoIosSearch } from "react-icons/io";

const storeCardContent = [
    {
        profileImage: woman,
        coverImage: woman,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: woman,
        coverImage: woman,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: woman,
        coverImage: woman,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: woman,
        coverImage: woman,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: woman,
        coverImage: woman,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: woman,
        coverImage: woman,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: woman,
        coverImage: woman,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: woman,
        coverImage: woman,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: woman,
        coverImage: woman,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
    {
        profileImage: woman,
        coverImage: woman,
        storeName: "Milise",
        storeRating: 5,
        storeAdress: "1430 Satrkey, Pretoria, Afghanistan",
        storeNummber: "08168016104",
        status: "Open"
    },
]

const StoreLists = () => {
  return (
    <div className='p-6 '>
        <div className='flex justify-between items-center flex-wrap shadow-lg 600:h-[100px] w-full px-3'>
            <span className='flex items-center gap-2 mb-5 600:mb-[0px]'>
                <p>Total stores showing: </p>
                <p>6</p>
            </span>

            <div className='flex items-center gap-4 flex-wrap'>
                <div className='flex items-center gap-3 border-2 border-grey pl-4 h-[50px] w-[300px] rounded-[50px]'>
                    <input type="text" className='w-full h-full outline-none border-0' placeholder='Search for store...' />
                    <button className='bg-[#000] hover:bg-secondary-color duration-300 p-3 rounded-[50%] text-[#fff] h-full'>
                        <IoIosSearch className='text-[20px]' />
                    </button>
                </div>

                <div className='flex items-center gap-1'>
                    <p>Sort by: </p>
                   <select name="sort" id="sort" className='border-2 outline-none py-2 px-4 border-grey'>
                        <option value="Most Popular">Most Popular</option>
                        <option value="Most Popular">Most Resent</option>
                        <option value="Most Popular">Random</option>
                    </select>
                </div> 
            </div>
        </div>

        <div className="flex flex-wrap items-start justify-between mt-10">
            {storeCardContent.map((content, index) => (
                <StoreCard
                    key={index}
                    profileImage={content.profileImage}
                    coverImage={content.coverImage}
                    storeName={content.storeName}
                    storeRating={content.storeRating}
                    storeAdress={content.storeAdress}
                    storeNummber={content.storeNummber}
                    status={content.status}
                />
            ))}
        </div>
    </div>
  )
}

export default StoreLists