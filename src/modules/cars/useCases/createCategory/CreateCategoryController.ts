import { Request, Response } from "express";

import { CreateCateroryUseCase } from "./CreateCateroryUseCase";

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCateroryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createCategoryUseCase.execute({ description, name });

    return response.status(201).send();
  }
}
