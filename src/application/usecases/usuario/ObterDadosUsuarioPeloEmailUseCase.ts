import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import UsuarioRepository from "../../../domain/repositories/UsuarioRepository";
import { ErroUseCase } from "../error/ErroUseCase";

export default class ObterDadosUsuarioPeloEmailUseCase {
  repository: UsuarioRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarUsuarioRepository();
  }

  async execute(data: any): Promise<any> {
    const usuario = await this.repository.obterPeloEmail(data.email);
    if (!usuario) {
      ErroUseCase(
        [
          {
            mensagem:
              "Não foi possível localizar o Usuário informado (E-mail inválido).",
          },
        ],
        400
      );
    }
    return usuario;
  }
}
