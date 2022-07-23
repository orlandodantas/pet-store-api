import { Router } from 'express';
import { CategoryFactory } from '../factories';

const route = Router();

const categoryController = CategoryFactory.create();
route
  .get('/', categoryController.getAll)
  .get('/:id', categoryController.getById)
  .post('/', categoryController.create)
  .put('/:id', categoryController.update)
  .delete('/:id', categoryController.delete);

export default route;