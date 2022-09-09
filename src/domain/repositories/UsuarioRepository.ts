import Usuario from "../entities/Usuario";

export default interface UsuarioRepository {
  obterTodos(): Promise<Usuario[] | null>;
  obterProfessores(): Promise<Usuario[] | null>;
  obterAlunos(): Promise<Usuario[] | null>;
  obterPeloId(id: number): Promise<Usuario | null>;
  obterPeloEmail(email: string): Promise<Usuario | null>;
  criar(
    email: string,
    senha: string,
    nome: string,
    professor: boolean,
    aluno: boolean,
    aulasAssistidas: number,
    status: boolean
  ): Promise<void>;
  atualizar(
    id: number,
    email: string,
    senha: string,
    nome: string,
    professor: boolean,
    aluno: boolean,
    aulasAssistidas: number,
    status: boolean
  ): Promise<void>;
}
