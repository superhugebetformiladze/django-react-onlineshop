import React from 'react';
import SizeSelector from '@components/common/SizeSelector/SizeSelector';
import { IProduct } from '@models/ProductModel';


interface ProductInfoProps {
  product: IProduct;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className="product-info container flex flex-col lg:flex-row gap-16 mx-auto py-8 lg:px-28">
      <div className="flex items-center justify-center w-full lg:w-1/2 h-[20rem] lg:h-[60vh] bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={product.image_path}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full lg:w-1/2 ">
        <div className="text-2xl font-semibold mb-4">{product.name}</div>
        <div className="text-2xl font-normal mb-12">{product.price}</div>
        <div className="mb-8">
          <SizeSelector product={product} />
        </div>
        <div className="text-xl font-normal mb-4">{product.composition}</div>
        <div className="text-xl font-normal mb-4">{product.additives}</div>
        <div className="text-xl font-normal mb-4">{product.nutritional_value}</div>
        <div className="text-xl font-normal mb-4">{product.information}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
