import { Request, Response } from "express";
import ObterProfessoresUseCase from "../../../application/usecases/usuario/ObterProfessoresUseCase";
import { connection } from "../../database/Connection";
import DatabaseRepositoryFactory from "../../factories/DatabaseRepositoryFactory";
import { HandleErroController } from "../error/ErroController";

export class ObterProfessoresController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const databaseFactory = new DatabaseRepositoryFactory(connection);
      const service = new ObterProfessoresUseCase(databaseFactory);
      const data = await service.execute();
      return response.status(200).json(data);
    } catch (erro: any) {
      const controller = HandleErroController(
        erro,
        "Não foi possível localizar os Professores."
      );
      return response.status(controller.status).json(controller);
    }
  }
}
