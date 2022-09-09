import { Request, Response } from "express";
import CriarUsuarioUseCase from "../../../application/usecases/usuario/CriarUsuarioUseCase";
import { connection } from "../../database/Connection";
import DatabaseRepositoryFactory from "../../factories/DatabaseRepositoryFactory";
import { HandleErroController } from "../error/ErroController";

export class CriarUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      const databaseFactory = new DatabaseRepositoryFactory(connection);
      const service = new CriarUsuarioUseCase(databaseFactory);
      await service.execute(data);
      return response.status(201).send();
    } catch (erro: any) {
      const controller = HandleErroController(
        erro,
        "Não foi possível criar o Usuário informada."
      );
      return response.status(controller.status).json(controller);
    }
  }
}
