import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./listCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

export const listCategoryController = new ListCategoriesController(
  listCategoriesUseCase
);
