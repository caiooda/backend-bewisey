export default class Aula {
  constructor(
    readonly id: number,
    readonly horarioInicio: string,
    readonly horarioTermino: string,
    readonly materiaId: number,
    readonly dataDeCadastro: Date,
    readonly alunoId: number,
    readonly professorId: number,
    readonly temaAula?: string
  ) {}
}
