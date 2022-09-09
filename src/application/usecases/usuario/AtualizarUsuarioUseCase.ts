import Usuario from "../../../domain/entities/Usuario";
import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import UsuarioRepository from "../../../domain/repositories/UsuarioRepository";

export default class AtualizarUsuarioUseCase {
  repository: UsuarioRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarUsuarioRepository();
  }

  async execute(data: Usuario): Promise<void> {
    await this.repository.atualizar(
      data.id,
      data.email,
      data.senha,
      data.nome,
      data.professor,
      data.aluno,
      data.aulasAssistidas,
      data.status
    );
  }
}
