import { CategoryDTO } from "./ICategoryModel";
import { ImageDTO } from "./IImageModel";

export type ProductDTO = {
  id?: string;
  name: string;
  description: string;
  price: number;
  category: CategoryDTO;
  Images?: ImageDTO[];
};
