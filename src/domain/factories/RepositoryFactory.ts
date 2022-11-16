import CidadeRepository from "../repositories/CidadeRepository";
import MateriaRepository from "../repositories/MateriaRepository";
import PlataformaRepository from "../repositories/PlataformaRepository";
import TipoDeAulaRepository from "../repositories/TipoDeAulaRepository";
import UsuarioRepository from "../repositories/UsuarioRepository";

export default interface RepositoryFactory {
  criarUsuarioRepository(): UsuarioRepository;
  criarMateriaRepository(): MateriaRepository;
  criarPlataformaRepository(): PlataformaRepository;
  criarTipoDeAulaRepository(): TipoDeAulaRepository;
  criarCidadeRepository(): CidadeRepository;
}
