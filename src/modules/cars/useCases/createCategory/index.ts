import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCateroryUseCase } from "./CreateCateroryUseCase";

const categoriesRepository = new CategoriesRepository();

const createCategoryUseCase = new CreateCateroryUseCase(categoriesRepository);

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
