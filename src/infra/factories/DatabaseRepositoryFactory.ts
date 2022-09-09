import { PrismaClient } from "@prisma/client";
import RepositoryFactory from "../../domain/factories/RepositoryFactory";
import AulaRepository from "../../domain/repositories/AulaRepository";
import UsuarioRepository from "../../domain/repositories/UsuarioRepository";
import AulaRepositoryDatabase from "../repositories/database/AulaRepositoryDatabase";
import UsuarioRepositoryDatabase from "../repositories/database/UsuarioRepositoryDatabase";

export default class DatabaseRepositoryFactory implements RepositoryFactory {
  constructor(readonly connection: PrismaClient) {}

  criarAulaRepository(): AulaRepository {
    return new AulaRepositoryDatabase(this.connection);
  }

  criarUsuarioRepository(): UsuarioRepository {
    return new UsuarioRepositoryDatabase(this.connection);
  }
}
