import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import TipoDeAulaRepository from "../../../domain/repositories/TipoDeAulaRepository";

export default class ObterTipoDeAulaUseCase {
  repository: TipoDeAulaRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarTipoDeAulaRepository();
  }

  async execute(): Promise<any> {
    return await this.repository.obterTodos();
  }
}
