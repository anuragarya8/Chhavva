import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';


const CartTotal = () => {

    const { getCartAmount, currency, deliveryCharge } = useContext(ShopContext);

    let deliveryFee = deliveryCharge;

    if(getCartAmount() >= 500){
        deliveryFee = 0;
    }

    return (
        <div className='w-full'>
            <div className="text-2xl">
                <Title text1={'CART'} text2={'TOTAL'} />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency} {getCartAmount()}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Delivery Charge</p>
                    <p>{currency} {getCartAmount() === 0 ? 0 : deliveryFee}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00</b>
                </div>
                {
                    getCartAmount() > 0 && getCartAmount() < 500 
                    ?<p className='text-gray-500 mb-[-20px]'>Shop for {currency}{500 - getCartAmount()} more and get free delivery.</p> 
                    : ''
                }
            </div>
        </div>
    )
}

export default CartTotal