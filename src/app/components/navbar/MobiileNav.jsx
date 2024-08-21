"use client"
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { useState } from 'react'

const MobiileNav = () => {

    
    const [showLeftMenu, setShowLeftMenu] = useState(false);
    const [showRightMenu, setShowRightMenu] = useState(false);

    const showLeftMenuHandle = () =>{
        setShowLeftMenu(true)
    }

    const hideLeftMenuHandle = () =>{
        setShowLeftMenu(false)
    }

    const showRightMenuHandle = () =>{
        setShowRightMenu(true)
    }

    const hideRightMenuHandle = () =>{
        setShowRightMenu(false)
    }


  return (
    <div className="mobile_navbar_container flex justify-between items-center px-4 h-[60px] block 950:hidden">
        <div className="cursor-pointer hover:text-secondary-color transition duration-300 transform" onClick={showLeftMenuHandle}>
            <IoIosMenu className="text-[25px]" />
        </div>

        <div className="logo font-bold">
            <a href="#">FAST<span className="font-bold text-secondary-color">MART</span></a>
        </div>

        <div className="flex items-center justify-center gap-4">
            <div className="cursor-pointer hover:text-secondary-color transition duration-300 transform" onClick={showRightMenuHandle}>
                <CgMenuRight className="text-[25px]" />
            </div>

            <div className="relative cursor-pointer hover:text-secondary-color transition duration-300 transform">
                <BsCart3 className="text-[25px]" />
                <div className="absolute top-[-5px] right-[-5px] bg-secondary-color w-[15px] h-[15px] rounded-[50%] text-[#fff] flex justify-center items-center text-[10px]">0</div>
            </div>
        </div>



        {/* /////////////////////////////////// MENUS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

        {showLeftMenu &&
        <div className="mobile_navbar_container-left_menu fixed h-full z-50 left-0 top-0 w-[250px] bg-[#fff] shadow-lg animate-leftToRight">
            <button className="flex justify-end items-center bg-secondary-color px-3 py-4 text-[#fff] w-full" onClick={hideLeftMenuHandle}>
                <span>CLOSE</span>
                <IoCloseOutline className="text-[25px]"/>
            </button>

            <ul className="px-2 py-6 text-[14px] font-bold text-primary-color">
                <li className="border-b-2 border-[#f3f3f3] py-3 text-secondary-color"><a href="#">HOME</a></li>
                <li className="border-b-2 border-[#f3f3f3] py-3 hover:text-secondary-color transition duration-300"><a href="#">ABOUT US</a></li>
                <li className="border-b-2 border-[#f3f3f3] py-3 hover:text-secondary-color transition duration-300"><a href="#">CONTACT US</a></li>
                <li className="border-b-2 border-[#f3f3f3] py-3 hover:text-secondary-color transition duration-300"><a href="#">FAQ</a></li>
                <li className="border-b-2 border-[#f3f3f3] py-3 hover:text-secondary-color transition duration-300"><a href="#">STORE LISTS</a></li>
            </ul>
        </div>
        }


        {showRightMenu &&
        <div className="mobile_navbar_container-right_menu fixed h-full z-50 right-0 top-0 w-[250px] bg-[#fff] shadow-lg animate-rightToLeft">
            <button className="flex justify-start items-center bg-secondary-color px-3 py-4 text-[#fff] w-full" onClick={hideRightMenuHandle}>
                <span>CLOSE</span>
                <IoCloseOutline className="text-[25px]"/>
            </button>

            <ul className="px-2 py-6 text-[14px] font-bold text-primary-color">
                <li className="border-b-2 border-[#f3f3f3] py-3 hover:text-secondary-color transition duration-300"><a href="#">BEST SELLERS</a></li>
                <li className="border-b-2 border-[#f3f3f3] py-3 hover:text-secondary-color transition duration-300"><a href="#">TOP 100 PRODUCTS</a></li>
                <li className="border-b-2 border-[#f3f3f3] py-3 hover:text-secondary-color transition duration-300"><a href="#">HANDPICK</a></li>
                <li className="border-b-2 border-[#f3f3f3] py-3 hover:text-secondary-color transition duration-300"><a href="#">USED</a></li>
                <li className="border-b-2 border-[#f3f3f3] py-3 hover:text-secondary-color transition duration-300"><a href="#">AUDIO & VIDEO</a></li>
                <li className="border-b-2 border-[#f3f3f3] py-3 hover:text-secondary-color transition duration-300"><a href="#">COMPUTERS & LAPTOPS</a></li>
                <li className="border-b-2 border-[#f3f3f3] py-3 hover:text-secondary-color transition duration-300"><a href="#">MOBILES & TABLETS</a></li>
                <li className="border-b-2 border-[#f3f3f3] py-3 hover:text-secondary-color transition duration-300"><a href="#">OTHERS</a></li>
            </ul>
        </div>
}
    </div>
  )
}

export default MobiileNav