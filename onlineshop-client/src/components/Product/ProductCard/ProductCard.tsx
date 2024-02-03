import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border rounded-lg overflow-hidden shadow-md">
        <img
          src={''}
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
