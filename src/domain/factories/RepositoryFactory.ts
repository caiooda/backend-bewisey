import MateriaRepository from "../repositories/MateriaRepository";
import UsuarioRepository from "../repositories/UsuarioRepository";

export default interface RepositoryFactory {
  criarUsuarioRepository(): UsuarioRepository;
  criarMateriaRepository(): MateriaRepository;
}
