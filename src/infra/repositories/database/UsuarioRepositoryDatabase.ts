import { PrismaClient } from "@prisma/client";
import Usuario from "../../../domain/entities/Usuario";
import UsuarioRepository from "../../../domain/repositories/UsuarioRepository";

export default class UsuarioRepositoryDatabase implements UsuarioRepository {
  constructor(readonly connection: PrismaClient) {}

  async obterProfessores(): Promise<Usuario[] | null> {
    return await this.connection.usuario.findMany({
      where: { professor: true },
    });
  }

  async obterAlunos(): Promise<Usuario[] | null> {
    return await this.connection.usuario.findMany({
      where: { aluno: true },
    });
  }

  async obterTodos(): Promise<Usuario[] | null> {
    return await this.connection.usuario.findMany();
  }

  async obterPeloId(id: number): Promise<Usuario | null> {
    return await this.connection.usuario.findUnique({ where: { id: id } });
  }

  async obterPeloEmail(email: string): Promise<Usuario | null> {
    return await this.connection.usuario.findUnique({
      where: { email: email },
    });
  }

  async criar(
    email: string,
    senha: string,
    nome: string,
    professor: boolean,
    aluno: boolean,
    aulasAssistidas: number,
    status: boolean
  ): Promise<void> {
    await this.connection.usuario.create({
      data: {
        email: email,
        senha: senha,
        nome: nome,
        professor: professor,
        aluno: aluno,
        aulasAssistidas: aulasAssistidas,
        status: status,
      },
    });
  }

  async atualizar(
    id: number,
    email: string,
    senha: string,
    nome: string,
    professor: boolean,
    aluno: boolean,
    aulasAssistidas: number,
    status: boolean
  ): Promise<void> {
    await this.connection.usuario.update({
      where: { id: id },
      data: {
        email: email,
        senha: senha,
        nome: nome,
        professor: professor,
        aluno: aluno,
        aulasAssistidas: aulasAssistidas,
        status: status,
      },
    });
  }
}
