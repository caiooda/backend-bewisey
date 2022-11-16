import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import CidadeRepository from "../../../domain/repositories/CidadeRepository";

export default class ObterCidadeUseCase {
  repository: CidadeRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarCidadeRepository();
  }

  async execute(): Promise<any> {
    return await this.repository.obterTodos();
  }
}
