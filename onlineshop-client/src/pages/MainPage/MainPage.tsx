import React from 'react';
import ProductList from '@components/Product/ProductList/ProductList';

const MainPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Продукты</h1>
      <ProductList />
    </div>
  );
};

export default MainPage;
