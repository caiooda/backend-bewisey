import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { secretToken } from "../../../application/usecases/auth/ObterTokenUseCase";

export enum NOT_FOUND_TOKEN_MESSAGE {
  tipo = "TOKEN_NÃO_ENCONTRADO",
  mensagem = "Token de acesso não encontrado.",
  status = 401,
}

export enum EXPIRED_TOKEN_MESSAGE {
  tipo = "TOKEN_EXPIRADO",
  mensagem = "Token de acesso expirou.",
  status = 401,
}

export enum INVALID_TOKEN_MESSAGE {
  tipo = "TOKEN_INVÁLIDO",
  mensagem = "Token de acesso inválido.",
  status = 401,
}

export class AutenticarController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<any> {
    const { authorization } = request.headers;
    if (!authorization)
      return response.status(401).send({
        tipo: NOT_FOUND_TOKEN_MESSAGE.tipo,
        mensagem: NOT_FOUND_TOKEN_MESSAGE.mensagem,
        status: NOT_FOUND_TOKEN_MESSAGE.status,
      });
    try {
      jwt.verify(authorization.split(" ")[1], secretToken);
      return next();
    } catch (error: any) {
      if (error == "JsonWebTokenError: invalid token") {
        return response.status(401).send({
          tipo: INVALID_TOKEN_MESSAGE.tipo,
          mensagem: INVALID_TOKEN_MESSAGE.mensagem,
          status: INVALID_TOKEN_MESSAGE.status,
        });
      }
      if (error == "TokenExpiredError: jwt expired") {
        return response.status(401).send({
          tipo: EXPIRED_TOKEN_MESSAGE.tipo,
          mensagem: EXPIRED_TOKEN_MESSAGE.mensagem,
          status: EXPIRED_TOKEN_MESSAGE.status,
        });
      }
      return response.status(401).send({
        tipo: INVALID_TOKEN_MESSAGE.tipo,
        mensagem: INVALID_TOKEN_MESSAGE.mensagem,
        status: INVALID_TOKEN_MESSAGE.status,
      });
    }
  }
}
