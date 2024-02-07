import axios, { AxiosResponse } from 'axios';
import baseURL from '../config/config';
import { ICategory } from '@models/CategoryModel';


const api = axios.create({
  baseURL: baseURL,
});

export const fetchCategories = async (): Promise<ICategory[]> => {
  try {
    const response: AxiosResponse<ICategory[]> = await api.get('/categories/');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
