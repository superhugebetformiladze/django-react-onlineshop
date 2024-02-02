import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Загрузка категорий
    axios.get<Category[]>('http://localhost:8000/api/categories/')
      .then((response: AxiosResponse<Category[]>) => setCategories(response.data))
      .catch(error => console.error(error));

    // Загрузка продуктов
    axios.get<Product[]>('http://localhost:8000/api/products/')
      .then((response: AxiosResponse<Product[]>) => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
