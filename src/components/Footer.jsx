import React from 'react'

const Footer = () => {
  return (
   <div className='text-center'>
      <div className='flex container mx-auto gap-4 '>
        <div className='text-center w-1/2 p-5 bg-gray-100 rounded-md'>
            <h1 className='p-5 text-2xl text-rose-400'>About us</h1>
            <p className='text-gray-500 text-sm '>The idea of GYAN JYOTI GURUKULAM SCHOOL, came into existance to fulfill the dreams of the little stars, who have infinite inherent talent and capability to outshine in this world if receive right guidance and education</p>
        </div>
        <div className='text-center w-1/2 p-5 bg-gray-100 rounded-md'>
            <h1 className='p-5 text-2xl text-rose-400'>Address</h1>
            <p className='text-gray-500 text-sm '>GYAN JYOTI GURUKULAM SCHOOL NEAR KALI ASTHAN JANDAHA VAISHALI 844505 jandaha bihar - 844505</p>
        </div>
        <div className='text-center w-1/2 p-5  bg-gray-100 rounded-md'>
            <h1 className='p-5 text-2xl text-rose-400'>Location</h1>
            <p className='text-gray-500 text-sm '>GYAN JYOTI GURUKULAM SCHOOL NEAR KALI ASTHAN JANDAHA VAISHALI 844505 jandaha bihar - 844505</p>
        </div>
    </div>
    <p className='text-gray-400 p-4 text-sm mt-5'>Copyright © 2024 GYAN JYOTI GURUKULAM SCHOOL. All rights reserved . Designed by <a href="">Raushan Sharma</a></p>
   </div>
  )
}

export default Footer