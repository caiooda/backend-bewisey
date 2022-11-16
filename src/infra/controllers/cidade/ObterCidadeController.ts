import { Request, Response } from "express";
import ObterCidadeUseCase from "../../../application/usecases/cidade/ObterCidadeUseCase";
import { connection } from "../../database/Connection";
import DatabaseRepositoryFactory from "../../factories/DatabaseRepositoryFactory";
import { HandleErroController } from "../error/ErroController";

export class ObterCidadeController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const databaseFactory = new DatabaseRepositoryFactory(connection);
      const service = new ObterCidadeUseCase(databaseFactory);
      const result = await service.execute();
      return response.status(200).json(result);
    } catch (erro: any) {
      const controller = HandleErroController(
        erro,
        "Não foi possível carregar lista de Cidades."
      );
      return response.status(controller.status).json(controller);
    }
  }
}
