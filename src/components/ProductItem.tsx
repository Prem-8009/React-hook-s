import React from 'react';
import type { Item } from '../types/Item';

const ProductItem: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <>
      <div className='flex flex-col items-center px-2 py-4 m-2 border border-white'>
        <img src={item.category.image} alt={item.category.name} className='object-contain rounded-md w-3xs h-3xs' />
        <h2 className='mt-2 text-lg font-semibold'>{item.title}</h2>
      </div>
    </>
  )
}

export default ProductItem