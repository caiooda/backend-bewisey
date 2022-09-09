import Usuario from "../../../domain/entities/Usuario";
import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import UsuarioRepository from "../../../domain/repositories/UsuarioRepository";
import { ErroUseCase } from "../error/ErroUseCase";

export default class ObterUsuarioUseCase {
  repository: UsuarioRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarUsuarioRepository();
  }

  async execute(id: number): Promise<Usuario | null> {
    const usuario = await this.repository.obterPeloId(id);
    if (!usuario) {
      ErroUseCase(
        [
          {
            mensagem:
              "Não foi possível localizar o Usuário informado (ID inválido).",
          },
        ],
        400
      );
    }
    return usuario;
  }
}
