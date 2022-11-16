import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import MateriaRepository from "../../../domain/repositories/MateriaRepository";

export default class ObterMateriaUseCase {
  repository: MateriaRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarMateriaRepository();
  }

  async execute(): Promise<any> {
    return await this.repository.obterTodos();
  }
}
