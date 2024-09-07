import React from 'react'

const TrackOrder = () => {
  return (
    <div className='flex justify-center p-6 items-center h-screen'>
        <div className='max-w-[700px]'>
          <p className='text-[15px] mb-10'>To track your order please enter your Order ID in the box below and press the Track button. This was given to you on your receipt and in the confirmation email you should have received.</p>

          <form action="#">
            <div className='my-10'>
              <label htmlFor="orderId" className='font-bold text-[15px] mb-3'>Order ID</label>
              <input type="text" placeholder='Found in your order confirmation email.' className='orderId px-4 w-full h-[50px] border-2 border-grey outline-none' />
            </div>

            <div className='my-10'>
              <label htmlFor="orderId" className='font-bold text-[15px] mb-3'>Order ID</label>
              <input type="text" placeholder='Email you used during checkout.' className='orderId px-4 w-full h-[50px] border-2 border-grey outline-none' />
            </div>

            <button className='font-bold bg-[#000] w-full py-4 hover:bg-secondary-color text-[#fff] duration-300'>TRACK</button>
          </form>
        </div>
    </div>
  )
}

export default TrackOrder