import { PrismaClient } from "@prisma/client";
import CidadeRepository from "../../../domain/repositories/CidadeRepository";

export default class CidadeRepositoryDatabase implements CidadeRepository {
  constructor(readonly connection: PrismaClient) {}

  async obterTodos(): Promise<any> {
    return await this.connection.cidade.findMany();
  }
}
