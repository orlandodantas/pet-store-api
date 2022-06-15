import { CategoryController } from "../controllers";
import { CategoryModel, connection } from "../models";
import { CategoryService } from "../services";

export default class CategoryFactory {
  public static create() {
    const categoryModel = new CategoryModel(connection);
    const categoryService = new CategoryService(categoryModel);
    const categoryController = new CategoryController(categoryService);

    return categoryController;
  }
}
