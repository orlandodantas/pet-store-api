import { PrismaClient } from "@prisma/client";
import { CategoryDTO, ICategoryModel } from "./interfaces";

export default class CategoryModel implements ICategoryModel {
  private _connection: PrismaClient;

  constructor(connectionDB: PrismaClient) {
    this._connection = connectionDB;
  }

  public async getAll(): Promise<CategoryDTO[]> {
    const categoriesData = await this._connection.category.findMany();

    return categoriesData;
  }

  public async getById(id: string): Promise<CategoryDTO> {
    const categoryData = await this._connection.category.findUnique({
      where: { id },
    });

    return categoryData as CategoryDTO;
  }

  public async create(category: CategoryDTO): Promise<CategoryDTO> {
    const categoryData = await this._connection.category.create({
      data: category,
    });

    return categoryData
  }

  public async update(id: string, category: CategoryDTO): Promise<CategoryDTO> {
    const categoryData = await this._connection.category.update({
      where: { id },
      data: { description: category.description },
    });

    return categoryData;
  }

  public async delete(id: string): Promise<void> {
    await this._connection.category.delete({
      where: { id },
    });
  }
}
