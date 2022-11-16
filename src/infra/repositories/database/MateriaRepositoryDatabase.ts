import { PrismaClient } from "@prisma/client";
import MateriaRepository from "../../../domain/repositories/MateriaRepository";

export default class MateriaRepositoryDatabase implements MateriaRepository {
  constructor(readonly connection: PrismaClient) {}
  
  async obterTodos(): Promise<any> {
    return await this.connection.materia.findMany();
  }
}
