import Aula from "../../../domain/entities/Aula";
import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import AulaRepository from "../../../domain/repositories/AulaRepository";

export default class CriarAulaUseCase {
  repository: AulaRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarAulaRepository();
  }

  async execute(data: Aula): Promise<void> {
    await this.repository.criar(
      data.horarioInicio,
      data.horarioTermino,
      data.materiaId,
      data.dataDeCadastro,
      data.alunoId,
      data.professorId
    );
  }
}
