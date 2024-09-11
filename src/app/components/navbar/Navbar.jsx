"use client"
import Link from 'next/link';
import { CiLocationOn } from "react-icons/ci";
import { BsEnvelope } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaChevronUp } from "react-icons/fa";
import { CgMenuLeft } from "react-icons/cg";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCart3 } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import MobiileNav from "./MobiileNav";

const Navbar = () => {

    const [showCategory, setShowCategory] = useState(false);
    const [showDepartments, setShowDepartments] = useState(false);

    const showCategoryHandle = ()=>{
        setShowCategory(prevState => !prevState);
    };

    const showDepartmentsHandle = ()=>{
        setShowDepartments(prevState => !prevState);
    };

  return (
    <>
    <div className="navbar_container hidden 950:block">

        {/* ////////////////////// UPPER CONTAINER \\\\\\\\\\\\\\\\\\\\\ */}

        <div className="navbar_container-upper_container border-b-2 border-grey flex justify-between items-center px-6 h-[50px]">
            <div className="h-full flex items-center gap-2">
                <a href="#" className="flex items-center text-[14px] gap-1 hover:text-secondary-color transition duration-300">
                    <CiLocationOn />
                    <p>Find Store</p>
                </a>

                <div className="h-[50%] w-[2px] bg-grey mx-2"></div>

                <a href="#" className="flex items-center text-[14px] gap-1 hover:text-secondary-color transition duration-300">
                    <BsEnvelope />
                    <p>Your Chats</p>
                </a>
            </div>

            <div className="h-full flex items-center gap-1">
                <a href="#" className="text-[14px] hover:text-secondary-color transition duration-300">
                    <p>Contact</p>
                </a>

                <div className="h-[50%] w-[2px] bg-grey mx-2"></div>

                <a href="#" className="text-[14px] hover:text-secondary-color transition duration-300">
                    <p>Track Your Order</p>
                </a>
            </div>
        </div>


        {/* ////////////////////// MIDDLE CONTAINER \\\\\\\\\\\\\\\\\\\\\ */}

        <div className="h-[100px] navbar_container-middle_container flex justify-between items-center px-6">

            <div className="logo">
                <h2>FAST<span className="text-secondary-color font-bold">MART</span></h2>
            </div>

            <div className="navbar_container-search border-2 border-grey h-[50px] rounded-[50px] flex items-center">
                <div className="h-full navbar_container-search_container flex items-center pl-2">
                    <input type="text" placeholder="Search Product..." className="w-[400px] px-3 text-[14px] h-[80%] border-0 outline-none" />

                    <div className="h-[50%] w-[2px] bg-grey mx-2"></div>

                    <div className="navbar_container-search_container-categories relative">
                        <span className="flex items-center mx-2 cursor-pointer" onClick={showCategoryHandle}>
                            <p className="text-[14px] mx-1 hover:text-secondary-color transition duration-300">All Categories</p>
                            {showCategory ? <FaChevronUp className="text-[11px]"/> : <FaChevronDown className="text-[11px]" />}
                        </span>

                        {showCategory && 
                        <div className="absolute top-[170%] left-[-50px] z-50 shadow-md p-5 w-[250px] h-[380px] overflow-hidden animate-dropDown bg-[#fff]">
                            <ul className="h-full overflow-auto text-[14px]">
                                <li className="border-b-2 border-grey py-3 text-secondary-color"><a href="#">All Categories</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Accessories</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Car Electronics</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Foods & Fruits</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Audio & Video</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Mobiles & Tablets</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Office Electronics</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">All Category</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Accessories</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Car Electronics</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Foods & Fruits</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Audio & Video</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Mobiles & Tablets</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Office Electronics</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">All Category</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Accessories</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Car Electronics</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Foods & Fruits</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Audio & Video</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Mobiles & Tablets</a></li>
                                <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300"><a href="#">Office Electronics</a></li>
                            </ul>
                        </div>
                        }
                    </div>

                    <div className="navbar_container-search_container-search_btn bg-[#000] hover:bg-secondary-color transition duration-300 cursor-pointer w-[80px] justify-center flex items-center h-full border-[3px] border-[#fff] rounded-[50px]">
                        <IoIosSearch className="text-[20px] text-[#fff]"/>
                    </div>
                </div>
            </div>

            <div className="navbar_container-click-btn flex gap-4 items-center">

                <div className="relative cursor-pointer hover:text-secondary-color transition duration-300 transform hover:-translate-y-2">
                    <RiUserLine className="text-[30px]" />
                </div>

                <div className="relative cursor-pointer hover:text-secondary-color transition duration-300 transform hover:-translate-y-2">
                    <IoMdHeartEmpty className="text-[30px]" />
                    <div className="absolute top-[-5px] right-[-5px] bg-secondary-color w-[15px] h-[15px] rounded-[50%] text-[#fff] flex justify-center items-center text-[10px]">0</div>
                </div>

                <div className="relative cursor-pointer hover:text-secondary-color transition duration-300 transform hover:-translate-y-2">
                    <BsCart3 className="text-[30px]" />
                    <div className="absolute top-[-5px] right-[-5px] bg-secondary-color w-[15px] h-[15px] rounded-[50%] text-[#fff] flex justify-center items-center text-[10px]">0</div>
                </div>

            </div>
        </div>


        {/* ///////////////////////////////// LOWER NAV \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

        <div className="navbar_container-lower_container bg-[#f3f3f3] flex justify-between items-center px-6 h-[60px]">
            <div className="navbar_container-lower_container-navs flex items-center gap-8">
                <div className="navbar_container-lower_container-navs_departments relative mr-5">
                    <span className="flex items-center gap-4 cursor-pointer bg-secondary-color text-[#fff] rounded-[5px] py-3 px-4 font-bold" onClick={showDepartmentsHandle}>
                        <CgMenuLeft className="text-[30px]"/>
                        <h3>All Departments</h3>
                        {showDepartments ? <FaChevronUp className="text-[11px]"/> : <FaChevronDown className="text-[11px]" />}
                    </span>

                
                    {showDepartments && 
                    <div className="absolute top-[100%] left-0 shadow-md z-50 w-full p-2 rounded-10 bg-[#fff]">
                        <ul className="text-[14px] w-full">
                            <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300 font-bold flex items-center justify-start gap-3"><GoDotFill /> <a href="#">Best Sellers</a></li>
                            <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300 font-bold flex items-center justify-start gap-3"><GoDotFill /> <a href="#">Top 100 Products</a></li>
                            <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300 font-bold flex items-center justify-start gap-3"><GoDotFill /> <a href="#">Handpick</a></li>
                            <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300 font-bold flex items-center justify-start gap-3"><GoDotFill /> <a href="#">Used</a></li>
                            <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300 font-bold flex items-center justify-start gap-3"><GoDotFill /> <a href="#">Audio & Video</a></li>
                            <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300 font-bold flex items-center justify-start gap-3"><GoDotFill /> <a href="#">Mobiles & Tablets</a></li>
                            <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300 font-bold flex items-center justify-start gap-3"><GoDotFill /> <a href="#">Computers & Laptops</a></li>
                            <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300 font-bold flex items-center justify-start gap-3"><GoDotFill /> <a href="#">Others</a></li>
                        </ul>
                    </div>
                    }
                
                </div>

                <div><a href="#" className="font-bold text-primary-color">HOME</a></div>

                <div className="group relative">
                    <span className="flex items-center gap-2 font-bold text-primary-color cursor-pointer">
                        <button>PAGES</button>
                        <FaChevronDown className="text-[11px]" />
                    </span>

                    <div className="absolute top-[100%] bg-[#fff] left-0 z-50 shadow-lg w-full p-2 rounded-10 hidden group-hover:block w-[180px] text-primary-color">
                        <ul className="text-[14px] w-full">
                            <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300 font-bold flex items-center justify-start gap-3"><a href="#">About Us</a></li>
                            <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300 font-bold flex items-center justify-start gap-3"><a href="#">Contact Us</a></li>
                            <li className="border-b-2 border-grey py-3 hover:text-secondary-color transition duration-300 font-bold flex items-center justify-start gap-3"><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                <div><a href="#" className="font-bold text-primary-color">STORE LISTS</a></div>
            </div>

            <span className="flex items-center gap-2 font-bold text-primary-color">
                <TbTruckDelivery className="text-secondary-color text-[25px]" />
                Free Shipping on Orders #300,000
            </span>
        </div>
    </div>





    {/* ////////////////////////////////////////////////////  MOBILE NAVIGATION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}


    <MobiileNav />
    </>
  )
}

export default Navbar