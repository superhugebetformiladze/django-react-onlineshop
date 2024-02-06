// ProductList.tsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import useProducts from '../../../hooks/Products/useProducts';

const ProductList: React.FC = () => {
  const products = useProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
