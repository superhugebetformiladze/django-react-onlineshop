import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from '@models/ProductModel';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border rounded-lg overflow-hidden shadow-md">
        <img
          src={product.image_path}
          alt={product.name}
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <div className="text-lg font-bold mb-2">{product.name}</div>
          <div className="text-gray-700">${product.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
