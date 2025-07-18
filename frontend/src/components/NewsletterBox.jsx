import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Subscribe to our newsletter and get the latest updates on new products, special offers, and more.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email' required className='w-full sm:flex-l outline-none' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
        <p className='text-gray-400 mt-3'>We respect your privacy. Unsubscribe at any time.</p>
    </div>
  )
}

export default NewsletterBox