import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationController } from "./listSpecificationController";
import { ListSpecificationUseCase } from "./listSpecificationUseCase";

const specificationRepository = SpecificationsRepository.getInstance();

const listSpecificationUseCase = new ListSpecificationUseCase(
  specificationRepository
);

export const listSpecificationsController = new ListSpecificationController(
  listSpecificationUseCase
);
