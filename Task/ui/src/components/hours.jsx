import React from 'react'

function Hours() {
  return (
    <div className='border-2 border-[#b17989] bg-[#efe1e9] w-full max-w-[400px] min-h-[200px] px-[20px]  rounded-2xl'>
      <h3 className='text-[20px] mb-[30px] mt-[10px] text-[#9d6b79] font-bold'>Working Hours</h3>
      <div>
        <div className='flex justify-between text-[18px] text-[#9d6b79] font-bold'>
            <p>Monday- Friday</p>
            <p>10:00 AM - 6:00 PM</p>
        </div>

         <div className='flex justify-between text-[18px] text-[#9d6b79] font-bold'>
            <p>Saturday</p>
            <p>9:00 AM - 11:00 PM</p>
        </div>

         <div className='flex justify-between text-[18px] text-[#9d6b79] font-bold'>
            <p>Sunday</p>
            <p>9:00 AM - 10:00 PM</p>
        </div>
      </div>
    </div>
  )
}

export default Hours
