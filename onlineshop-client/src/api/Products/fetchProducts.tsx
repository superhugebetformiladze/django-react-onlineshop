import axios, { AxiosResponse } from 'axios';
import baseURL from '../config/config';

interface Product {
  id: number;
  name: string;
  price: number;
}

const api = axios.create({
  baseURL: baseURL,
});

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response: AxiosResponse<Product[]> = await api.get('/products/');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
