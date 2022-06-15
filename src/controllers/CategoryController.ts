import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ICategoryService } from "../services/interfaces";
import { ICategoryController } from "./interfaces";

export default class CategoryController implements ICategoryController {
  private _categoryService: ICategoryService;

  constructor(category: ICategoryService) {
    this._categoryService = category;

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const categoriesData = await this._categoryService.getAll();

    return res.status(StatusCodes.OK).json(categoriesData);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const categoryData = await this._categoryService.getById(id);

    return res.status(StatusCodes.OK).json(categoryData);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { description } = req.body;

    const categoryData = await this._categoryService.create({ description });

    return res.status(StatusCodes.CREATED).json(categoryData);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { description } = req.body;

    const categoryData = await this._categoryService.update(id, { description });

    return res.status(StatusCodes.OK).json(categoryData);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await this._categoryService.delete(id);

    return res.status(StatusCodes.OK).end();
  }
}
