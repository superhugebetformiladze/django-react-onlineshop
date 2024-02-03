// В ProductPage.tsx:

import React, { useState, useEffect } from 'react';
import ProductInfo from '../../components/Product/ProductInfo/ProductInfo';
import { fetchProductById } from '../../api/Products/fetchProductById';
import { IProduct } from '../../models/ProductModel';
import { useParams } from 'react-router-dom';

const ProductPage: React.FC = () => {
  const { productId } = useParams(); // Получаем productId из URL
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const productData = await fetchProductById(Number(productId)); // Преобразуем в число, если необходимо
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product info:', error);
      }
    };

    if (productId) {
      fetchProductInfo();
    }
  }, [productId]);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Product Page</h1>
      {product && <ProductInfo product={product} />}
    </div>
  );
};

export default ProductPage;
