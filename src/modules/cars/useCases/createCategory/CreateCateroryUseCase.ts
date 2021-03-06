import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCateroryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoruAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoruAlreadyExists) throw new Error("Category already exist");

    this.categoriesRepository.create({ name, description });
  }
}
