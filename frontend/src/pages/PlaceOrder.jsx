import React, { useContext, useState} from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'


const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300'>
    {/*-----------------------  ---Left Side---------------------  */}
      <div className="flex flex-col gap-4 mt-8 w-full sm:max-w-[480px]">
        <div className="text-2xl">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email' />
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="number" placeholder='Phone' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Pincode' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Locality' />
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
      </div>
      {/* ---------------------Right Side------------------------------- */}
      <div className="">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* -------------Payment Method Selection---------------------- */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setMethod('stripe')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer text-gray-500 ${method === 'stripe' ? 'bg-gray-400' : '' }`}>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="stripe_logo" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer text-gray-500 ${method === 'razorpay' ? 'bg-gray-400' : '' }`}>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="razorpay_logo" />
            </div>
            <div onClick={()=>setMethod('cod')} className={`flex items-center gap-3 border p-2 px-3 cursor-pointer text-gray-500 ${method === 'cod' ? 'bg-gray-400 text-white' : '' }`}>
              <p className="text-sm font-medium mx-4 ">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black w-full text-white px-16 py-3 text-sm cursor-pointer'>PLACE ORDER</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default PlaceOrder