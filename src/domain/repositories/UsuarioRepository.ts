export default interface UsuarioRepository {
  criar(
    email: string,
    senha: string,
    nome: string,
    professor: boolean,
    aluno: boolean
  ): Promise<void>;
  redefinirSenha(id: number, senha: string): Promise<void>;
  dadosUsuario(id: number): Promise<any>;
  obterPeloEmail(email: string): Promise<any>;
  obterTodosProfessores(): Promise<any>;
  obterTodosProfessoresPorMateria(id: number): Promise<any>;
}
