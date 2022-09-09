import { PrismaClient } from "@prisma/client";
import Aula from "../../../domain/entities/Aula";
import AulaRepository from "../../../domain/repositories/AulaRepository";

export default class AulaRepositoryDatabase implements AulaRepository {
  constructor(readonly connection: PrismaClient) {}

  async obterPeloAluno(alunoId: number): Promise<Aula[] | null> {
    const lista = await this.connection.aula.findMany({
      where: { alunoId: alunoId },
      include: { Materia: true },
    });
    return await this.formatar(lista);
  }

  async obterPeloProfessor(professorId: number): Promise<Aula[] | null> {
    const lista = await this.connection.aula.findMany({
      where: { professorId: professorId },
      include: { Materia: true },
    });
    return await this.formatar(lista);
  }

  async formatar(data: any[]): Promise<Aula[] | null> {
    const lista: Aula[] = [];
    data.forEach((row) => {
      lista.push({
        id: row.id,
        horarioInicio: row.horarioInicio,
        horarioTermino: row.horarioTermino,
        materiaId: row.Modelo.materiaId,
        dataDeCadastro: row.dataDeCadastro,
        professorId: row.professorId,
        alunoId: row.alunoId,
        temaAula: row.Materia.descricao,
      });
    });
    return lista;
  }

  async criar(
    horarioInicio: string,
    horarioTermino: string,
    materiaId: number,
    dataDeCadastro: Date,
    alunoId: number,
    professorId: number
  ): Promise<void> {
    await this.connection.aula.create({
      data: {
        horarioInicio: horarioInicio,
        horarioTermino: horarioTermino,
        materiaId: materiaId,
        dataDeCadastro: dataDeCadastro,
        professorId: professorId,
        alunoId: alunoId,
      },
    });
  }
  async excluir(id: number): Promise<void> {
    await this.connection.aula.delete({ where: { id: id } });
  }
}
