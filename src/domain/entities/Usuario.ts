export default class Usuario {
  constructor(
    readonly id: number,
    readonly nome: string,
    readonly email: string,
    readonly senha: string,
    readonly professor: boolean,
    readonly aluno: boolean,
    readonly aulasAssistidas: number,
    readonly status: boolean,
    readonly dataDeCadastro?: Date,
    readonly dataDaUltimaAtualizacao?: Date
  ) {}
}
