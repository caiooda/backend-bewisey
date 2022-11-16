import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import UsuarioRepository from "../../../domain/repositories/UsuarioRepository";
import { ErroUseCase } from "../error/ErroUseCase";

export default class RedefinirSenhaUseCse {
  repository: UsuarioRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarUsuarioRepository();
  }

  async execute(data: any): Promise<void> {
    const existe = await this.repository.dadosUsuario(data.id);
    if (!existe) {
      ErroUseCase(
        [{ mensagem: "Não foi possível redefinir sua senha (ID inválido)." }],
        400
      );
    }
    const enconded = Buffer.from(data.senha).toString("base64");
    await this.repository.redefinirSenha(data.id, enconded);
  }
}
