import Image from 'next/image';
import woman from "../../../public/assets/woman.png";
import { CiMail } from "react-icons/ci";

const Suscribe = () => {
  return (
    <div className='px-1 py-6 300:p-6 h-[270px] 300:h-[250px] 950:h-[150px] 600:h-[200px] w-full text-[#fff]'>
        <div className='relative h-full w-full inset-0 rounded-[20px] 600:rounded-[100px] overflow-hidden'>
            <Image
                src={woman}
                alt='woman'
                className="w-full h-full object-cover object-center"
            />

            <div className='absolute h-full w-full inset-0 bg-black bg-opacity-50 px-1 600:px-6 py-5 950:py-0'>
                <span className='flex h-full w-full flex-col 950:flex-row 950:justify-between items-center'>
                    <span className=' flex items-center gap-3'>
                        <CiMail className='text-[35px] font-bold' />
                        <div>
                            <h3 className='text-[22px] font-bold'>Sign up for our email update.</h3>
                            <p className='text-[16px]'>Sign up for emails and unlock first access to exclusive offers, and more</p>
                        </div>
                    </span>

                    <span>
                        <form action="#">
                            <div className='flex items-center justify-between bg-[#fff] gap-3 h-[50px] w-[270px] 300:w-[300px] 600:w-[400px] overflow-hidden rounded-[50px] px-2'>
                                <input type="text" placeholder='Your email adress...' className='text-primary-color outline-none border-0 px-4 h-full w-full'/>
                                <button className='border-3 border-[#fff] rounded-[50px] bg-[#000] text-[#fff] py-2 px-4 text-[14px] font-bold hover:bg-secondary-color'>SUSCRIBE</button>
                            </div>
                        </form>
                    </span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Suscribe