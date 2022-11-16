import { Request } from "express";
import jwt from "jsonwebtoken";

export async function obterUsuario(request: any): Promise<number> {
  try {
    const authorization = request.headers.authorization;
    const chaveDeAcesso = authorization.split(" ")[1];
    const chaveSecreta = String(process.env.CHAVE_SECRETA);
    const payload: any = [];
    jwt.verify(chaveDeAcesso, chaveSecreta, function (error: any, result: any) {
      payload.push(result);
    });
    return payload[0].usuarioId;
  } catch (erro: any) {
    throw erro;
  }
}

export function obterId(request: Request): number {
  return Number(request.query.id);
}

export function obterUuid(request: Request): string {
  return String(request.query.id);
}
