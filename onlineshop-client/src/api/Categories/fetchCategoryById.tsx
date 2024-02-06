import axios, { AxiosResponse } from 'axios';
import baseURL from '../config/config';
import { ICategory } from '../../models/CategoryModel';



const api = axios.create({
  baseURL: baseURL,
});

export const fetchCategoryById = async (categoryId: number): Promise<ICategory> => {
  try {
    const response: AxiosResponse<ICategory> = await api.get(`/category/${categoryId}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching category with id ${categoryId}:`, error);
    throw error;
  }
};
