import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img
        src={`https://placekitten.com/300/200?image=${product.id}`} // Пример использования изображения (замените на реальные данные)
        alt={product.name}
        className="w-full h-32 object-cover"
      />
      <div className="p-4">
        <div className="text-lg font-bold mb-2">{product.name}</div>
        <div className="text-gray-700">${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
