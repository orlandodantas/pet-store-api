import { PrismaClient } from "@prisma/client";
import { IProductModel, ProductDTO } from "./interfaces";

export default class ProductModel implements IProductModel {
  private _connection: PrismaClient;

  constructor(connectionDB: PrismaClient) {
    this._connection = connectionDB;
  }

  public async getAll(): Promise<ProductDTO[]> {
    const productData = await this._connection.product.findMany({
      include: {
        category: {
          select: { id: true, description: true },
        },
        Images: {
          select: { id: true, url: true },
        },
      },
    });

    return productData as ProductDTO[];
  }

  public async getById(id: string): Promise<ProductDTO> {
    const productData = await this._connection.product.findUnique({
      where: { id },
      include: {
        category: {
          select: { id: true, description: true },
        },
        Images: {
          select: { id: true, url: true },
        },
      },
    });

    return productData as ProductDTO;
  }

  public async getByName(name: string): Promise<ProductDTO[]> {
    const productData = await this._connection.product.findMany({
      where: { name },
      include: {
        category: {
          select: { id: true, description: true },
        },
        Images: {
          select: { id: true, url: true },
        },
      },
    });

    return productData as ProductDTO[];
  }

  public async create(product: ProductDTO): Promise<ProductDTO> {
    const productData = await this._connection.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        category: {
          connect: { id: product.category.id },
        },
      },
      include: {
        category: {
          select: { id: true, description: true },
        },
        Images: {
          select: { id: true, url: true },
        },
      },
    });

    return productData as ProductDTO;
  }

  public async update(id: string, product: ProductDTO): Promise<ProductDTO> {
    const productData = await this._connection.product.update({
      where: { id },
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        category: {
          connect: { id: product.category.id },
        },
      },
      include: {
        category: {
          select: { id: true, description: true },
        },
        Images: {
          select: { id: true, url: true },
        },
      },
    });

    return productData as ProductDTO;
  }

  public async delete(id: string): Promise<void> {
    await this._connection.product.delete({
      where: { id },
    });
  }
}
