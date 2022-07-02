import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCateroryUseCase } from "./CreateCateroryUseCase";

// Removemos o new e chamamos o metodo diretamente
const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCateroryUseCase(categoriesRepository);

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
