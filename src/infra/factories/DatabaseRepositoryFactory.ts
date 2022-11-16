import { PrismaClient } from "@prisma/client";
import RepositoryFactory from "../../domain/factories/RepositoryFactory";
import MateriaRepository from "../../domain/repositories/MateriaRepository";
import UsuarioRepository from "../../domain/repositories/UsuarioRepository";
import MateriaRepositoryDatabase from "../repositories/database/MateriaRepositoryDatabase";
import UsuarioRepositoryDatabase from "../repositories/database/UsuarioRepositoryDatabase";

export default class DatabaseRepositoryFactory implements RepositoryFactory {
  constructor(readonly connection: PrismaClient) {}

  criarUsuarioRepository(): UsuarioRepository {
    return new UsuarioRepositoryDatabase(this.connection);
  }

  criarMateriaRepository(): MateriaRepository {
    return new MateriaRepositoryDatabase(this.connection);
  }
}
