import { IProductSize } from "@models/SizeModel";

export interface IProduct {
    id: number;
    name: string;
    price: number;
    composition: string;
    additives: string;
    nutritional_value: string;
    information: string;
    category: string;
    image_path: string;
    sizes: IProductSize[];
}
