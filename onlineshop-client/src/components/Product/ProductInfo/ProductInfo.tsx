import React from 'react';
import { IProduct } from '@models/ProductModel';

interface ProductInfoProps {
  product: IProduct;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-green-600 font-semibold">Price: ${product.price}</p>
    </div>
  );
};

export default ProductInfo;
