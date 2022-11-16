import { PrismaClient } from "@prisma/client";
import UsuarioRepository from "../../../domain/repositories/UsuarioRepository";

export default class UsuarioRepositoryDatabase implements UsuarioRepository {
  constructor(readonly connection: PrismaClient) {}
  async criar(
    email: string,
    senha: string,
    nome: string,
    professor: boolean,
    aluno: boolean
  ): Promise<void> {
    await this.connection.usuario.create({
      data: {
        aulasAssistidas: 0,
        status: true,
        email: email,
        senha: senha,
        nome: nome,
        professor: professor,
        aluno: aluno,
      },
    });
  }

  async redefinirSenha(id: number, senha: string): Promise<void> {
    await this.connection.usuario.update({
      where: { id: id },
      data: {
        senha: senha,
      },
    });
  }

  async dadosUsuario(id: number): Promise<any> {
    return await this.connection.usuario.findUnique({
      where: { id: id },
      include: { Cidade: { select: { nome: true } } },
    });
  }

  async obterPeloEmail(email: string): Promise<any> {
    return await this.connection.usuario.findUnique({
      where: { email: email },
      include: { Cidade: { select: { nome: true } } },
    });
  }

  async obterTodosProfessores(): Promise<any> {
    return await this.connection.usuario.findMany({
      where: { professor: true },
    });
  }

  async obterTodosProfessoresPorMateria(id: number): Promise<any> {
    return await this.connection.usuario.findMany({
      where: { professor: true, Materia: { every: { id: id } } },
    });
  }
}
