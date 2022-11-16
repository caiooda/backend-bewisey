import { PrismaClient } from "@prisma/client";
import RepositoryFactory from "../../domain/factories/RepositoryFactory";
import CidadeRepository from "../../domain/repositories/CidadeRepository";
import MateriaRepository from "../../domain/repositories/MateriaRepository";
import PlataformaRepository from "../../domain/repositories/PlataformaRepository";
import TipoDeAulaRepository from "../../domain/repositories/TipoDeAulaRepository";
import UsuarioRepository from "../../domain/repositories/UsuarioRepository";
import CidadeRepositoryDatabase from "../repositories/database/CidadeRepositoryDatabase";
import MateriaRepositoryDatabase from "../repositories/database/MateriaRepositoryDatabase";
import PlataformaRepositoryDatabase from "../repositories/database/PlataformaRepositoryDatabase";
import TipoDeAulaRepositoryDatabase from "../repositories/database/TipoDeAulaRepositoryDatabase";
import UsuarioRepositoryDatabase from "../repositories/database/UsuarioRepositoryDatabase";

export default class DatabaseRepositoryFactory implements RepositoryFactory {
  constructor(readonly connection: PrismaClient) {}

  criarUsuarioRepository(): UsuarioRepository {
    return new UsuarioRepositoryDatabase(this.connection);
  }

  criarMateriaRepository(): MateriaRepository {
    return new MateriaRepositoryDatabase(this.connection);
  }

  criarPlataformaRepository(): PlataformaRepository {
    return new PlataformaRepositoryDatabase(this.connection);
  }

  criarTipoDeAulaRepository(): TipoDeAulaRepository {
    return new TipoDeAulaRepositoryDatabase(this.connection);
  }

  criarCidadeRepository(): CidadeRepository {
    return new CidadeRepositoryDatabase(this.connection);
  }
}
