import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Chhavva is a fashion brand that offers a wide range of clothing and accessories for
                    men and women. Our products are designed to be stylish, comfortable, and affordable.
                </p>
            </div>
            <div>
                <h1 className='text-xl font-medium mb-5 '>COMPANY</h1>
                <ul className='flex flex-col gap-1'>
                    <li className='text-gray-600 hover:text-black cursor-pointer'><a href="/">Home</a></li>
                    <li className='text-gray-600 hover:text-black cursor-pointer'><a href="/about">About Us</a></li>
                    <li className='text-gray-600 hover:text-black cursor-pointer'><a href="/contact">Contact Us</a></li>
                    <li className='text-gray-600 hover:text-black cursor-pointer'><a href='/termscondition'>Terms & Conditions</a></li>
                </ul>
            </div>
            <div>
                <h1 className='text-xl font-medium mb-5 '>GET IN TOUCH</h1>
                <ul className='flex flex-col gap-1'>
                    <li  className='text-gray-600 hover:text-black cursor-pointer'>+91 6202609943</li>
                    <li className='text-gray-600 hover:text-black cursor-pointer'>support@chhavva.com</li>
                    <li className='text-gray-600 hover:text-black cursor-pointer'>123, Chhavva Street, <br/> Sector-115, Mohali, India</li>
                </ul>
            </div>
        </div>
        <hr className='text-gray-300'/>
        <div className='text-center gap-5 py-5 text-sm text-gray-600'>
            <p>© 2025 Chhavva. All rights reserved.</p>
            
            {/* <div className='flex items-center gap-3'>
                <img src={assets.logo} alt="logo" className='mb-5 w-32' />
                <img src={assets.facebook} alt="Facebook" className='w-6 h-6 cursor-pointer' />
                <img src={assets.instagram} alt="Instagram" className='w-6 h-6 cursor-pointer' />
                <img src={assets.twitter} alt="Twitter" className='w-6 h-6 cursor-pointer' />
            </div>*/}
            {/* <p>Powered by Anurag Arya</p> */}
        </div>
    </div>
  )
}

export default Footer