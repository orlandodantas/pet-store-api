import { Prisma } from "@prisma/client";

export type ProductDTO = {
  id?: string;
  name: string;
  description: string;
  price: number | Prisma.Decimal;
  category: {
    id: string,
    description: string,
  },
  Images?: {
    id: string,
    url: string,
  }[];
};

export interface IProductModel {
  getAll(): Promise<ProductDTO[]>;
  getById(id: string): Promise<ProductDTO>;
  getByName(name: string): Promise<ProductDTO[]>;
  create(product: ProductDTO): Promise<ProductDTO>;
  update(id: string, product: ProductDTO): Promise<ProductDTO>;
  delete(id: string): Promise<void>;
}
