import Aula from "../entities/Aula";

export default interface AulaRepository {
  obterPeloAluno(alunoId: number): Promise<Aula[] | null>;
  obterPeloProfessor(professorId: number): Promise<Aula[] | null>;
  criar(
    horarioInicio: string,
    horarioTermino: string,
    materiaId: number,
    dataDeCadastro: Date,
    alunoId: number,
    professorId: number
  ): Promise<void>;
  excluir(id: number): Promise<void>;
}
