import { FaCaretRight } from "react-icons/fa";

const Categories = () => {
  return (
    <div className='border-2 border-grey rounded-[5px] w-full mb-8'>
      <h3 className='border-b-2 border-grey font-bold py-2 px-3'>CATEGORIES</h3>

      {/* <span className='border-2 border-grey font-600 py-2 px-3 hover:text-secondary-color w-full'><a href='#' className=''>All Categories</a></span> */}

      <h4 className='border-b-2 border-grey font-600  hover:text-secondary-color text-[14px] cursor-pointer font-[600] duration-300 py-2 px-3'>All Categories</h4>

      <h4 className='border-b-2 border-grey font-600 text-secondary-color text-[14px] py-2 px-3 font-[600]'>Audio & Video</h4>

      <div className='p-3 flex items-start gap-2 flex-col'>
        {["Displayport Cable (0)", "Displayport to Vga (0)", "iPod Touch (0)", "Speaker Box (0)"].map((content, index) => (
          <button key={index} className={`flex items-center gap-2 text-[#A4A4A4] hover:text-secondary-color duration-300 text-[14px]`}>
                <FaCaretRight className=""/>
                {content}
          </button>))}
      </div>
    </div>
  )
}

export default Categories