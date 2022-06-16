import Joi from "joi";
import { BadRequestError, NotFoundError } from "restify-errors";
import { IProductModel, ProductDTO } from "../models/interfaces";
import { IProductService } from "./interfaces";

export default class ProductService implements IProductService {
  private _productModel: IProductModel;

  constructor(product: IProductModel) {
    this._productModel = product;
  }

  public async getAll(): Promise<ProductDTO[]> {
    const productData = await this._productModel.getAll();

    if (!productData || productData.length === 0) throw new NotFoundError('No product found');

    return productData;
  }

  public async getById(id: string): Promise<ProductDTO> {
    const productData = await this._productModel.getById(id);

    if (!productData) throw new NotFoundError('No product found');

    return productData;
  }

  public async getByName(name: string): Promise<ProductDTO[]> {
    const productData = await this._productModel.getByName(name);

    if (!productData || productData.length === 0) throw new NotFoundError('No product found');

    return productData;
  }

  public async create(product: ProductDTO): Promise<ProductDTO> {
    this.validateData(product);
    
    const productData = await this._productModel.create(product);

    return productData;
  }

  public async update(id: string, product: ProductDTO): Promise<ProductDTO> {
    this.validateData(product);

    const productFound = await this._productModel.getById(id);

    if (!productFound) throw new NotFoundError('No product found');
    
    const productData = await this._productModel.update(id, product);

    return productData;
  }

  public async delete(id: string): Promise<void> {
    const productFound = await this._productModel.getById(id);

    if (!productFound) throw new NotFoundError('No product found');
    
    await this._productModel.delete(id);
  }

  private validateData(product: ProductDTO): void {
    const schema = Joi.object({
      id: Joi.string(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
      category: Joi.object( {
        id: Joi.string(),
        description: Joi.string(),
      }),
    });

    const { error } = schema.validate(product);

    if (error) throw new BadRequestError(error.message);
  }
}
