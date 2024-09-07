import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { LiaCcVisa } from "react-icons/lia";
import { IoIosInfinite } from "react-icons/io";
import { SiMastercard } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='footer_container b bg-light-grey'>
        <div className="flex flex-col 950:flex-row items-start gap-8 justify-between p-6">
            <div className="flex flex-col gap-6">
                <div>
                    <a href="#"><h2 className='text-[20px] font-bold'>V<span>O</span><span>O</span>M</h2></a>
                </div>

                <p>If you have any question, please contact us at</p>

                <a href="#" className="font-bold text-secondary-color">support@example.com</a>

                <span className="flex items-center gap-2">
                    <IoLocationOutline className="text-[20px]" />
                    <p>30 Buttonwood St.Pataskala OH 43062</p>
                </span>

                <span className="flex items-center gap-2">
                    <MdOutlinePhoneIphone className="text-[20px]" />
                    <p>(+234)-816-801-6104</p>
                </span>

                <span className="flex items-center gap-2">
                    <div className="p-2 border-1 border-grey rounded-[50%] hover:bg-secondary-color hover:text-[#fff] duration-300"><a href="#"><FaXTwitter className="text-[17px]" /></a></div>
                    <div className="p-2 border-1 border-grey rounded-[50%] hover:bg-secondary-color hover:text-[#fff] duration-300"><a href="#"><LuInstagram className="text-[17px]" /></a></div>
                    <div className="p-2 border-1 border-grey rounded-[50%] hover:bg-secondary-color hover:text-[#fff] duration-300"><a href="#"><FaFacebookF className="text-[17px]" /></a></div>
                    <div className="p-2 border-1 border-grey rounded-[50%] hover:bg-secondary-color hover:text-[#fff] duration-300"><a href="#"><FaYoutube className="text-[17px]" /></a></div>
                </span>
            </div>
            
            <div>
                <h3 className="text-[16px] font-bold">CUSTOMER SERVICE</h3>

                <ul className="text-[14px] my-4">
                    <li className="my-3 hover:text-secondary-color duration-300"><a href="#">Contact Us</a></li>
                    <li className="my-3 hover:text-secondary-color duration-300"><a href="#">Track Your Order</a></li>
                    <li className="my-3 hover:text-secondary-color duration-300"><a href="#">Returns Policy</a></li>
                    <li className="my-3 hover:text-secondary-color duration-300"><a href="#">Delivery Information</a></li>
                    <li className="my-3 hover:text-secondary-color duration-300"><a href="#">Help & FAQ</a></li>
                </ul>
            </div>
            
            <div>
                <h3 className="text-[16px] font-bold">ABOUT US</h3>

                <ul className="text-[14px] my-4">
                    <li className="my-3 hover:text-secondary-color duration-300"><a href="#">About Us</a></li>
                    <li className="my-3 hover:text-secondary-color duration-300"><a href="#">Contact Us</a></li>
                    <li className="my-3 hover:text-secondary-color duration-300"><a href="#">Privacy policy</a></li>
                    <li className="my-3 hover:text-secondary-color duration-300"><a href="#">Terms & condition</a></li>
                    <li className="my-3 hover:text-secondary-color duration-300"><a href="#">Blog</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-[16px] font-bold">NEWSLETTER</h3>

                <p className="text-[14px] my-4">Subscribe to the weekly newsletter for all the latest updates</p>

                <form action="#" className="flex h-[50px] w-full items-center justify-between bg-grey">
                    <input type="text" placeholder="Your email address" className="px-2 outline-none h-full w-full bg-transparent" />
                    <button className="px-4 py-1 bg-secondary-color outline-none h-full flex justify-center items-center"><CiMail className="text-[25px] font-bold text-[#fff]" /></button>
                </form>
            </div>
        </div>

        <div className="flex items-center flex-col 300:flex-row gap-3 justify-between p-6 border-t-2 border-grey">
            <p className="text-[15px]">© 2021 voom Store</p>

            <span className="flex items-center gap-2">
                <SiMastercard className="text-[35px]" />
                <LiaCcVisa className="text-[35px]" />
                <IoIosInfinite className="text-[35px]" />
            </span>
        </div>
    </div>
  )
}

export default Footer