"use client"
import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";
import Image from 'next/image';
import bgOne from "../../../public/assets/heroBg-1.png"
import apple from "../../../public/assets/apple.png"
import bgTwo from "../../../public/assets/heroBg-2.png"
import delivery from "../../../public/assets/delivery.png"
import bgThree from "../../../public/assets/heroBg-3.png"
import shopCart from "../../../public/assets/shopCart.png"



const heroContents = [
    {
      bg: bgThree,
      image: apple,
      subTopic: "GET BONUS ON YOUR FIRST ORDER",
      topic: "The future is in your hand"
    },
    {
        bg: bgTwo,
        image: shopCart,
        subTopic: "GET BONUS ON YOUR FIRST ORDER",
        topic: "Never lack food stuffs"
    },
    {
        bg: bgOne,
        image: delivery,
        subTopic: "GET BONUS ON YOUR FIRST ORDER",
        topic: "Get your package the same day"
      },
  ];

const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContents.length);
        }, 15000); // Change slide every 10 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


  return (
    <div className="relative h-[100vh] 950:h-[80vh] w-full overflow-hidden z-0">
      {heroContents.map((content, index) => (
        <div
          key={index}
          className={`w-full h-full absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={content.bg}
            alt={content.topic}
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center flex-col justify-between 750:items-center 750:flex-row 750:justify-between py-10 px-6 750:p-6">
            <span className="flex items-start justify-start flex-col w-full 750:w-[60%]">
              <h3 className="text-white text-[15px] font-bold mb-4">{content.subTopic}</h3>
              <h2 className="text-white text-6xl text-3xl font-bold">{content.topic}</h2>
              <span className="flex items-center justify-start text-[14px] p-5 rounded-[50px] bg-[#fff] my-4 font-bold">
                <a href="#">Shop Now</a>
                <FaChevronRight className="bg-[#000] text-[#fff] p-2 rounded-[50px] ml-2"/>
              </span>
            </span>

            <div className="w-[300px] h-[350px] overflow-hidden flex items-center justify-center">
              <Image 
                src={content.image}
                alt={content.topic}
                className="z-10 h-full w-full object-center"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Hero