import { PrismaClient } from "@prisma/client";
import RepositoryFactory from "../../domain/factories/RepositoryFactory";
import UsuarioRepository from "../../domain/repositories/UsuarioRepository";
import UsuarioRepositoryDatabase from "../repositories/database/UsuarioRepositoryDatabase";

export default class DatabaseRepositoryFactory implements RepositoryFactory {
  constructor(readonly connection: PrismaClient) {}

  criarUsuarioRepository(): UsuarioRepository {
    return new UsuarioRepositoryDatabase(this.connection);
  }
}
