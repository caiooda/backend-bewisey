import bcrypt from "bcrypt";
import Usuario from "../../../domain/entities/Usuario";
import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import UsuarioRepository from "../../../domain/repositories/UsuarioRepository";
import { ErroUseCase } from "../error/ErroUseCase";

export default class CriarUsuarioUseCase {
  repository: UsuarioRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarUsuarioRepository();
  }

  async execute(data: Usuario): Promise<void> {
    const email = await this.repository.obterPeloEmail(data.email);
    if (email) {
      ErroUseCase(
        [{ mensagem: "Já existe um usuário cadastrado com este e-mail." }],
        400
      );
    }
    const senha = bcrypt.hashSync(data.senha, 10);
    await this.repository.criar(
      data.email,
      senha,
      data.nome,
      data.professor,
      data.aluno,
      data.aulasAssistidas,
      data.status
    );
  }
}
