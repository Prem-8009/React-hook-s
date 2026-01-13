import React from 'react';
import ProductItem from './ProductItem';
import type { Item } from '../types/Item';
import Spinner from './Spinner';
import useFetch from '../hooks/useFetch';

const ProductPage: React.FC = () => {
  const {
    data,
    loading,
    error
  } = useFetch("https://api.escuelajs.co/api/v1/products");
  if (loading) return <Spinner />;
  if (error) return <div className='flex items-center justify-center min-h-screen text-red-500'>Error: Failed to fetch data</div>;
  return (
    <>
      <h1 className='py-4 text-3xl font-bold text-center'>Products</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {data && data.map((item: Item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}

export default ProductPage