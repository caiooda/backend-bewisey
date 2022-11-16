import { Request, Response } from "express";
import ObterTipoDeAulaUseCase from "../../../application/usecases/tipo-de-aula/ObtertTpoDeAulaUseCase";
import { connection } from "../../database/Connection";
import DatabaseRepositoryFactory from "../../factories/DatabaseRepositoryFactory";
import { HandleErroController } from "../error/ErroController";

export class ObterTipoDeAulaController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const databaseFactory = new DatabaseRepositoryFactory(connection);
      const service = new ObterTipoDeAulaUseCase(databaseFactory);
      const result = await service.execute();
      return response.status(200).json(result);
    } catch (erro: any) {
      const controller = HandleErroController(
        erro,
        "Não foi possível carregar lista de Tipos de Aula."
      );
      return response.status(controller.status).json(controller);
    }
  }
}
