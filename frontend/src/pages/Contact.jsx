import React from 'react'
import NewsletterBox from '../components/NewsletterBox'
import Title from '../components/Title'
import {assets} from '../assets/assets'   

const Contact = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-300">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10 mb-28 justify-center ">
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="about_img" />

        <div className="flex flex-col justify-center items-start gap-6 text-gray-500">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p>123 Chhavva Street <br/> Sector-115, Mohali, India</p>
          <p>Phone: +91 6202609943</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Chhavva</p>
          <p>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact