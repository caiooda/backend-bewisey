import { Request, Response } from "express";
import LogarUseCase from "../../../application/usecases/auth/LoginUseCase";
import { connection } from "../../database/Connection";
import DatabaseRepositoryFactory from "../../factories/DatabaseRepositoryFactory";
import { HandleErroController } from "../error/ErroController";

export class LoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      const databaseRepository = new DatabaseRepositoryFactory(connection);
      const service = new LogarUseCase(databaseRepository);
      const usuario = await service.execute(data);
      return response.status(200).send(usuario);
    } catch (erro: any) {
      const controller = HandleErroController(erro, "Não foi possível logar.");
      return response.status(controller.status).json(controller);
    }
  }
}
