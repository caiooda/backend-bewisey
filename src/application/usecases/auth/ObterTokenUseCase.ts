import jwt from "jsonwebtoken";
import Token from "../../../domain/entities/Token";
import Usuario from "../../../domain/entities/Usuario";

export const secretToken = String(process.env.CHAVE_SECRETA);

export class ObterTokenUseCase {
  async obterToken(data: Usuario): Promise<string> {
    return jwt.sign(
      {
        usuarioId: data.id,
      },
      secretToken,
      {
        expiresIn: "8h",
      }
    );
  }

  async execute(data: Usuario): Promise<Token> {
    const token = await this.obterToken(data);
    return {
      usuarioId: data.id,
      token: token,
    };
  }
}
