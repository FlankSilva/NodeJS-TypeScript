import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCateroryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoruAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoruAlreadyExists) throw new Error("Category already exist");

    this.categoriesRepository.create({ name, description });
  }
}
