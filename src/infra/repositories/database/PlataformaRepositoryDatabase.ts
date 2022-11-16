import { PrismaClient } from "@prisma/client";
import PlataformaRepository from "../../../domain/repositories/PlataformaRepository";

export default class PlataformaRepositoryDatabase implements PlataformaRepository {
  constructor(readonly connection: PrismaClient) {}
  
  async obterTodos(): Promise<any> {
    return await this.connection.plataforma.findMany();
  }
}
