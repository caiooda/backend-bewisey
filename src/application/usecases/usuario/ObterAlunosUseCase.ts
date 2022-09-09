import Usuario from "../../../domain/entities/Usuario";
import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import UsuarioRepository from "../../../domain/repositories/UsuarioRepository";

export default class ObterProfessoresUseCase {
  repository: UsuarioRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarUsuarioRepository();
  }

  async execute(): Promise<Usuario[] | null> {
    return await this.repository.obterAlunos();
  }
}
