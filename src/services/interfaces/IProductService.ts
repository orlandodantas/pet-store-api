import { ProductDTO } from "../../models/interfaces";

export interface IProductService {
  getAll(): Promise<ProductDTO[]>;
  getById(id: string): Promise<ProductDTO>;
  getByName(name: string): Promise<ProductDTO[]>;
  create(product: ProductDTO): Promise<ProductDTO>;
  update(id: string, product: ProductDTO): Promise<ProductDTO>;
  delete(id: string): Promise<void>;
}