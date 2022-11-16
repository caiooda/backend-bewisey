import jwt from "jsonwebtoken";

export const secretToken = String(process.env.CHAVE_SECRETA);

export class ObterTokenUseCase {
  async obterToken(data: any): Promise<string> {
    return jwt.sign(
      {
        usuarioId: data.id,
        nome: data.nome,
        professor: data.professor,
        aluno: data.aluno,
        aulasAssistidas: data.aulasAssistidas,
        cidadeId: data.cidadeId,
        nomeDaCidade: data.Cidade.nome,
        dataDeCadastro: data.dataDeCadastro,
        dataDaUltimaAtualizacao: data.dataDaUltimaAtualizacao,
      },
      secretToken,
      {
        expiresIn: "8h",
      }
    );
  }

  async execute(data: any): Promise<any> {
    const tokenService = await this.obterToken(data);
    const bearerToken = {
      usuarioId: data.id,
      nome: data.nome,
      professor: data.professor,
      aluno: data.aluno,
      aulasAssistidas: data.aulasAssistidas,
      cidadeId: data.cidadeId,
      nomeDaCidade: data.Cidade.nome,
      dataDeCadastro: data.dataDeCadastro,
      dataDaUltimaAtualizacao: data.dataDaUltimaAtualizacao,
      token: tokenService,
    };
    return bearerToken;
  }
}
