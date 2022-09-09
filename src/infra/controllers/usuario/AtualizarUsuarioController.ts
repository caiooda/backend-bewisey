import { Request, Response } from "express";
import AtualizarUsuarioUseCase from "../../../application/usecases/usuario/AtualizarUsuarioUseCase";
import { connection } from "../../database/Connection";
import DatabaseRepositoryFactory from "../../factories/DatabaseRepositoryFactory";
import { HandleErroController } from "../error/ErroController";

export class AtualizarUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body;
      const databaseFactory = new DatabaseRepositoryFactory(connection);
      const service = new AtualizarUsuarioUseCase(databaseFactory);
      await service.execute(data);
      return response.status(201).send();
    } catch (erro: any) {
      const controller = HandleErroController(
        erro,
        "Não foi possível alterar o Usuário informada."
      );
      return response.status(controller.status).json(controller);
    }
  }
}
