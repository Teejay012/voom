
const Color = () => {
  return (
    <div className='border-2 border-grey rounded-[5px] w-full mb-8'>
      <h3 className='border-b-2 border-grey font-bold py-2 px-3'>COLOR</h3>

      <div className='p-3 flex items-center gap-4'>
        {["green", "green", "green"].map((content, index) => (
          <button key={index} className={`flex items-center gap-2 text-[#A4A4A4] bg-${content}-500 h-[30px] w-[30px] rounded-[50%]`}>
            
          </button>))}
      </div>
    </div>
  )
}

export default Color