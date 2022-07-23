import Joi from "joi";
import { BadRequestError, NotFoundError } from "restify-errors";
import { CategoryDTO, ICategoryModel } from "../models/interfaces";
import { ICategoryService } from "./interfaces";

export default class CategoryService implements ICategoryService {
  private _categoryModel: ICategoryModel;

  constructor(category: ICategoryModel) {
    this._categoryModel = category;
  }

  public async getAll(): Promise<CategoryDTO[]> {
    const categoriesData = await this._categoryModel.getAll();

    if (!categoriesData || categoriesData.length === 0) throw new NotFoundError('No category found');

    return categoriesData;
  }

  public async getById(id: string): Promise<CategoryDTO> {
    const categoryData = await this._categoryModel.getById(id);

    if (!categoryData) throw new NotFoundError('No category found');

    return categoryData;
  }

  public async create(category: CategoryDTO): Promise<CategoryDTO> {
    this.validateData(category); //Faz validação dos dados
    
    const categoriesData = await this._categoryModel.create(category);

    return categoriesData;
  }

  public async update(id: string, category: CategoryDTO): Promise<CategoryDTO> {
    this.validateData(category); //Faz validação dos dados

    const categoryFound = await this._categoryModel.getById(id);

    if (!categoryFound) throw new NotFoundError('No category found');

    const categoryData = await this._categoryModel.update(id, category);

    return categoryData;
  }

  public async delete(id: string): Promise<void> {
    const categoryFound = await this._categoryModel.getById(id);

    if (!categoryFound) throw new NotFoundError('No category found');

    await this._categoryModel.delete(id);
  }

  private validateData(category: CategoryDTO): void {
    const schema = Joi.object({
      id: Joi.string(),
      description: Joi.string().required(),
    });

    const { error } = schema.validate(category);

    if (error) throw new BadRequestError(error.message);
  }
}
