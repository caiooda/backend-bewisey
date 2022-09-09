import bcrypt from "bcrypt";
import Usuario from "../../../domain/entities/Usuario";
import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import UsuarioRepository from "../../../domain/repositories/UsuarioRepository";
import { ErroUseCase } from "../error/ErroUseCase";
import { ObterTokenUseCase } from "./ObterTokenUseCase";

export default class LoginUseCase {
  repository: UsuarioRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarUsuarioRepository();
  }

  async execute(data: Usuario): Promise<any> {
    if (!data) {
      ErroUseCase(
        [
          {
            mensagem: "Não foi possível realizar Login.",
          },
        ],
        400
      );
    }
    const usuario = await this.repository.obterPeloEmail(data.email);
    if (!usuario) {
      ErroUseCase(
        [
          {
            mensagem: "Usuário ou senha inválidos(s).",
          },
        ],
        400
      );
    } else {
      const senha = await bcrypt.compare(data.senha, usuario.senha);
      if (!senha) {
        ErroUseCase(
          [
            {
              mensagem: "Usuário ou senha inválidos(s).",
            },
          ],
          400
        );
      }
      const service = new ObterTokenUseCase();
      const token = await service.execute(usuario);
      return token;
    }
  }
}
