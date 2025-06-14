import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import {assets} from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  });

  return productData ? (
    <div className='border-t border-gray-300 pt-10 transition-opacity ease-in duration-500 opacity-100'>
    {/* product-data */} 
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product-image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((item, index) => (
                <img key={index} src={item} alt='' className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' onClick={() => setImage(item)}/>
              ))
            }
          </div>
            <div className="w-full sm:w-[80%]">
              <img src={image} alt='' className='w-full h-auto' /> 
            </div>
        </div>

        {/* product-details */}
        <div className="flex-1">
          <h1 className='text-2xl font-medium mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='text-3xl font-medium mt-5'>{currency} {productData.price}</p>
          <p className='text-gray-500 mt-5 md:w-4/5'>{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex cursor-pointer gap-2">
              {
                productData.sizes.map((item, index) => (
                  <button onClick={()=>setSize(item)} key={index} className={`border py-2 cursor-pointer px-4 bg-gray-100 ${item === size ?'border-orange-500': ''}`} >{item}</button>
                ))
              }
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id, size)} className="bg-black text-white cursor-pointer px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 text-gray-300' />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* product-description and review section */}
      <div className="mt-20">
        <div className="flex">
          <p className='border border-gray-300 px-5 py-3 text-sm text-gray-500'>Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500">
          <b>Verified Purchase - Size: Large, Color: Navy Blue</b>
          <p>I've been wearing this t-shirt for about 3 months now and it's quickly become one of my go-to pieces. The fit is exactly what I was looking for - not too tight, not too loose, just that perfect relaxed fit that looks good whether I'm lounging at home or heading out for casual errands.</p>
        </div>
      </div>
      
      {/* display-related-products */}

      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>


    </div>
  ) : <div className="opacity-0"></div>
}

export default Product