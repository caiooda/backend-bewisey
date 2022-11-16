import { Request, Response } from "express";
import ObterPlataformaUseCase from "../../../application/usecases/plataforma/ObterPlataformaUseCase";
import { connection } from "../../database/Connection";
import DatabaseRepositoryFactory from "../../factories/DatabaseRepositoryFactory";
import { HandleErroController } from "../error/ErroController";

export class ObterPlataformaController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const databaseFactory = new DatabaseRepositoryFactory(connection);
      const service = new ObterPlataformaUseCase(databaseFactory);
      const result = await service.execute();
      return response.status(200).json(result);
    } catch (erro: any) {
      const controller = HandleErroController(
        erro,
        "Não foi possível carregar lista de Plataformas."
      );
      return response.status(controller.status).json(controller);
    }
  }
}
