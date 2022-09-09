import Aula from "../../../domain/entities/Aula";
import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import AulaRepository from "../../../domain/repositories/AulaRepository";

export default class ObterAulaPeloProfessorUseCase {
  repository: AulaRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarAulaRepository();
  }

  async execute(id: number): Promise<Aula[] | null> {
    return await this.repository.obterPeloProfessor(id);
  }
}
