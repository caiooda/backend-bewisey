import { PrismaClient } from "@prisma/client";
import TipoDeAulaRepository from "../../../domain/repositories/TipoDeAulaRepository";

export default class TipoDeAulaRepositoryDatabase implements TipoDeAulaRepository {
  constructor(readonly connection: PrismaClient) {}
  
  async obterTodos(): Promise<any> {
    return await this.connection.tipoDeAula.findMany();
  }
}
