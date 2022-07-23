import { ProductController } from "../controllers";
import { connection, ProductModel } from "../models";
import { ProductService } from "../services";

export default class ProductFactory {
  public static create() {
    const productModel = new ProductModel(connection);
    const productService = new ProductService(productModel);
    const productController = new ProductController(productService);
    
    return productController;
  }
}
