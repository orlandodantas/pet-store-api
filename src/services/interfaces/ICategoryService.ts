import { CategoryDTO } from "../../models/interfaces";

export interface ICategoryService {
  getAll(): Promise<CategoryDTO[]>;
  getById(id: string): Promise<CategoryDTO>;
  create(category: CategoryDTO): Promise<CategoryDTO>;
  update(id: string, category: CategoryDTO): Promise<CategoryDTO>;
  delete(id: string): Promise<void>;
}