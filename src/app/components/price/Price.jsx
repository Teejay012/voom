"use client"
import { useState } from 'react';

const Price = () => {

    const [minPrice, setMinPrice] = useState(100); // Initial min price
    const [maxPrice, setMaxPrice] = useState(900); // Initial max price
    const minRange = 10;
    const maxRange = 1000;

    // Handle minimum price change
    const handleMinPriceChange = (e) => {
        const value = parseInt(e.target.value);
        if (value < maxPrice) {
        setMinPrice(value);
        }
    };

    // Handle maximum price change
    const handleMaxPriceChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > minPrice) {
        setMaxPrice(value);
        }
    };

    return (
        <div className="border-2 border-grey rounded-[5px] w-full mb-8">
            {/* Title */}
            <h3 className='border-b-2 border-grey font-bold py-2 px-3'>PRICE</h3>
    
            {/* Slider Container */}
            <div className="relative w-full max-w-lg p-3">
                {/* Price Range Text */}
                <div className="flex justify-between text-gray-600 mb-3 text-[15px]">
                    <span>${minRange}</span>
                    <span>${maxRange}</span>
                </div>
        
                {/* Dual Range Sliders */}
                <div className="relative h-2 bg-gray-300 rounded-lg">
                    {/* Min Range Slider */}
                    <input
                    type="range"
                    min={minRange}
                    max={maxRange}
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="absolute w-full h-[1px] h-[.3px] bg-transparent appearance-none pointer-events-auto cursor-pointer z-20"
                    // style={{ zIndex: minPrice < maxPrice ? 20 : 10 }}
                    />
        
                    {/* Max Range Slider */}
                    <input
                    type="range"
                    min={minRange}
                    max={maxRange}
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="absolute w-full h-[.3px] bg-transparent appearance-none pointer-events-auto cursor-pointer z-10"
                    />
        
                    {/* Track Between Min and Max */}
                    <div
                    className="absolute top-0 h-[1px] bg-red-500 rounded-lg"
                    style={{
                        left: `${((minPrice - minRange) / (maxRange - minRange)) * 100}%`,
                        right: `${100 - ((maxPrice - minRange) / (maxRange - minRange)) * 100}%`,
                    }}
                    />
                </div>
        
                {/* Current Price Display */}
                <div className="flex justify-between mt-4 text-[12px]">
                    <span className="font-medium text-gray-800">
                    Min: ${minPrice}
                    </span>
                    <span className="font-medium text-gray-800">
                    Max: ${maxPrice}
                    </span>
                </div>
            </div>
        </div>
    )
  }
  
  export default Price