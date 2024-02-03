import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/Product/ProductCard/ProductCard';
import { fetchProducts } from '../../api/Products/fetchProducts';

const MainPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]); // Используем any, но лучше использовать типы данных для продуктов

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error setting products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Продукты</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
