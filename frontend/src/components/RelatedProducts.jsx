import React from 'react'
import Title from './Title'
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory}) => {

  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const relatedProducts = products.filter((item) => {
      return (item.category === category && item.subCategory === subCategory);
    });
    setRelated(relatedProducts.slice(0, 5)); // limiting to 5 related products
  }, [category, subCategory, products]);

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'RELATED'} text2={'PRODUCTS'} />
        </div>

        {/* rendering products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                related.map((item,index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
       </div>
    </div>
  )
}

export default RelatedProducts