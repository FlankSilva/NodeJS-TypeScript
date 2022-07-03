import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./listSpecificationUseCase";

export class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const specifications = this.listSpecificationUseCase.execute();

    return response.status(200).json(specifications);
  }
}
