import AulaRepository from "../repositories/AulaRepository";
import UsuarioRepository from "../repositories/UsuarioRepository";

export default interface RepositoryFactory {
  criarUsuarioRepository(): UsuarioRepository;
  criarAulaRepository(): AulaRepository;
}
