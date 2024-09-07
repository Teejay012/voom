import React from 'react'
import { BsShop } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";

const MobileNavbar = () => {
  return (
    <div className="w-full fixed left-0 bottom-0 z-50 flex h-[60px] shadow-2xl border-t-[1px] border-light-grey block 900:hidden px-6 justify-between items-center bg-[#fff]">
        <div><BsShop className="text-[20px]" /></div>
        <div><IoMdHeartEmpty className="text-[20px]" /></div>
        <div><BsChatDots className="text-[20px]" /></div>
        <div><IoIosSearch className="text-[20px]" /></div>
        <div><RiUserLine className="text-[20px]" /></div>
    </div>
  )
}

export default MobileNavbar