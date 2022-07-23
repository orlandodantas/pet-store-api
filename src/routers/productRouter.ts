import { Router } from "express";
import { ProductFactory } from "../factories";

const route = Router();

  const productController = ProductFactory.create();
route
  .get('/', productController.getAll)
  .get('/:id', productController.getById)
  .post('/', productController.create)
  .put('/:id', productController.update)
  .delete('/:id', productController.delete);

export default route;