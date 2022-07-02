import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export class CategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  // Deixamos nosso contrutor como private
  private constructor() {
    this.categories = [];
  }

  // Criamos um metodo publico, para lidar com a criação da instancia
  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      // Caso não exista a instancia ele cria
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    // Caso contrario ele retorna a propria instancia
    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category: Category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}
