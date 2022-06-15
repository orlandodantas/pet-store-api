import { ProductDTO } from "./IProductModel";

export type ImageDTO = {
  id?: string;
  url: string;
  product: ProductDTO;
};
