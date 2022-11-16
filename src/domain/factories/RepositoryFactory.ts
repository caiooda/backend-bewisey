import UsuarioRepository from "../repositories/UsuarioRepository";

export default interface RepositoryFactory {
  criarUsuarioRepository(): UsuarioRepository;
}
