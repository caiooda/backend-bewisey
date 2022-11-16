import RepositoryFactory from "../../../domain/factories/RepositoryFactory";
import UsuarioRepository from "../../../domain/repositories/UsuarioRepository";
import { ErroUseCase } from "../error/ErroUseCase";

export default class CriarUsuarioUseCase {
  repository: UsuarioRepository;

  constructor(readonly repositoryFactory: RepositoryFactory) {
    this.repository = repositoryFactory.criarUsuarioRepository();
  }

  async execute(data: any): Promise<void> {
    const email = await this.repository.obterPeloEmail(data.email);
    if (email) {
      ErroUseCase(
        [{ mensagem: "Já existe um usuário cadastrado com este e-mail." }],
        400
      );
    }
    const enconded = Buffer.from(data.senha).toString("base64");
    await this.repository.criar(
      data.email,
      enconded,
      data.nome,
      data.professor,
      data.aluno
    );
  }
}
