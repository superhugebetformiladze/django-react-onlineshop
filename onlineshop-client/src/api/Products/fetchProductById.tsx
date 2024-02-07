import axios, { AxiosResponse } from 'axios';
import baseURL from '../config/config';
import { IProduct } from '@models/ProductModel';



const api = axios.create({
  baseURL: baseURL,
});

export const fetchProductById = async (productId: number): Promise<IProduct> => {
  try {
    const response: AxiosResponse<IProduct> = await api.get(`/product/${productId}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${productId}:`, error);
    throw error;
  }
};
