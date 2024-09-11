import { IoIosCloseCircleOutline } from "react-icons/io";

const ActiveFilter = () => {
  return (
    <div className='border-2 border-grey rounded-[5px] w-full mb-8'>
      <h3 className='border-b-2 border-grey font-bold py-2 px-3'>ACTIVE FILTERS</h3>

      <div className='p-3 flex items-start gap-2 flex-col text-[14px]'>
        {["green", "green", "green"].map((content, index) => (
          <button key={index} className={`flex items-center gap-2 text-secondary-color`}>
              <IoIosCloseCircleOutline />
              <p>{content}</p>
          </button>))}
      </div>

      <button className="m-3 text-[#fff] bg-secondary-color px-3 py-[1.5px] hover:bg-[#fff] hover:text-secondary-color duration-300 border-[1px] hover:border-secondary-color">
        Clear all
      </button>
    </div>
  )
}

export default ActiveFilter