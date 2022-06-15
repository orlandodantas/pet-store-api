import { ProductDTO } from './IProductModel';

export type CategoryDTO = {
  id?: string;
  description: string;
  products?: ProductDTO[];
};

export interface ICategoryModel {
  getAll(): Promise<CategoryDTO[]>;
  getById(id: string): Promise<CategoryDTO>;
  create(category: CategoryDTO): Promise<CategoryDTO>;
  update(id: string, category: CategoryDTO): Promise<CategoryDTO>;
  delete(id: string): Promise<void>;
}
