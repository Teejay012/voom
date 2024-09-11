import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { LiaFaxSolid } from "react-icons/lia";

const Contact = () => {
  return (
    <div className="p-3 500:p-6 my-7 flex flex-col items-center justify-between 750:h-screen 750:flex-row">
        <div className="bg-secondary-color w-full 750:w-[50%] flex flex-col justify-start items-start h-full text-[#fff] p-4">
            <h2 className="text-[30px] font-bold">Contact Us</h2>

            <ul>
                <li className="flex items-center text-[20px] gap-2 my-8"><IoLocationOutline /> <p>17 Princess Road London, Greater London NW1 8JR, UK</p></li>
                <li className="flex items-center text-[20px] gap-2 my-8"><CiMail /> <p> contact@yourstore.com</p></li>
                <li className="flex items-center text-[20px] gap-2 my-8"><IoMdCall /> <p>+2348168016104</p></li>
                <li className="flex items-center text-[20px] gap-2 my-8"><LiaFaxSolid /> <p>+2348168016104</p></li>
            </ul>
        </div>

        <div className="w-full 750:w-[50%] h-full 400:p-4">
            <span className="pb-3 border-b-2 border-grey">
                <h2 className="text-[30px] font-bold border-b-4 border-secondary-color">Leave us a Message</h2>
            </span>

            <form action="#" className="mt-10">
                <span className="flex flex-col items-center justify-between 400:flex-row gap-3">
                    <div className="flex flex-col w-full ">
                        <label htmlFor="" className="font-bold text-[17px] mb-2">Name</label>
                        <input type="text" className="w-full h-[50px] outline-none px-3 border-2 border-grey" placeholder="Name*" />
                    </div>

                    <div className="flex flex-col w-full ">
                        <label htmlFor="" className="font-bold text-[17px] mb-2">Email</label>
                        <input type="text" className="w-full h-[50px] outline-none px-3 border-2 border-grey" placeholder="Email*" />
                    </div>
                </span>

                <div className="flex flex-col my-10 w-full">
                    <label htmlFor="message" className="font-bold text-[17px] mb-2">Your Message</label>
                    <textarea name="message" id="message" className="w-full h-[250px] outline-none p-3 border-2 border-grey" placeholder="Your Message*"></textarea>
                </div>

                <button className="px-8 py-3 bg-[#000] rounded-[5px] hover:bg-secondary-color duration-300 text-[#fff]">Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact