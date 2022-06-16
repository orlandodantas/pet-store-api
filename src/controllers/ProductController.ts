import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ProductDTO } from "../models/interfaces";
import { IProductService } from "../services/interfaces";
import { IProductController } from "./interfaces";

export default class ProductController implements IProductController {
  private _productService: IProductService;

  constructor(product: IProductService) {
    this._productService = product;

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const { name } = req.query;
    let productData: ProductDTO[];

    if (name) {
      productData = await this._productService.getByName(name as string);
    } else {
      productData = await this._productService.getAll();
    }

    return res.status(StatusCodes.OK).json(productData);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    console.log('ID');
    
    const productData = await this._productService.getById(id);

    return res.status(StatusCodes.OK).json(productData);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const product = req.body;
    
    const productData = await this._productService.create(product);

    return res.status(StatusCodes.CREATED).json(productData);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const product = req.body;
    
    const productData = await this._productService.update(id, product);

    return res.status(StatusCodes.OK).json(productData);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    
    await this._productService.delete(id);

    return res.status(StatusCodes.OK).end();
  }
}
