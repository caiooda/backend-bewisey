import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import PlataformaRepository from "../../../domain/repositories/PlataformaRepository";

export default class ObterPlataformaUseCase {
  repository: PlataformaRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarPlataformaRepository();
  }

  async execute(): Promise<any> {
    return await this.repository.obterTodos();
  }
}
