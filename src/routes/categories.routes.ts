import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCateroryService } from "../services/CreateCateroryService";

export const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCateroryService(categoriesRepository);

  createCategoryService.execute({ description, name });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.list();

  return response.status(200).json(categories);
});
