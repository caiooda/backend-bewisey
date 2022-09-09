import { Request, Response } from "express";
import ObterAlunosUseCase from "../../../application/usecases/usuario/ObterAlunosUseCase";
import { connection } from "../../database/Connection";
import DatabaseRepositoryFactory from "../../factories/DatabaseRepositoryFactory";
import { HandleErroController } from "../error/ErroController";

export class ObterAlunosController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const databaseFactory = new DatabaseRepositoryFactory(connection);
      const service = new ObterAlunosUseCase(databaseFactory);
      const data = await service.execute();
      return response.status(200).json(data);
    } catch (erro: any) {
      const controller = HandleErroController(
        erro,
        "Não foi possível localizar os Alunos."
      );
      return response.status(controller.status).json(controller);
    }
  }
}
